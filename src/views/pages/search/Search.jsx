import React from "react";
import {connect} from "react-redux";
import {categoriesBlackProducts, categoriesProducts, WHITE} from "utilities/constant";
import whiteClasses from "./searchWhite.module.scss"
import blackClasses from "./searchBlack.module.scss"
import {makeIndex} from "utilities/utilities";
import ItemCard from "components/itemCard/ItemCard";
import {getMessage} from "utilities/i18n";
import Stars from "views/pages/product/stars/Stars";


/**
 * Search component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest the other useful props
 * @author Arnaud LITAABA
 */
const Search = ({actualTheme, ...rest}) => {

    const {loggedInUser, match} = rest;
    const {search} = match.params;

    const {
        searchWrapper,
        searchItem,
        productImage,
        itemCardWrapper,
        itemCard,
        cartProductTitle,
        cartProductPrice,
        titleResult,
        resultsClass,
        resultsInfo,
        stars,
        target
    } = actualTheme === WHITE ? whiteClasses : blackClasses;

    let results = actualTheme === WHITE ? [...categoriesProducts].filter(v => v.title.toLowerCase().includes(search.toLowerCase())) :
        [...categoriesBlackProducts].filter(v => v.title.toLowerCase().includes(search.toLowerCase()));


    return <div className={searchWrapper}>

        <div className={titleResult}>
            {results.length} {getMessage("showingResultFor")} <span className={target}>{search}</span>
        </div>

        <div className={resultsClass}>
            {
                results.map(product => {
                    return <div key={makeIndex(product.id, "search-result")} className={searchItem}>
                        <div className={productImage}>
                            <ItemCard
                                wrapperAddonClass={itemCardWrapper}
                                itemCardAddonClass={itemCard}
                                full={false}
                                allowClick={false}
                                product={product}
                            />
                            <div className={resultsInfo}>
                                <div className={cartProductTitle}>
                                    {product.title}
                                </div>
                                <div className={stars}>
                                    <Stars product={product}/>
                                </div>
                                <div className={cartProductPrice}>{
                                    product.price
                                } cfa
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }
        </div>
    </div>
}

/**
 * connect the cart Component to the whole store
 * Extract the theme value
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme,
        loggedInUser: state.loginState.loggedInUser,
    }
}

/**
 * connect the search Component to the whole store
 * @description Extract the theme value
 * bind theme value to navbar props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Search)