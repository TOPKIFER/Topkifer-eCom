import React from "react";
import itemCardClasses from "./itemCard.module.scss";
import bag from "assets/icons/bag.svg";
import heart from "assets/icons/heart.svg";
import Icon from "../icon/Icon";
import {height} from "../../utilities/constant";

/**
 * Item card component
 * @description The item card component for categories images
 * @param {Boolean} full Display only image or not
 * @param {Object} picture The object image to display
 * @return An item card with the image
 * @author Arnaud LITAABA
 */
const ItemCard = ({full = true, picture}) => {

    const {
        itemCardWrapper,
        itemCard,
        itemCardImage,
        itemCardActions,
        itemCardText,
        itemCardTitle,
        itemCardPrice,
        action
    } = itemCardClasses;

    const {title, src, price} = picture;

    return null
    return <div className={itemCardWrapper}>
        <div className={itemCard}>
            <div
                style={{
                    backgroundImage: `url(${src})`
                }}
                className={itemCardImage}>

            </div>
            {
                full &&
                <div className={itemCardText}>
                    <div className={itemCardActions}>
                        <Icon
                            className={action}
                            src={heart}
                            alt="hear-icon"
                            style={{
                                height
                            }}
                        />
                        <Icon
                            className={action}
                            src={bag}
                            alt="bag-icon"
                            style={{
                                height
                            }}
                        />
                    </div>
                    <div className={itemCardTitle}>
                        {title}
                    </div>
                    <div className={itemCardPrice}>
                        {price}
                    </div>
                </div>
            }
        </div>
    </div>
}

export default ItemCard