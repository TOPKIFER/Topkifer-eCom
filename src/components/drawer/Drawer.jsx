import React from "react";
import drawerClasses from "./drawer.module.scss"
import {LEFT} from "../../utilities/constant";
import {AuthContext} from "../../App";
import {toggleAuthVisibility} from "../../utilities/utilities";

const Drawer = ({position, content}) => {
    const {drawer, drawerOverlay, drawerClosing} = drawerClasses;


    return <AuthContext.Consumer>
        {({visible, isClosing}) => (
            visible && <>
                <AuthContext.Consumer>
                    {({setVisible}) => (
                        <div onClick={() => toggleAuthVisibility(setVisible, !visible)}
                             className={drawerOverlay}/>
                    )}
                </AuthContext.Consumer>

                <div style={{
                    left: position === LEFT ? 0 : "unset"
                }
                } className={isClosing ? drawerClosing : drawer}>
                    {content}
                </div>
            </>
        )}
    </AuthContext.Consumer>
}

export default Drawer