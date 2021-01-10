import React, {useEffect, useState} from "react";
import carouselClasses from "./carousel.module.scss"
import Icon from "../icon/Icon";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";
import {LEFT, RIGHT} from "../../utilities/constant";

const Carousel = ({pictures, auto, time}) => {
    const {
        carousel, carouselController,
        carouselContainer, carouselControllerContainer,
        carouselText,
        showMore,
        showMoreMobile
    } = carouselClasses;

    const [position, setPosition] = useState(1);

    useEffect(() => {
        let autoChange = 0;
        if (auto) {
            autoChange = setTimeout(() => {
                changePosition(RIGHT);
            }, time || 6000)
        }
        return () => {
            clearTimeout(autoChange);
        }
    })

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