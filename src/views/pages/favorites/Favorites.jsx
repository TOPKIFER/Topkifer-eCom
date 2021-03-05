import React, {useEffect} from "react";
import {getMessage} from "utilities/i18n";
import favoritesWhiteClasses from "views/pages/favorites/favoritesWhite.module.scss";
import favoritesBlackClasses from "views/pages/favorites/favoritesBlack.module.scss";
import {INSIDE_NAVIGATION, userBlackShoppingCart, userWhiteShoppingCart, WHITE} from "utilities/constant";
import {connect} from "react-redux";
import ItemCard from "components/itemCard/ItemCard";
import {makeIndex} from "utilities/utilities";
import ScrollTo from "components/scrollTo/ScrollTo";
import {changeCart} from "redux/actions/cart/cartActions";
import CatchError from "components/catchError/CatchError";


/**
 * Favorites component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest the other useful props
 * @author Arnaud LITAABA
 */
const Favorites = ({actualTheme, ...rest}) => {

    const {loggedInUser, cartState, changeCart} = rest;

    const fetchUserCart = () => {
        let totals = {};
        let quantities = {};
        userWhiteShoppingCart.forEach(value => {
            totals[value.id] = value.quantity * value.product.price;
            quantities[value.id] = value.quantity;
        })

        changeCart({
            valuesCart: actualTheme === WHITE ? userWhiteShoppingCart : userBlackShoppingCart,
            totals: {...totals},
            quantities: {...quantities},
        })
    }

    useEffect(fetchUserCart, [actualTheme]);

    const {
        wrapper,
        title,
        wholeContent,
        cartHeader,
        cartContent,
        itemCardWrapper,
        cartProductTitle,
        productImage,
        itemCard,
        cartProductPrice,
        cartProductRemove,
        cartProductQuantity,
        quantityClass,
        quantityTitle,
        quantityContent,
        sign,
        signDisabled,
        value,
        actions,
        mobileWrapper,
    } = actualTheme === WHITE ? favoritesWhiteClasses : favoritesBlackClasses;

    const classes = {
        actions,
        quantityClass,
        quantityTitle,
        quantityContent,
        sign,
        signDisabled,
        value
    }

    const {valuesCart, totals, quantities, coupon, navigationPosition} = cartState;


    const removeItem = (id) => {
        const oldTotals = {...totals};
        const oldQuantities = {...quantities};
        delete oldTotals[id];
        delete oldQuantities[id];

        changeCart({
            totals: {...oldTotals},
            quantities: {...oldQuantities},
            valuesCart: cartState.valuesCart.filter(v => v.id !== id),
            navigationPosition: INSIDE_NAVIGATION
        })
    }


    return <ScrollTo position={navigationPosition}>
        <CatchError>
            <div className={wrapper}>
                <div className={title}>{getMessage("favorites")}</div>
                <div className={wholeContent}>
                    <div className={cartHeader}>
                        <div>Product</div>
                        <div>Price</div>
                    </div>
                    <div className={cartContent}>
                        {valuesCart.map((value, index) => {
                            const {quantity, product, size, color} = value;
                            return <React.Fragment key={makeIndex(index, "cartContent")}>
                                <div className={productImage}>
                                    <ItemCard
                                        wrapperAddonClass={itemCardWrapper}
                                        itemCardAddonClass={itemCard}
                                        full={false}
                                        allowClick={false}
                                        product={product}
                                    />
                                    <div className={cartProductTitle}>
                                        {product.title}
                                    </div>
                                </div>
                                <div className={cartProductPrice}>{
                                    product.price
                                } cfa
                                </div>
                                <div className={cartProductQuantity}>
                                    {getMessage("addToCart")}
                                </div>

                                <div className={cartProductRemove}>
                                    <span onClick={() => removeItem(value.id)}>x</span>
                                </div>
                            </React.Fragment>
                        })}
                    </div>
                </div>

            </div>
            <div className={mobileWrapper}>
                <div className={title}>{getMessage("favorites")}</div>
                <div className={wholeContent}>
                    {valuesCart.map((value, index) => {
                        const {quantity, product, size, color} = value;
                        return <div className={cartContent} key={makeIndex(index, "cartContent")}>
                            <div className={productImage}>
                                <ItemCard
                                    wrapperAddonClass={itemCardWrapper}
                                    itemCardAddonClass={itemCard}
                                    full={false}
                                    allowClick={false}
                                    product={product}
                                />

                            </div>
                            <div>
                                <div className={cartProductTitle}>
                                    {product.title}
                                </div>
                                <div className={cartProductPrice}>{
                                    product.price
                                } cfa
                                </div>
                                <div className={cartProductQuantity}>
                                    {getMessage("addToCart")}
                                </div>
                            </div>
                            <div className={cartProductRemove}>
                                <span onClick={() => removeItem(value.id)}>x</span>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </CatchError>
    </ScrollTo>
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
        cartState: state.cartState
    }
}

/**
 * connect the cart Component to the whole store
 * @description Extract the theme value
 * bind theme value to navbar props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps, {
    changeCart
})(Favorites)