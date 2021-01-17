import React from "react";
import drawerClasses from "./drawer.module.scss"
import {LEFT} from "utilities/constant";
import {DrawerSearchContext} from "App";
import {toggleAuthVisibility} from "utilities/utilities";

/**
 * Drawer component
 * @description The drawer component to display more data. It will use @DrawerSearchContext
 * in CONSUMER mode to check the visibility and also trigger this one with @toggleAuthVisibility
 * @param {String} position Where show the drawer !!!
 * @param {Any} content The content to show !!!
 * @author Arnaud LITAABA
 */
const Drawer = ({position, content}) => {
    const {drawer, drawerOverlay, drawerClosing} = drawerClasses;


    return <DrawerSearchContext.Consumer>
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
    </DrawerSearchContext.Consumer>
}

export default Drawer