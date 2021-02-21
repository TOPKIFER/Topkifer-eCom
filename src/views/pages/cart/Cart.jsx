import React, {useEffect, useState} from "react";
import {getMessage} from "utilities/i18n";
import cartWhiteClasses from "./cartWhite.module.scss";
import cartBlackClasses from "./cartBlack.module.scss";
import {INSIDE_NAVIGATION, TOP, userBlackShoppingCart, userWhiteShoppingCart, WHITE} from "utilities/constant";
import {connect} from "react-redux";
import Quantity from "components/quantity/Quantity";
import ItemCard from "components/itemCard/ItemCard";
import {makeIndex, multipleClasses, toArray} from "utilities/utilities";
import FavoritesProduct from "views/pages/cart/favoritesProducts/FavoritesProduct";
import ScrollTo from "components/scrollTo/ScrollTo";

/**
 * Cart component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest the other useful props
 * @author Arnaud LITAABA
 */
const Cart = ({actualTheme, ...rest}) => {

    const {loggedInUser} = rest;

    const [cart, setCart] = useState({
        valuesCart: [],
        totals: {},
        quantities: {},
        coupon: {
            valid: false,
            value: "",
            isApplied: false
        },
        navigationPosition: TOP
    });

    const fetchUserCart = () => {
        let totals = {};
        let quantities = {};
        userWhiteShoppingCart.forEach(value => {
            totals[value.id] = value.quantity * value.product.price;
            quantities[value.id] = value.quantity;
        })
        setCart({
            ...cart,
            valuesCart: actualTheme === WHITE ? userWhiteShoppingCart : userBlackShoppingCart,
            totals: {...totals},
            quantities: {...quantities},
        });
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
        cartProductTotal,
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
        couponAndCheckoutClass,
        couponClass,
        checkoutClass,
        applyTools,
        couponTitleClass,
        applyClass,
        couponInput,
        checkoutTitle,
        subTotalClass,
        subTotalTitle,
        subTotalValue,
        totalClass,
        totalTitle,
        totalValue,
        proceedClass,
        favoritesClass,
        disabledApply
    } = actualTheme === WHITE ? cartWhiteClasses : cartBlackClasses;

    const classes = {
        actions,
        quantityClass,
        quantityTitle,
        quantityContent,
        sign,
        signDisabled,
        value
    }

    const {valuesCart, totals, quantities, coupon, navigationPosition} = cart;

    const editCart = (target, id, value, price) => {
        setCart({
            ...cart,
            [target]: {
                [id]: value
            },
            totals: {
                ...cart.totals,
                [id]: price * value,
            },
            navigationPosition: INSIDE_NAVIGATION
        })
    }

    const setCoupon = ({value}) => {
        setCart({
            ...cart,
            coupon: {
                valid: value !== "" && value && value.length >= 6,
                value,
                isApplied: false
            },
            navigationPosition: INSIDE_NAVIGATION
        })
    }

    const removeItem = (id) => {
        setCart({
            ...cart,
            valuesCart: cart.valuesCart.filter(v => v.id !== id),
            navigationPosition: INSIDE_NAVIGATION
        })
    }

    const sumThis = (first, next) => {
        const {data: firstData} = first;
        const {data: nextData} = next;
        if (firstData) return firstData + nextData;
        return first + nextData;
    }

    const couponAndCheckout = <div className={couponAndCheckoutClass}>
        <div className={couponClass}>
            <div className={couponTitleClass}>
                {getMessage("applyCoupon")}
            </div>
            <div className={applyTools}>
                <div className={couponInput}>
                    <input value={coupon.value}
                           onChange={({target}) => setCoupon(target)} type="text"
                           placeholder={getMessage("yourCouponCode")}/>
                </div>
                <div onClick={coupon.valid ? () => setCart({...cart, coupon: {...cart.coupon, isApplied: true}}) : null}
                     className={multipleClasses(applyClass, coupon.valid ? "_" : disabledApply)}>
                    {getMessage("applyCoupon")}
                </div>
            </div>
        </div>
        <div className={checkoutClass}>
            <div/>
            <div>
                <div className={checkoutTitle}>
                    {getMessage("cartTotals")}
                </div>
                <div className={subTotalClass}>
                    <div className={subTotalTitle}>
                        {getMessage("subTotal")}
                    </div>
                    <div className={subTotalValue}>
                        {Object.keys(totals).length > 0 ? toArray(totals).reduce(sumThis) : 0} cfa
                    </div>
                </div>
                {
                    coupon.isApplied && <div className={subTotalClass}>
                        <div className={subTotalTitle}>
                            {getMessage("coupon")}
                        </div>
                        <div className={subTotalValue}>
                            - 2000 cfa
                        </div>
                    </div>
                }
                <div className={totalClass}>
                    <div className={totalTitle}>
                        {getMessage("total")}
                    </div>
                    <div className={totalValue}>
                        {Object.keys(totals).length > 0 ? toArray(totals).reduce(sumThis) - (coupon.valid ? 2000 : 0) : 0} cfa
                    </div>
                </div>
                <div className={proceedClass}>
                    {getMessage("proceedToCheckout")}
                </div>
            </div>
        </div>
    </div>

    const favorites = <div className={favoritesClass}>
        <FavoritesProduct onClick={() => null /* soon willl go favorite*/}/>
    </div>

    return <ScrollTo position={navigationPosition}>
        <div className={wrapper}>
            <div className={title}>{getMessage("cart")}</div>
            <div className={wholeContent}>
                <div className={cartHeader}>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
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
                                <Quantity
                                    noTitle
                                    classes={classes}
                                    stock={product.stock}
                                    defaultQuantity={quantities[value.id]}
                                    product={product}
                                    setQuantity={(q) => editCart("quantities", value.id, q, product.price)}/>
                            </div>
                            <div className={cartProductTotal}>{
                                totals[value.id]
                            } cfa
                            </div>
                            <div className={cartProductRemove}>
                                <span onClick={() => removeItem(value.id)}>x</span>
                            </div>
                        </React.Fragment>
                    })}
                </div>
            </div>
            {couponAndCheckout}
            {favorites}
        </div>
        <div className={mobileWrapper}>
            <div className={title}>{getMessage("cart")}</div>
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
                                <Quantity
                                    noTitle
                                    classes={classes}
                                    stock={product.stock}
                                    defaultQuantity={quantities[value.id]}
                                    product={product}
                                    setQuantity={(q) => editCart("quantities", value.id, q, product.price)}/>
                            </div>
                        </div>
                        <div className={cartProductRemove}>
                            <span onClick={() => removeItem(value.id)}>x</span>
                        </div>
                    </div>
                })}
            </div>
            {couponAndCheckout}
            {favorites}
        </div>
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
        loggedInUser: state.loginState.loggedInUser
    }
}

/**
 * connect the cart Component to the whole store
 * @description Extract the theme value
 * bind theme value to navbar props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Cart)