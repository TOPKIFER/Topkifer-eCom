import React, {useEffect, useState} from "react";
import productClasses from "./product.module.scss";
import ScrollTo from "components/scrollTo/ScrollTo";
import ProductImage from "./productImage/ProductImage";
import {categoriesBlackProducts, categoriesProducts, WHITE} from "utilities/constant";
import {connect} from "react-redux"
import ProductQuickInfo from "views/pages/product/productTools/productQuickInfo/ProductQuickInfo";
import ProductParams from "views/pages/product/productTools/productQuickInfo/productParams/ProductParams";


/**
 * Product component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest all other useful props passed to the component
 * @author Arnaud LITAABA
 */
const Product = ({actualTheme, ...rest}) => {

    const {
        productWrapper,
    } = productClasses;

    /*
     * we extract the id from the url;
     */
    const {id} = rest.match.params;

    const [productState, setProductState] = useState({
            product: {},
            ready: false

        }
    )

    const fetchProduct = () => {
        /*
         * we find the targeted product with the extracted id;
         */
        const product = actualTheme === WHITE ? categoriesProducts.find(category => category.id === +id) :
            categoriesBlackProducts.find(category => category.id === +id);
        setProductState({
            product: product,
            ready: true
        })
    }

    useEffect(fetchProduct, [actualTheme]);

    const {ready, product} = productState;

    return ready ? <ScrollTo>
        <div className={productWrapper}>
            <ProductImage
                product={product}
            />
            <ProductQuickInfo
                product={product}
            />
        </div>
    </ScrollTo> : null
}

/**
 * connect the product Component to the whole store
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
 * connect the product Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Product)