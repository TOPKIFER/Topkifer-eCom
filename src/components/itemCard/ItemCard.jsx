import React from "react";
import itemCardWhiteClasses from "./itemCardWhite.module.scss";
import itemCardBlackClasses from "./itemCardBlack.module.scss";
import bag from "assets/icons/bag.svg";
import heart from "assets/icons/heart.svg";
import Icon from "components/icon/Icon";
import {defaultIconSize, WHITE} from "utilities/constant";
import {connect} from "react-redux";


/**
 * Item card component
 * @description The item card component for categories images
 * @param {Boolean} full Display only image or not
 * @param {Object} picture The object image to display with the source, the price and the title
 * @param {String} actualTheme the actual theme of the app
 * @return An item card with the image
 * @author Arnaud LITAABA
 */
const ItemCard = ({full = true, picture, actualTheme}) => {

    const {
        itemCardWrapper,
        itemCard,
        itemCardImage,
        itemCardActions,
        itemCardText,
        itemCardTitle,
        itemCardPrice,
        action
    } = actualTheme === WHITE ? itemCardWhiteClasses : itemCardBlackClasses;

    const {title, src, price} = picture;

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
                            size={defaultIconSize}
                        />
                        <Icon
                            className={action}
                            src={bag}
                            size={defaultIconSize}
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
export default connect(mapStateToProps)(ItemCard)