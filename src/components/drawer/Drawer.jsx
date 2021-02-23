import React from "react";
import drawerWhiteClasses from "./drawerWhite.module.scss"
import drawerBlackClasses from "./drawerBlack.module.scss"
import {LEFT, MENU, WHITE} from "utilities/constant";
import {DrawerCartContext, DrawerSearchContext} from "App";
import {toggleAuthVisibility} from "utilities/utilities";
import {connect} from "react-redux";

/**
 * Drawer component
 * @description The drawer component to display more data. It will use @DrawerSearchContext
 * in CONSUMER mode to check the visibility and also trigger this one with @toggleAuthVisibility
 * @param {String} position Where show the drawer !!!
 * @param {String} target the targeted drawer !!!
 * @param {String} actualTheme Actual theme of the app
 * @param {Any} content The content to show !!!
 * @author Arnaud LITAABA
 */
const Drawer = ({position, content, actualTheme, target}) => {
    const {
        drawer,
        rightDrawer,
        drawerOverlay,
        drawerClosing,
        rightDrawerClosing
    } = actualTheme === WHITE ? drawerWhiteClasses : drawerBlackClasses


    return target === MENU ? <DrawerSearchContext.Consumer>
        {/*
        We use destructuring to extract only the data
        we need from DrawerSearchContext. And here we have :
        - mobileSearch to hide the drawer when user click on search icon.
        - visible to track the drawer visibility
        - isClosing to add closing animation on the drawer while closing
        */}
        {({visible, mobileSearch, isClosing}) => (
            visible && !mobileSearch && <>
                <DrawerSearchContext.Consumer>
                    {/*
        We use destructuring to extract only the data
        we need from DrawerSearchContext. And here we have :
        - mobileSearch to track the visibility of search icon.
        - setContextValue to toggle the visibility of search icon
        */}
                    {({setContextValue}) => (
                        <div onClick={() => toggleAuthVisibility(setContextValue, !visible)}
                             className={drawerOverlay}/>
                    )}
                </DrawerSearchContext.Consumer>

                <div style={{
                    left: position === LEFT ? 0 : "unset"
                }
                } className={isClosing ? drawerClosing : drawer}>
                    {content}
                </div>
            </>
        )}
    </DrawerSearchContext.Consumer> : <DrawerCartContext.Consumer>
        {
            ({visible, isClosing}) => (
                visible && <>
                    <DrawerCartContext.Consumer>
                        {
                            ({setCartContextValue}) => (
                                <div onClick={() => toggleAuthVisibility(setCartContextValue, !visible)}
                                     className={drawerOverlay}/>
                            )
                        }
                    </DrawerCartContext.Consumer>
                    <div style={{
                        left: position === LEFT ? 0 : "unset"
                    }
                    } className={isClosing ? rightDrawerClosing : rightDrawer}>
                        {content}
                    </div>
                </>
            )
        }
    </DrawerCartContext.Consumer>
}


/**
 * connect the drawer Component to the whole store
 * Extract the function and the value of the whole state we need here
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme,
    }
}

/**
 * connect the drawer Component to the whole store
 * @description Extract the function and the value of the whole state we need here
 * Bind all extracted values to drawer props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Drawer)