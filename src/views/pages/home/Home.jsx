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
import {WHITE} from "../../../utilities/constant";

/**
 * Home component
 * @param {String} actualTheme the actual theme of the app
 * @author Arnaud LITAABA
 */
const Home = ({actualTheme}) => {

    const {homepage, homeWrapper} = homeClasses;

    const carouselPictures = [
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
    const carouselBlackPictures = [
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

    const categoriesPictures = [
        {
            src: shoes,
            title: "Nike Shoes",
            price: "45000 cfa",
        },
        {
            src: shoes2,
            title: "Nike Shoes",
            price: "45000 cfa",
        },
        {
            src: shoes3,
            title: "Nike Shoes",
            price: "45000 cfa",
        },
    ]

    const categoriesBlackPictures = [
        {
            src: blackShoes,
            title: "Nike Shoes",
            price: "45000 cfa",
        },
        {
            src: blackShoes2,
            title: "Nike Shoes",
            price: "45000 cfa",
        },
        {
            src: blackShoes3,
            title: "Nike Shoes",
            price: "45000 cfa",
        },
    ]


    const categories = [
        {
            title: "Top of the Day",
            pictures: actualTheme === WHITE ? [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ] : [
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
            ]
        },
        {
            title: "Phones",
            pictures: actualTheme === WHITE ? [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ] : [
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
            ]
        },
        {
            title: "Fashion",
            pictures: actualTheme === WHITE ? [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ] : [
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
            ]
        },
        {
            title: "Home Appliances",
            pictures: actualTheme === WHITE ? [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ] : [
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
                ...categoriesBlackPictures,
            ]
        }
    ]

    return <div className={homepage}>
        <CategoriesBar/>
        <div className={homeWrapper}>
            <Carousel auto time={6000} pictures={actualTheme === WHITE ? carouselPictures : carouselBlackPictures}/>
            {
                categories.map(category => {
                    const {title, pictures} = category;
                    return <CategoriesContent
                        key={makeIndex(title, "cat")}
                        pictures={pictures}
                        title={title}
                    />
                })
            }
        </div>
    </div>
    /*return (
        <div className="Homepage">
            <Categories/>
            <CarouselAuto/>
            <ItemsDisplay name="Top of the day"/>
            <ItemsDisplay name="Phones"/>
            <CarouselAuto/>
            <ItemsDisplay name="Fashion"/>
            <ItemsDisplay name="Home apliances"/>
        </div>
    );*/
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
