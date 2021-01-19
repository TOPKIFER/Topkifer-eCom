import React from "react";
import homeClasses from "./home.module.scss";
import CategoriesBar from "components/categoriesBar/CategoriesBar";
import Carousel from "components/carousel/Carousel";
import shoes from "assets/products/shoes.jpg";
import blackShoes from "assets/products/blackBgShoes.jpg";
import shoes2 from "assets/products/shoes2.jpg";
import blackShoes2 from "assets/products/blackBgShoes2.jpg";
import shoes3 from "assets/products/shoes3.jpg";
import blackShoes3 from "assets/products/blackBgShoes3.jpg";
import CategoriesContent from "../../../components/categoriesContent/CategoriesContent";
import {makeIndex} from "../../../utilities/utilities";
import {connect} from "react-redux";
import {categoriesBlackProducts, categoriesProducts, WHITE} from "../../../utilities/constant";
import ScrollTo from "../../../components/scrollTo/ScrollTo";

/**
 * Home component
 * @param {String} actualTheme the actual theme of the app
 * @author Arnaud LITAABA
 */
const Home = ({actualTheme}) => {

    const {homepage, homeWrapper} = homeClasses;

    const carouselProducts = [
        {
            src: shoes,
            text: "Admire Stylish Shoes & Looks"
        },
        {
            src: shoes2,
            text: "Admire Stylish Shoes2 & Looks"
        },
        {
            src: shoes3,
            text: "Admire Stylish Shoes3 & Looks"
        },
    ]
    const carouselBlackProducts = [
        {
            src: blackShoes,
            text: "Admire Stylish Shoes & Looks"
        },
        {
            src: blackShoes2,
            text: "Admire Stylish Shoes2 & Looks"
        },
        {
            src: blackShoes3,
            text: "Admire Stylish Shoes3 & Looks"
        },
    ]


    const categories = [
        {
            title: "Top of the Day",
            products: actualTheme === WHITE ? [
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
            ] : [
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
            ]
        },
        {
            title: "Phones",
            products: actualTheme === WHITE ? [
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
            ] : [
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
            ]
        },
        {
            title: "Fashion",
            products: actualTheme === WHITE ? [
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
            ] : [
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
            ]
        },
        {
            title: "Home Appliances",
            products: actualTheme === WHITE ? [
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
                ...categoriesProducts,
            ] : [
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
                ...categoriesBlackProducts,
            ]
        }
    ]

    return <ScrollTo>
        <div className={homepage}>
            <CategoriesBar/>
            <div className={homeWrapper}>
                <Carousel auto time={6000} products={actualTheme === WHITE ? carouselProducts : carouselBlackProducts}/>
                {
                    categories.map(category => {
                        const {title, products} = category;
                        return <CategoriesContent
                            key={makeIndex(title, "cat")}
                            products={products}
                            title={title}
                        />
                    })
                }
            </div>
        </div>
    </ScrollTo>
}

/**
 * connect the home Component to the whole store
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
 * connect the home Component to the whole store
 * @description Extract the theme value
 * bind theme value to home props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(Home)
