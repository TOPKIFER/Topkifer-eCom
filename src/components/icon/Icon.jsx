import React from "react";
import {ReactSVG} from 'react-svg'
import {SEPARATOR, WHITE} from "../../utilities/constant";
import {connect} from "react-redux"

/**
 * Icon component
 * @description The Icon component is for displaying icon
 * @param {String} src The source of icon
 * @param {String} size The size of icon
 * @param {Object} style All desired styles for the icon
 * @param {String} className The icon classname
 * @param {String} wrapperClassName className The icon wrapper className
 * @param {String} actualTheme the actual theme of the app
 * @param {String} color icon color
 * @param {Any} rest All other useful props
 * @author Arnaud LITAABA
 */
const Icon = ({src, size, style, className, wrapperClassName, actualTheme, color, ...rest}) => {

    const {onClick} = rest;
    return <ReactSVG
        beforeInjection={(svg) => {
            if (className) {
                className.split(SEPARATOR).forEach(cl => {
                    svg.classList.add(cl)
                })
            }
            const styles = `
            height: ${size}; width: ${size};
             fill: ${actualTheme === WHITE ? color ?? "black" : color ?? WHITE}
            `
            svg.setAttribute('style', styles)

        }}
        src={src}
        className={wrapperClassName || ""}
        wrapper="span"
        onClick={onClick}
    />
}


/**
 * Image component
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
const Image = ({src, alt, style, className, ...rest}) => {
    return <img
        className={className || ""}
        style={style || {}}
        src={src}
        alt={alt || "icon"}
        {...rest}
    >
        <ReactSVG src={src}/>
    </img>
}

/**
 * connect the icon Component to the whole store
 * Extract the theme value
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme
    }
}

export default connect(mapStateToProps)(Icon)

export {Image}