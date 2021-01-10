import React from "react";
import homeClasses from "./home.module.scss";
import CategoriesBar from "components/categoriesBar/CategoriesBar";
import Carousel from "components/carousel/Carousel";
import shoes from "assets/products/shoes.jpg";
import shoes2 from "assets/products/shoes2.jpg";
import shoes3 from "assets/products/shoes3.jpg";

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

    return <div className={homepage}>
        <CategoriesBar/>
        <div className={homeWrapper}>
            <Carousel auto time={6000} pictures={carouselPictures}/>
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
