import React from "react";
import homeClasses from "./home.module.scss";
import CategoriesBar from "components/categoriesBar/CategoriesBar";
import Carousel from "components/carousel/Carousel";
import shoes from "assets/products/shoes.jpg";
import shoes2 from "assets/products/shoes2.jpg";
import shoes3 from "assets/products/shoes3.jpg";
import CategoriesContent from "../../../components/categoriesContent/CategoriesContent";
import {makeIndex} from "../../../utilities/utilities";

/**
 * Home component
 * @author Arnaud LITAABA
 */
const Home = () => {

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

    const categories = [
        {
            title: "Top of the Day",
            pictures: [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ]
        },
        {
            title: "Phones",
            pictures: [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ]
        },
        {
            title: "Fashion",
            pictures: [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ]
        },
        {
            title: "Home Appliances",
            pictures: [
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
                ...categoriesPictures,
            ]
        }
    ]

    return <div className={homepage}>
        <CategoriesBar/>
        <div className={homeWrapper}>
            <Carousel auto time={6000} pictures={carouselPictures}/>
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

export default Home
