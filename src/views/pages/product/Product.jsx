import React from "react";
import {connect} from "react-redux";
import productWhiteClasses from "./productWhite.module.scss";
import {categoriesProducts} from "../../../utilities/constant";
import ScrollTo from "../../../components/scrollTo/ScrollTo";


/**
 * Home component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} rest all useful props passed to the component
 * @author Arnaud LITAABA
 */
const Product = ({actualTheme, ...rest}) => {


    const {
        productWrapper,
        productImages,
        mainProductImage
    } = productWhiteClasses;
    /*
     * we extract the id from the url;
     */
    const {id} = rest.match.params;
    /*
     * we find the targeted product with the extracted id;
     */
    const product = categoriesProducts.find(category => category.id === +id);

    console.log(product)

    return <ScrollTo>
        <div className={productWrapper}>
            <div className={productImages}>
                <div className={mainProductImage}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorem eligendi incidunt nam
                    natus, veniam voluptates. Debitis molestiae sapiente voluptatem.
                </div>
            </div>
            <div>Lorem ipsum.</div>
        </div>
    </ScrollTo>
}

/**
 * connect the product Component to the whole store
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
 * connect the product Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Product)