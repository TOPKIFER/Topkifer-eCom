import React, {useState} from "react";
import {connect} from "react-redux";
import productImageWhiteClasses from "./productImageWhite.module.scss";
import productImageBlackClasses from "./productImageBlack.module.scss";
import {INSIDE_NAVIGATION, LEFT, MAX_PRODUCT_IMAGE_IN_CARROUSEL, RIGHT, TOP, WHITE} from "utilities/constant";
import ScrollTo from "components/scrollTo/ScrollTo";
import ItemCard from "components/itemCard/ItemCard";
import {makeIndex, moveFile} from "utilities/utilities";
import arrowRight from "assets/icons/arrowRight.svg";
import arrowLeft from "assets/icons/arrowLeft.svg";
import Icon from "components/icon/Icon";


/**
 * Product Image component
 * @param {String} actualTheme the actual theme of the app
 * @param {Object} product the selected product
 * @author Arnaud LITAABA
 */
const ProductImage = ({actualTheme, product}) => {

    const {
        productImages,
        mainProductImage,
        itemCardWrapper,
        itemCard,
        itemCardImage,
        itemCardHighlighted,
        otherProductImages,
        otherProductImage,
        arrows,
    } = actualTheme === WHITE ? productImageWhiteClasses : productImageBlackClasses;

    let newOtherSrc = [...product.otherSrc];
    newOtherSrc.unshift(product);

    const [productImageState, setProductImageState] = useState({
            targetedProduct: product,
            mainId: product.id,
            otherSrc: [...newOtherSrc],
            navigationPosition: TOP
        }
    )

    const {targetedProduct, navigationPosition, otherSrc, mainId} = productImageState;

    const otherProductLength = otherSrc.length;

    const move = (direction) => {
        setProductImageState({
            ...productImageState,
            otherSrc: [...moveFile(productImageState.otherSrc, direction)],
            navigationPosition: INSIDE_NAVIGATION
        })
    }

    const changeMainProductSrc = (targetedProduct) => {
        setProductImageState({
            ...productImageState,
            targetedProduct,
            mainId: targetedProduct.id,
            navigationPosition: INSIDE_NAVIGATION
        })
    }

    return <ScrollTo position={navigationPosition}>
        <div className={productImages}>
            <div className={mainProductImage}>
                <ItemCard
                    full={false}
                    product={targetedProduct}
                    allowClick={false}
                    classNames={{itemCardWrapper, itemCard, itemCardImage}}
                />
            </div>
            <div className={otherProductImages}>
                <div className={arrows}>
                    <Icon
                        className={`icon_${otherProductLength <= MAX_PRODUCT_IMAGE_IN_CARROUSEL ? 'disabled' : ''}_${actualTheme}`}
                        onClick={() => otherProductLength > MAX_PRODUCT_IMAGE_IN_CARROUSEL ? move(LEFT) : null}
                        src={arrowLeft}
                        size="26px"
                    />
                    <Icon
                        className={`icon_${otherProductLength <= MAX_PRODUCT_IMAGE_IN_CARROUSEL ? 'disabled' : ''}_${actualTheme}`}
                        onClick={() => otherProductLength > MAX_PRODUCT_IMAGE_IN_CARROUSEL ? move(RIGHT) : null}
                        src={arrowRight}
                        size="26px"
                    />
                </div>
                <div className={otherProductImage}>
                    {
                        otherSrc.map((product, index) => {
                            return index < 4 && <ItemCard
                                key={makeIndex(product.name, index, "other-product")}
                                full={false}
                                product={product}
                                allowClick={true}
                                onClick={() => changeMainProductSrc(product)}
                                classNames={{
                                    itemCardWrapper,
                                    itemCard,
                                    itemCardImage,
                                    itemCardHighlighted: product.id === mainId ? itemCardHighlighted : ""
                                }}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    </ScrollTo>
}

/**
 * connect the product image Component to the whole store
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
 * connect the product image Component to the whole store
 * @description Extract the theme value
 * bind theme value to product props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(ProductImage)