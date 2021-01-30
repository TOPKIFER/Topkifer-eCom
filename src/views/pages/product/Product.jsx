import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import productWhiteClasses from "./productWhite.module.scss";
import productBlackClasses from "./productBlack.module.scss";
import {
    categoriesBlackProducts,
    categoriesProducts,
    INSIDE_NAVIGATION,
    LEFT,
    RIGHT,
    TOP,
    WHITE
} from "../../../utilities/constant";
import ScrollTo from "../../../components/scrollTo/ScrollTo";
import ItemCard from "../../../components/itemCard/ItemCard";
import {makeIndex, moveFile} from "../../../utilities/utilities";
import arrowRight from "../../../assets/icons/arrowRight.svg";
import arrowLeft from "../../../assets/icons/arrowLeft.svg";
import Icon from "../../../components/icon/Icon";


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
        mainProductImage,
        itemCardWrapper,
        itemCard,
        itemCardImage,
        itemCardHighlighted,
        otherProductImages,
        otherProductImage,
        arrows,
        productTools
    } = actualTheme === WHITE ? productWhiteClasses : productBlackClasses;

    /*
     * we extract the id from the url;
     */
    const {id} = rest.match.params;

    const [productState, setProductState] = useState({
            product: {},
            mainId: null,
            otherSrc: [],
            navigationPosition: TOP
        }
    )

    const fetchProduct = () => {
        /*
            * we find the targeted product with the extracted id;
            */
        const product = actualTheme === WHITE ? categoriesProducts.find(category => category.id === +id) :
            categoriesBlackProducts.find(category => category.id === +id);
        let newOtherSrc = [...product.otherSrc];
        newOtherSrc.unshift(product);
        setProductState({
            ...productState,
            mainId: product.id,
            product: product,
            otherSrc: [...newOtherSrc]
        })
    }

    useEffect(fetchProduct, []);

    const {product, navigationPosition, otherSrc, mainId} = productState;

    const otherProductLength = otherSrc.length;

    const move = (direction) => {
        setProductState({
            ...productState,
            otherSrc: [...moveFile(productState.otherSrc, direction)],
            navigationPosition: INSIDE_NAVIGATION
        })
    }

    const changeMainProductSrc = (product) => {
        setProductState({
            ...productState,
            product,
            mainId: product.id,
            navigationPosition: INSIDE_NAVIGATION
        })
    }

    return <ScrollTo position={navigationPosition}>
        <div className={productWrapper}>
            <div className={productImages}>
                <div className={mainProductImage}>
                    <ItemCard
                        full={false}
                        product={product}
                        allowClick={false}
                        classNames={{itemCardWrapper, itemCard, itemCardImage}}
                    />
                </div>
                <div className={otherProductImages}>
                    <div className={arrows}>
                        <Icon
                            className={`icon_${otherProductLength <= 4 ? 'disabled' : ''}_${actualTheme}`}
                            onClick={() => otherProductLength > 4 ? move(LEFT) : null}
                            src={arrowLeft}
                            size="26px"
                        />
                        <Icon
                            className={`icon_${otherProductLength <= 4 ? 'disabled' : ''}_${actualTheme}`}
                            onClick={() => otherProductLength > 4 ? move(RIGHT) : null}
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
            <div className={productTools}>Lorem ipsum.</div>
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