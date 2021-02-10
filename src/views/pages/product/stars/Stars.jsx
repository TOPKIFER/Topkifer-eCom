import React, {useEffect, useState} from "react";
import Icon from "components/icon/Icon";
import {makeIndex, multipleClasses} from "utilities/utilities";
import starIcon from "assets/icons/starNotChecked.svg";
import {defaultIconSize, WHITE} from "utilities/constant";
import starsWhiteClasses from "./starsWhite.module.scss";
import starsBlackClasses from "./starsBlack.module.scss";
import {getMessage} from "utilities/i18n";
import {connect} from "react-redux";


/**
 * Stars component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest other useful props
 * @author Arnaud LITAABA
 */
const Stars = ({actualTheme, product, ...rest}) => {

    const {
        productStarAndReviewsClass,
        productStarClasses,
        productStarClass,
        productStarClassChecked,
        productReviewsClass
    } = actualTheme === WHITE ? starsWhiteClasses : starsBlackClasses;

    const {customWrapperClass,id} = rest;

    const [stars, setStars] = useState({
        total: [...Array(5).keys()].map(v => v + 1),
        checked: []
    });

    const defineChecked = () => {
        setStars({
            ...stars,
            checked: [1, 2, 3, 4]
        })
    }

    useEffect(defineChecked, [id])

    const {reviews} = product;


    return <div className={multipleClasses(customWrapperClass, productStarAndReviewsClass)}>
        <div className={productStarClasses}>
            {stars.total.map((value, index) => {
                return <Icon
                    className={multipleClasses(productStarClass, stars.checked.includes(value) ? productStarClassChecked : "_")}
                    key={makeIndex(value, "stars", index)}
                    src={starIcon}
                    size={defaultIconSize}
                />
            })}
        </div>
        <div className={productReviewsClass}> {reviews.total} {getMessage("reviews")}</div>
    </div>

}


/**
 * connect the stars Component to the whole store
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
 * connect the stars Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Stars)