import React, {useEffect} from "react";
import {connect} from "react-redux";
import cartPreviewWhiteClasses from "./cartPreviewWhite.module.scss";
import cartPreviewBlackClasses from "./cartPreviewBlack.module.scss";
import {APP_URL, INSIDE_NAVIGATION, userBlackShoppingCart, userWhiteShoppingCart, WHITE} from "utilities/constant";
import {DrawerCartContext} from "App";
import {makeIndex, overTen, sumCart, toArray, toggleAuthVisibility} from "utilities/utilities";
import {getMessage} from "utilities/i18n";
import {withRouter} from "react-router-dom"
import {changeCart} from "redux/actions/cart/cartActions";
import ItemCard from "components/itemCard/ItemCard";

/**
 * Cart preview component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest the other useful props
 * @author Arnaud LITAABA
 */
const PreviewCart = ({actualTheme, ...rest}) => {

    const {
        wrapper,
        closeDrawerClass,
        content,
        title,
        bag,
        bagBadge,
        titleMessage,
        previewFooter,
        checkout,
        viewCart,
        previewTotal,
        cartContent,
        productImage,
        cartProductTitle,
        itemCard, itemCardWrapper,
        cartProductRemove
    } = actualTheme === WHITE ? cartPreviewWhiteClasses : cartPreviewBlackClasses;

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

    const {history, cartState, changeCart} = rest;

    const {valuesCart, quantities, totals, coupon} = cartState;

    const {CART} = APP_URL;

    const viewCartMessage = getMessage("viewCart")

    const getTotals = (totals) => {
        return Object.keys(totals).length > 0 ? Object.values(totals).length === 1 ? Object.values(totals)[0] :
            toArray(totals).reduce(sumCart) - (coupon.valid ? 2000 : 0) : 0
    }

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

    return <div className={wrapper}>
        <div className={title}>

            <DrawerCartContext.Consumer>
                {
                    ({visible, setCartContextValue}) => (
                        <div onClick={() => toggleAuthVisibility(setCartContextValue, !visible)}
                             className={closeDrawerClass}>X</div>
                    )
                }
            </DrawerCartContext.Consumer>
            <div className={bag}>
                {10 > 0 && <div className={bagBadge}>{
                    overTen(10)
                }</div>}
                <div className={titleMessage}>{getMessage("yourCart")}</div>
            </div>
        </div>
        <div className={content}>
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

                        <div>
                            {getMessage("quantity")} : {quantities[value.id]}
                        </div>

                        <div className={"cartProductPrice"}>{
                            product.price
                        } cfa
                        </div>
                    </div>
                    <div className={cartProductRemove}>
                        <span onClick={() => removeItem(value.id)}>x</span>
                    </div>
                </div>
            })}
        </div>
        <div className={previewTotal}>
            <div>
                {getMessage("total")} :
            </div>
            <div>{getTotals(totals)} cfa</div>
        </div>
        <div className={previewFooter}>
            <DrawerCartContext.Consumer>
                {
                    ({visible, setCartContextValue}) => (
                        <div onClick={() => {
                            history.push(CART);
                            toggleAuthVisibility(setCartContextValue, !visible)
                        }
                        } className={viewCart}>{viewCartMessage}</div>
                    )
                }
            </DrawerCartContext.Consumer>

            <div className={checkout}>{getMessage("checkout")}</div>
        </div>
    </div>
}

/**
 * connect the cart preview Component to the whole store
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
 * connect the cart preivew Component to the whole store
 * @description Extract the theme value
 * bind theme value to navbar props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps, {
    changeCart
})(withRouter(PreviewCart))