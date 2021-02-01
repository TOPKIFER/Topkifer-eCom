import React, {useState} from "react";
import {connect} from "react-redux";
import productParamsWhiteClasses
    from "views/pages/product/productTools/productQuickInfo/productParams/productParamsWhite.module.scss";
import productParamsBlackClasses
    from "views/pages/product/productTools/productQuickInfo/productParams/productParamsBlack.module.scss";
import {defaultIconSize, MINUS_SIGN, SUM_SIGN, WHITE} from "utilities/constant";
import {defineTextColor, makeIndex, multipleClasses} from "utilities/utilities";
import {getMessage} from "utilities/i18n";
import Icon from "components/icon/Icon";
import heartIcon from "assets/icons/heart.svg"
import heartRedIcon from "assets/icons/heart-red.svg"
import shareIcon from "assets/icons/shareWhite.svg";


/**
 * Product Params component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @author Arnaud LITAABA
 */
const ProductParams = ({actualTheme, product}) => {

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
        btn,
        productShare,
        productLike,
        likeIcon
    } = actualTheme === WHITE ? productParamsWhiteClasses : productParamsBlackClasses;

    const [state, setState] = useState({
        colorValue: "",
        sizeValue: "",
        quantity: 1,
        isLiked: false
    });


    const {colorValue, sizeValue, quantity, isLiked} = state;

    const {sizes, colors, stock} = product;

    const operation = (sign) => {
        const {quantity} = state;
        switch (sign) {
            case MINUS_SIGN:
                if (quantity <= 0) return;
                setState({
                    ...state,
                    quantity: quantity - 1
                })
                return;
            case SUM_SIGN:
                if (quantity >= stock) return;
                setState({
                    ...state,
                    quantity: quantity + 1
                })
                return;
            default:
                return;
        }
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
        <div className={actions}>
            <div className={quantityClass}>
                <div className={quantityTitle}>{getMessage("quantity")}</div>
                <div className={quantityContent}>
                    <div unselectable="true" className={multipleClasses(sign, quantity === 0 ? signDisabled : "_")}
                         onClick={() => operation(MINUS_SIGN)}>-
                    </div>
                    <div className={value}>{quantity}</div>
                    <div unselectable="true" className={multipleClasses(sign, quantity === stock ? signDisabled : "_")}
                         onClick={() => operation(SUM_SIGN)}>+
                    </div>
                </div>
            </div>
            <div className={addToCart}>
                <div className={btn}>
                    {getMessage("addToCart")}
                </div>
            </div>
            <div className={productLike}>
                <div className={productShare}>
                    <Icon
                        src={shareIcon}
                        size={defaultIconSize}
                    />
                </div>
                <div className={likeIcon}>
                    <Icon
                        onClick={() => setState({...state, isLiked: !state.isLiked})}
                        src={isLiked ? heartRedIcon : heartIcon}
                        size={defaultIconSize}
                    />
                </div>
            </div>
        </div>

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
        actualTheme: state.themeState.actualTheme
    }
}

/**
 * connect the product params Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(ProductParams)