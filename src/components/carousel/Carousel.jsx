import React, {useEffect, useState} from "react";
import carouselClasses from "./carousel.module.scss"
import Icon from "../icon/Icon";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import {LEFT, RIGHT} from "../../utilities/constant";

/**
 * Carousel component
 * @description The carousel component for displaying certain images in automatic and/or manual mode
 * @param {Object} pictures Object with source (src) of images and text to show
 * @param {Boolean} auto Define the carrousel mode. Passing auto means true
 * @param {int} time Define the waiting time before sliding to next image
 * @author Arnaud LITAABA
 */
const Carousel = ({pictures, auto, time}) => {
    const {
        carousel, carouselController,
        carouselContainer, carouselControllerContainer,
        carouselText,
        showMore
    } = carouselClasses;

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
            backgroundImage: `url(${pictures[position]?.src ?? pictures[0]?.src})`
        }} className={carouselContainer}>
        </div>
        <div className={carouselText}>
            {pictures[position]?.text || pictures[0]?.text}
            <div className={showMore}>Show More</div>
        </div>
        <div className={carouselControllerContainer}>
            <Icon
                onClick={() => changePosition(LEFT)}
                className={carouselController}
                src={arrowLeft}
                style={{
                    height: "30px"
                }}
            />
            <Icon
                onClick={() => changePosition(RIGHT)}
                className={carouselController}
                src={arrowRight}
                style={{
                    height: "30px"
                }}
            />
        </div>
    </div>
}

export default Carousel