import React from "react";

/**
 * Icon component
 * @description The Icon component is for displaying images, logo, icon .... !!!
 * Since we all know the problem with images in web design,
 * Icon component will be the place where we will fix any bad images behaviour in our dom :-)
 * @param {String} src The source of images
 * @param {String} alt The description of images
 * @param {Object} style All desired styles for the images
 * @param {String} className The images classname
 * @param {Any} rest All other useful props
 * @author Arnaud LITAABA
 */
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