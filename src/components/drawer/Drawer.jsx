import React from "react";
import drawerClasses from "./drawer.module.scss"
import {LEFT} from "../../utilities/constant";
import {DrawerSearchContext} from "../../App";
import {toggleAuthVisibility} from "../../utilities/utilities";

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
        {({visible, mobileSearch, isClosing}) => (
            visible && !mobileSearch && <>
                <DrawerSearchContext.Consumer>
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