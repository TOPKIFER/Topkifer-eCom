import React from "react";
import arrowRight from "assets/icons/arrowRight.svg"
import categoriesContentWhiteClasses from "./categoriesContentWhite.module.scss"
import categoriesContentBlackClasses from "./categoriesContentBlack.module.scss"
import Icon from "components/icon/Icon";
import ItemCard from "components/itemCard/ItemCard";
import {isMobile, makeIndex} from "utilities/utilities";
import {connect} from "react-redux";
import {WHITE} from "../../utilities/constant";

/**
 * Categories content component
 * @description The categories content component for displaying all available categories content
 * @param {String} title A title for the category
 * @param {Function} onArrowClick The trigger for navigate to other link
 * @param {Array} products Array of pictures to display
 * @param {String} actualTheme the actual theme of the app
 * @param {Boolean} noArrow to show the arrow icon or not
 * @param {Object} rest the rest of useful props
 * @return A fully categories content with title and images
 * @author Arnaud LITAABA
 */
const CategoriesContent = ({title, onArrowClick, products = [], actualTheme, noArrow, ...rest}) => {


    const {moreCl,onClick} = rest;

    const {
        categoriesContentWrapper,
        categoriesContentHeader,
        categoriesContentTitle,
        categoriesContent
    } = actualTheme === WHITE ? categoriesContentWhiteClasses : categoriesContentBlackClasses;

    const {customCategoriesContentTitle} = rest;

    return <div className={categoriesContentWrapper}>
        <div className={customCategoriesContentTitle || categoriesContentHeader}>
            <b><h3 className={categoriesContentTitle}>{title || "Title"}</h3></b>
            {
                !noArrow && <Icon
                    onClick={onArrowClick || null}
                    src={arrowRight}
                    size="36px"
                />
            }
        </div>
        <div className={categoriesContent}>
            {
                products.map((product, index) => {
                    const {title} = product
                    return isMobile ? index < 4 && <ItemCard onClick={onClick} key={makeIndex(title, "categories", index)}
                                                             product={product}
                                                             full
                                                             allowClick
                    /> :
                        <ItemCard onClick={onClick} key={makeIndex(title, "categories", index)}
                                  product={product}
                                  full
                                  allowClick
                                  moreCl={moreCl}
                        />
                })
            }
        </div>
    </div>
}

/**
 * connect the categories content Component to the whole store
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
 * connect the categories content Component to the whole store
 * @description Extract the theme value
 * bind theme value to categories content props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(CategoriesContent)