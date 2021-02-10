import React from "react";
import {connect} from "react-redux";
import mobileProductWhiteClasses from "views/pages/product/mobilePart/mobileProductWhite.module.scss";
import mobileProductBlackClasses from "views/pages/product/mobilePart/mobileProductBlack.module.scss";
import {WHITE} from "utilities/constant";
import {getMessage} from "utilities/i18n";
import ProductImage from "views/pages/product/productImage/ProductImage";
import Stars from "views/pages/product/stars/Stars";
import ProductParams from "views/pages/product/productTools/productQuickInfo/productParams/ProductParams";
import ProductMoreInfo from "views/pages/product/productMoreInfo/ProductMoreInfo";
import RelativeProduct from "views/pages/product/relatedProducts/RelatedProduct";
import ProductIcons from "views/pages/product/productsIcons/ProductIcons";


/**
 * Product Tools component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest the other useful props
 * @author Arnaud LITAABA
 */
const MobileProduct = ({actualTheme, product, ...rest}) => {

    const {
        productTools,
        productTitle,
        productBestSeller,
        imageAndStar,
        starsClass,
        tools,
        relativeProduct,
        productPrice,
        priceClass,
        currencyClass,
        productDescription,
        iconsClass
    } = actualTheme === WHITE ? mobileProductWhiteClasses : mobileProductBlackClasses;

    const {id} = rest;

    const {title, description, price} = product;
    return <div className={productTools}>
        <div className={productTitle}>
            {title}
        </div>
        <div className={productBestSeller}>
            {getMessage("bestSeller")}
        </div>
        <div className={imageAndStar}>
            <ProductImage
                id={id}
                noIcons
                product={product}
            />
            <Stars
                id={id}
                customWrapperClass={starsClass}
                product={product}
            />

            <ProductIcons
                id={id}
                customWrapperClass={iconsClass}
                product={product}
            />

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

        <div className={tools}>
            <ProductParams
                id={id}
                noIcons
                injectable={<div className={productPrice}>
                    <span className={priceClass}> {price}</span>
                    <span style={{
                        fontSize: "26px"
                    }} className={currencyClass}>cfa</span>
                </div>}
                product={product}
            />
        </div>
        <ProductMoreInfo
            id={id}
            product={product}
        />
        <div className={relativeProduct}>
            <RelativeProduct
                id={id}
                product={product}
            />
        </div>

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
export default connect(mapStateToProps)(MobileProduct)