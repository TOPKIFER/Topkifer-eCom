import React, {useState} from "react";
import {connect} from "react-redux";
import productParamsWhiteClasses
    from "views/pages/product/productTools/productQuickInfo/productParams/productParamsWhite.module.scss";
import productParamsBlackClasses
    from "views/pages/product/productTools/productQuickInfo/productParams/productParamsBlack.module.scss";
import {WHITE} from "utilities/constant";
import {defineTextColor, makeIndex, multipleClasses} from "utilities/utilities";
import {getMessage} from "utilities/i18n";
import {addToCart} from "redux/actions/auth/login/loginActions";
import Quantity from "components/quantity/Quantity";


/**
 * Product Params component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest the of useful props
 * @author Arnaud LITAABA
 */
const ProductParams = ({actualTheme, product, ...rest}) => {

    const {
        productParams,
        productTools,
        productSizes,
        productColors,
        colorTitle,
        sizeTitle,
        colorOptions,
        sizeOptions,
        colorOption,
        sizeOption,
        colorOptionHighlighted,
        sizeOptionHighlighted,
        optionOverlay,
        quantityClass,
        quantityTitle,
        quantityContent,
        sign,
        signDisabled,
        value,
        actions,
        addToCart,
        btn
    } = actualTheme === WHITE ? productParamsWhiteClasses : productParamsBlackClasses;

    const {injectable, noIcons, cart, addToCart: addToCartFunction} = rest;

    const [state, setState] = useState({
        colorValue: "",
        sizeValue: "",
    });


    const {colorValue, sizeValue} = state;

    const {sizes, colors, stock} = product;

    const handleAddToCart = (selectedProduct) => {
        // const {ADD_TO_CART, UPDATE_CART} = REDUX_CONSTANTS;


    }


    return <div className={productParams}>
        <div className={productTools}>
            <div className={productSizes}>
                <div className={sizeTitle}>
                    <span>{getMessage("size")}</span>
                    <span style={{textTransform: "uppercase"}}>{sizeValue ? " : " + sizeValue : ""}</span>
                </div>
                <div className={sizeOptions}>
                    {
                        sizes.map((size, index) => {
                            return <div
                                key={makeIndex(size, index)}
                                className={multipleClasses(sizeOption, sizeValue === size ? sizeOptionHighlighted : "_")}
                                onClick={() => setState({...state, sizeValue: size})}
                            >
                                {size}
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={productColors}>
                <div>
                    <div className={colorTitle}>
                        <span>{getMessage("color")}</span>
                        <span>{colorValue ? " : " + defineTextColor(colorValue) : ""}</span>
                    </div>
                    <div className={colorOptions}>
                        {
                            colors.map((color, index) => {
                                return <div
                                    key={makeIndex(color, index)}
                                    className={multipleClasses(colorOption, colorValue === color ? colorOptionHighlighted : "_")}
                                    style={{
                                        backgroundColor: color
                                    }}
                                    onClick={() => setState({...state, colorValue: color})}
                                >
                                    <div className={optionOverlay}/>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>

        <Quantity classes={{
            quantityClass,
            quantityTitle,
            quantityContent,
            sign,
            signDisabled,
            value,
            actions,
            addToCart,
            btn
        }} stock={stock} product={product} injectable={injectable}>
            <div className={addToCart}>
                <div onClick={() => handleAddToCart(product)} className={btn}>
                    {getMessage("addToCart")}
                </div>
            </div>
        </Quantity>

    </div>
}

/**
 * connect the product params Component to the whole store
 * Extract the theme value
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme,
        cart: state.loginState.loggedInUser.cart,
    }
}

/**
 * connect the product params Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps, {
    addToCart
})(ProductParams)