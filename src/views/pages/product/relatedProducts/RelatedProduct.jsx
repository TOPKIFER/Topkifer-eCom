import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import relatedWhiteClasses from "views/pages/product/relatedProducts/relatedWhite.module.scss";
import relatedBlackClasses from "views/pages/product/relatedProducts/relatedBlack.module.scss";
import {relativesBlackCategoriesProduct, relativesCategoriesProduct, WHITE} from "utilities/constant";
import CategoriesContent from "components/categoriesContent/CategoriesContent";
import {getMessage} from "utilities/i18n";


/**
 * Related product component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest the others useful props
 * @author Arnaud LITAABA
 */
const RelatedProduct = ({actualTheme, product, ...rest}) => {

    const {
        wrapper,
        title
    } = actualTheme === WHITE ? relatedWhiteClasses : relatedBlackClasses;

    const {id} = rest;

    const [state, setState] = useState([]);

    const fetchRelativeProduct = () => {
        let result = actualTheme === WHITE ? relativesCategoriesProduct.find(p => p.idProduct === +id) :
            relativesBlackCategoriesProduct.find(p => p.idProduct === +id);
        setState(result ? result.relativeProducts : []);
    }

    useEffect(fetchRelativeProduct, [actualTheme, id])

    return <>
        <div className={wrapper}>
            <CategoriesContent
                noArrow
                customCategoriesContentTitle={title}
                products={state}
                title={getMessage("relatedProducts")}
            />
        </div>
    </>
}

/**
 * connect the related product Component to the whole store
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
 * connect the related product component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(RelatedProduct)