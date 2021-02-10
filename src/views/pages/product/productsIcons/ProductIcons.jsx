import React, {useState} from "react";
import Icon from "components/icon/Icon";
import {defaultIconSize, WHITE} from "utilities/constant";
import productIconsWhiteClasses from "views/pages/product/productsIcons/productIconsWhite.module.scss";
import productIconsBlackClasses from "views/pages/product/productsIcons/productIconsBlack.module.scss";
import {connect} from "react-redux";
import shareIcon from "assets/icons/shareWhite.svg";
import heartRedIcon from "assets/icons/heart-red.svg";
import heartIcon from "assets/icons/heart.svg";
import {multipleClasses} from "utilities/utilities";


/**
 * Product icons component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @param {Object} rest other useful props
 * @author Arnaud LITAABA
 */
const ProductIcons = ({actualTheme, product, ...rest}) => {

    const {
        productLike,
        productShare,
        likeIcon,
    } = actualTheme === WHITE ? productIconsWhiteClasses : productIconsBlackClasses;


    const {customWrapperClass,id} = rest;

    const [state, setState] = useState({
        isLiked: false
    });


    const {isLiked} = state;


    return <div className={multipleClasses(productLike, customWrapperClass)}>
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

}


/**
 * connect the product icons Component to the whole store
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
 * connect the product icons Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(ProductIcons)