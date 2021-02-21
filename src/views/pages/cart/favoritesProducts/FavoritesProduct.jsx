import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import favoritesWhiteClasses from "./favoritesWhite.module.scss";
import favoritesBlackClasses from "./favoritesBlack.module.scss";
import {categoriesBlackProducts, categoriesProducts, WHITE} from "utilities/constant";
import CategoriesContent from "components/categoriesContent/CategoriesContent";
import {getMessage} from "utilities/i18n";


/**
 * Favorites product component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest the others useful props
 * @author Arnaud LITAABA
 */
const FavoritesProduct = ({actualTheme, product, ...rest}) => {

    const {
        wrapper,
        cardImage,
        title
    } = actualTheme === WHITE ? favoritesWhiteClasses : favoritesBlackClasses;

    const {id, onClick} = rest;

    const [state, setState] = useState([]);

    const getFavorites = () => {
        let result = actualTheme === WHITE ? categoriesProducts.concat(categoriesProducts) : categoriesBlackProducts.concat(categoriesBlackProducts);
        setState(result ? result : []);
    }

    useEffect(getFavorites, [actualTheme, id])

    return <>
        <div className={wrapper}>
            <CategoriesContent
                onClick={onClick}
                noArrow
                moreCl={cardImage}
                customCategoriesContentTitle={title}
                products={state}
                title={getMessage("yourFavorites")}
            />
        </div>
    </>
}

/**
 * connect the favorites product Component to the whole store
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
 * connect the favorites product component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(FavoritesProduct)