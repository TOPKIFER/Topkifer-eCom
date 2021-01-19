import React from "react";
import {TOP} from "../../utilities/constant";

/**
 * Scroll to component
 * @description The scroll to component restore the browser scroll state while navigation
 * @param {JSX} children A react JSX elements to render after scroll to desired position
 * @param {String} position The desired position to scroll at
 * @author Arnaud LITAABA
 */
const ScrollTo = ({children, position= TOP}) => {
    switch (position) {
        case TOP:
            window.scrollTo(0, 0);
            break
        default:
            break
    }

    return <>{children}</>
}

export default ScrollTo