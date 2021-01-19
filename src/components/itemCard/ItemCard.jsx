import React from "react";
import itemCardWhiteClasses from "./itemCardWhite.module.scss";
import itemCardBlackClasses from "./itemCardBlack.module.scss";
import bag from "assets/icons/bag.svg";
import heart from "assets/icons/heart.svg";
import Icon from "components/icon/Icon";
import {APP_URL, defaultIconSize, WHITE} from "utilities/constant";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const {PRODUCT} = APP_URL;

/**
 * Item card component
 * @description The item card component for categories images
 * @param {Boolean} full Display only image or not
 * @param {Boolean} allowClick Display only image or not
 * @param {Object} product The object image to display with the source, the price and the title
 * @param {String} actualTheme the actual theme of the app
 * @param {Any} rest All other useful props
 * @return An item card with the image
 * @author Arnaud LITAABA
 */
const ItemCard = ({full = true, allowClick = true, product, actualTheme, ...rest}) => {

    const {history} = rest;

    const {
        itemCardWrapper,
        itemCard,
        itemCardImage,
        itemCardActions,
        itemCardText,
        itemCardTitle,
        itemCardPrice,
        action,
        moreDetails
    } = actualTheme === WHITE ? itemCardWhiteClasses : itemCardBlackClasses;

    const {title, src, price, id} = product;

    const onClick = () => history.push(PRODUCT + "/" + id);

    return <div className={itemCardWrapper}>
        <div className={itemCard}>
            <div
                style={{
                    backgroundImage: `url(${src})`
                }}
                className={itemCardImage}>
                {allowClick && <div onClick={onClick} className={moreDetails}>More details</div>}
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
 * connect the item card Component to the whole store and to the router
 * @description Extract the theme value and the history prop for navigation
 * bind theme value to item card props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(withRouter(ItemCard))