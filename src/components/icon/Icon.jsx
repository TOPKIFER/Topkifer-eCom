import React from "react";

const Icon = ({src, alt, style, className}) => {
    return <img className={className || ""} style={style || {}} src={src} alt={alt || "icon"}/>
}

export default Icon