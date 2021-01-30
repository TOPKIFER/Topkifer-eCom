import React from "react";
import productClasses from "./product.module.scss";
import ScrollTo from "../../../components/scrollTo/ScrollTo";
import ProductImage from "./productImage/ProductImage";


/**
 * Product component
 * @param {Object} props all useful props passed to the component
 * @author Arnaud LITAABA
 */
const Product = (props) => {

    const {
        productWrapper,
    } = productClasses;

    /*
     * we extract the id from the url;
     */
    const {id} = props.match.params;

    return <ScrollTo>
        <div className={productWrapper}>
            <ProductImage
                id={id}
            />
            {/*<div className={productTools}>Lorem ipsum.</div>*/}
        </div>
    </ScrollTo>
}

export default Product