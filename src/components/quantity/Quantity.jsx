import React, {useState} from "react";
import {getMessage} from "utilities/i18n";
import {multipleClasses} from "utilities/utilities";
import {MINUS_SIGN, SUM_SIGN} from "utilities/constant";

/**
 * Cart component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest the other useful props
 * @author Arnaud LITAABA
 */
const Quantity = ({actualTheme, ...rest}) => {


    const {injectable, stock, classes, defaultQuantity, setQuantity, children, noTitle} = rest;
    const {
        quantityClass,
        quantityTitle,
        quantityContent,
        sign,
        signDisabled,
        value,
        actions
    } = classes || {};

    const [state, setState] = useState({
        quantity: defaultQuantity || 1,
    });


    const {quantity,} = state;

    const operation = (sign) => {
        const {quantity} = state;
        switch (sign) {
            case MINUS_SIGN:
                if (quantity <= 1) return;
                setState({
                    ...state,
                    quantity: quantity - 1
                })
                if (setQuantity) setQuantity(quantity - 1)
                return;
            case SUM_SIGN:
                if (quantity >= stock) return;
                setState({
                    ...state,
                    quantity: quantity + 1
                })
                if (setQuantity) setQuantity(quantity + 1)
                return;
            default:
                return;
        }
    }

    return <div className={actions}>
        <div className={quantityClass}>
            {injectable}
            {!noTitle && <div className={quantityTitle}>{getMessage("quantity")}</div>}
            <div className={quantityContent}>
                <div unselectable="true" className={multipleClasses(sign, quantity === 1 ? signDisabled : "_")}
                     onClick={() => operation(MINUS_SIGN)}>-
                </div>
                <div className={value}>{quantity}</div>
                <div unselectable="true" className={multipleClasses(sign, quantity === stock ? signDisabled : "_")}
                     onClick={() => operation(SUM_SIGN)}>+
                </div>
            </div>
        </div>
        {children}
    </div>
}


export default Quantity