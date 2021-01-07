import React from "react";

const Icon = ({src, alt, style, className, ...rest}) => {
    return <img
        className={className || ""}
        style={style || {}}
        src={src}
        alt={alt || "icon"}
        {...rest}
    />
}

export default Icon