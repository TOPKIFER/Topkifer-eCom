import React from "react";
import {connect} from "react-redux";
import productQuickInfoWhiteClasses
    from "views/pages/product/productTools/productQuickInfo/productQuickInfoWhite.module.scss";
import productQuickInfoBlackClasses
    from "views/pages/product/productTools/productQuickInfo/productQuickInfoBlack.module.scss";
import {defaultIconSize, WHITE} from "utilities/constant";
import {getMessage} from "utilities/i18n";
import Icon from "components/icon/Icon";
import shareIcon from "assets/icons/shareWhite.svg";
import ProductParams from "views/pages/product/productTools/productQuickInfo/productParams/ProductParams";
import Stars from "views/pages/product/stars/Stars";


/**
 * Product Tools component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest others useful props
 * @author Arnaud LITAABA
 */
const ProductQuickInfo = ({actualTheme, product,...rest}) => {

    const {
        productTools,
        productToolsTop,
        productBestSeller,
        productTitle,
        productPrice,
        priceClass,
        currencyClass,
        productDescription,
        productInfo,
    } = actualTheme === WHITE ? productQuickInfoWhiteClasses : productQuickInfoBlackClasses;

    const {title, description, price} = product;
    return <div className={productTools}>
        <div className={productInfo}>
            <div className={productToolsTop}>
                <div className={productBestSeller}>
                    {getMessage("bestSeller")}
                </div>
                {
                    /*
                    *  <div className={productShare}>
                    <Icon
                        src={shareIcon}
                        size={defaultIconSize}
                    />
                </div>
                    * */
                }
            </div>
            <div className={productTitle}>{title}</div>
            <Stars
                product={product}
            />
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