import React from "react";
import arrowRight from "assets/icons/arrowRight.svg"
import categoriesContentClasses from "./categoriesContent.module.scss"
import Icon from "../icon/Icon";
import ItemCard from "../itemCard/ItemCard";
import {isMobile, makeIndex} from "../../utilities/utilities";

/**
 * Categories content component
 * @description The categories content component for displaying all available categories content
 * @param {String} title A title for the category
 * @param {Function} onArrowClick The trigger for navigate to other link
 * @param {Array} pictures Array of pictures to display
 * @return A fully categories content with title and images
 * @author Arnaud LITAABA
 */
const CategoriesContent = ({title, onArrowClick, pictures = []}) => {

    const {
        categoriesContentWrapper,
        categoriesContentHeader,
        categoriesContentTitle,
        categoriesContent
    } = categoriesContentClasses;

    return <div className={categoriesContentWrapper}>
        <div className={categoriesContentHeader}>
            <b><h3 className={categoriesContentTitle}>{title || "Title"}</h3></b>
            <Icon
                onClick={onArrowClick || null}
                src={arrowRight}
                alt="arrow-right"
                style={{
                    height: "36px"
                }}
            />
        </div>
        <div className={categoriesContent}>
            {
                pictures.map((picture, index) => {
                    const {title} = picture
                    return isMobile ? index < 4 && <ItemCard key={makeIndex(title, "categories", index)}
                                                             picture={picture}
                                                             full
                    /> :
                        <ItemCard key={makeIndex(title, "categories", index)}
                                  picture={picture}
                                  full
                        />
                })
            }
        </div>
    </div>
}

export default CategoriesContent