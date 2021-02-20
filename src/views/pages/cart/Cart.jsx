import React, {useEffect, useState} from "react";
import {getMessage} from "utilities/i18n";
import cartWhiteClasses from "./cartWhite.module.scss";
import cartBlackClasses from "./cartBlack.module.scss";
import {userBlackShoppingCart, userWhiteShoppingCart, WHITE} from "utilities/constant";
import {connect} from "react-redux";
import Quantity from "components/quantity/Quantity";
import ItemCard from "components/itemCard/ItemCard";

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
        quantities: {}
    });

    const fetchUserCart = () => {
        let totals = {};
        let quantities = {};
        userWhiteShoppingCart.forEach(value => {
            console.log(value)
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
        actions
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

    const {valuesCart, totals, quantities} = cart;

    const editCart = (target, id, value, price) => {
        setCart({
            ...cart,
            [target]: {
                [id]: value
            },
            totals: {
                ...cart.totals,
                [id]: price * value,
            }
        })
    }

    const removeItem = (id) => {
        setCart({
            ...cart,
            valuesCart: cart.valuesCart.filter(v => v.id !== id)
        })
    }
    return <div className={wrapper}>
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
                    return <React.Fragment key={index}>
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
                        <div className={cartProductQuantity}><Quantity noTitle classes={classes} stock={product.stock}
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