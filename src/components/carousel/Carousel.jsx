import React, {useEffect, useState} from "react";
import carouselWhiteClasses from "./carouselWhite.module.scss"
import carouselBlackClasses from "./carouselBlack.module.scss"
import Icon from "components/icon/Icon";
import arrowLeft from "assets/icons/arrowLeft.svg";
import arrowRight from "assets/icons/arrowRight.svg";
import {LEFT, RIGHT, WHITE} from "utilities/constant";
import {connect} from "react-redux";

/**
 * Carousel component
 * @description The carousel component for displaying certain images in automatic and/or manual mode
 * @param {Object} products Object with source (src) of images and text to show
 * @param {Boolean} auto Define the carrousel mode. Passing auto means true
 * @param {int} time Define the waiting time before sliding to next image
 * @param {String} actualTheme the actual theme of the app
 * @author Arnaud LITAABA
 */
const Carousel = ({products, auto, time, actualTheme}) => {
    const {
        carousel, carouselController,
        carouselContainer, carouselControllerContainer,
        carouselText,
        showMore
    } = actualTheme === WHITE ? carouselWhiteClasses : carouselBlackClasses;

    // Position of showed image, default 1
    const [position, setPosition] = useState(1);

    // We use this to trigger the slide
    useEffect(() => {

        /* we save the the timeout function into a variable.
        * @param {int} autoChange The variable who store the timeout function
        * It is like a pointer to the function which will allow us to easily
        * cancel the function when the component will unmount
        * With that, we will avoid memory leak
        **/
        let autoChange = 0;
        if (auto) {

            //We create it there
            autoChange = setTimeout(() => {
                changePosition(RIGHT);
            }, time || 6000)
        }
        return () => {
            //We clear it there
            clearTimeout(autoChange);
        }
    })

    /**
     * Change position function
     * @description The change position function
     * @param {String} direction the next direction to move
     * @author Arnaud LITAABA
     */
    const changePosition = (direction) => {
        switch (position) {
            case 0:
                setPosition(direction === LEFT ? 2 : 1);
                return;
            case 1:
                setPosition(direction === LEFT ? 0 : 2);
                return
            case 2:
                setPosition(direction === LEFT ? 1 : 0);
                return;
            default:
                return
        }
    }

    return <div className={carousel}>
        {
            /*
            * We will use background image property to switch between images
            * If pictures are provided and at least 3, we will use the src attribute of all pictures
            * since we are receiving objects
            * if not juste use the first picture [pictures[0].src]
            * [pictures[0]?.src] is to avoid error is no pictures is provided
            * */
        }
        <div style={{
            backgroundImage: `url(${products[position]?.src ?? products[0]?.src})`
        }} className={carouselContainer}>
        </div>
        <div className={carouselText}>
            {products[position]?.text || products[0]?.text}
            <div className={showMore}>Show More</div>
        </div>
        <div className={carouselControllerContainer}>
            <Icon
                onClick={() => changePosition(LEFT)}
                className={carouselController}
                src={arrowLeft}
                size="30px"
            />
            <Icon
                onClick={() => changePosition(RIGHT)}
                className={carouselController}
                src={arrowRight}
                size="30px"
            />
        </div>
    </div>
}

/**
 * connect the item card Component to the whole store
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

/**
 * connect the item card Component to the whole store
 * @description Extract the theme value
 * bind theme value to item card props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Carousel)