import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import productQuickInfoWhiteClasses
    from "views/pages/product/productTools/productQuickInfo/productQuickInfoWhite.module.scss";
import productQuickInfoBlackClasses
    from "views/pages/product/productTools/productQuickInfo/productQuickInfoBlack.module.scss";
import {defaultIconSize, WHITE} from "utilities/constant";
import {getMessage} from "utilities/i18n";
import Icon from "components/icon/Icon";
import shareIcon from "assets/icons/shareWhite.svg";
import starIcon from "assets/icons/starNotChecked.svg";
import {makeIndex, multipleClasses} from "utilities/utilities";
import ProductParams from "views/pages/product/productTools/productQuickInfo/productParams/ProductParams";


/**
 * Product Tools component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @author Arnaud LITAABA
 */
const ProductQuickInfo = ({actualTheme, product}) => {

    const {
        productTools,
        productToolsTop,
        productBestSeller,
        productShare,
        productStarClass,
        productStarAndReviewsClass,
        productStarClasses,
        productStarClassChecked,
        productReviewsClass,
        productTitle,
        productPrice,
        priceClass,
        currencyClass,
        productDescription,
        productInfo,
    } = actualTheme === WHITE ? productQuickInfoWhiteClasses : productQuickInfoBlackClasses;

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

    useEffect(defineChecked, [])

    const {title, description, price, reviews} = product;
    return <div className={productTools}>
        <div className={productInfo}>
            <div className={productToolsTop}>
                <div className={productBestSeller}>
                    {getMessage("bestSeller")}
                </div>
                <div className={productShare}>
                    <Icon
                        src={shareIcon}
                        size={defaultIconSize}
                    />
                </div>
            </div>
            <div className={productTitle}>{title}</div>
            <div className={productStarAndReviewsClass}>
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
            <div className={productPrice}>
                <span className={priceClass}> {price}</span>
                <span style={{
                    fontSize: "26px"
                }} className={currencyClass}>cfa</span>
            </div>
            <div className={productDescription}>{
                description.split("").map((s, i) => i < 200 ? s : null)
            }
                {description.length > 200 && <span>
                    ...
                    <span style={{
                        textDecoration: "underline",
                        marginLeft: "1rem",
                        cursor: "pointer"
                    }}>{getMessage("readMore")}</span>
                </span>}
            </div>
        </div>
        <ProductParams
            product={product}
        />
    </div>
}

/**
 * connect the product tools Component to the whole store
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
 * connect the product tools Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(ProductQuickInfo)