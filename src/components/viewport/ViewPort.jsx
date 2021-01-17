import React from "react";
import handleViewport from 'react-in-viewport';

/**
 * Viewport component
 * @description We will this to optimise big data loading for better user experience
 * @author Arnaud LITAABA
 */
const Viewport = ({inViewport, forwardedRef, children}) => {
    return (
        <div ref={forwardedRef}>
            {inViewport && children}
        </div>
    );
};

export default handleViewport(Viewport);