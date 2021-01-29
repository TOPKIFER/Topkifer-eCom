import {overTen} from "./utilities";
import shoes from "assets/products/shoes.jpg";
import shoes2 from "assets/products/shoes2.jpg";
import shoes3 from "assets/products/shoes3.jpg";
import blackShoes from "assets/products/blackBgShoes.jpg";
import blackShoes2 from "assets/products/blackBgShoes2.jpg";
import blackShoes3 from "assets/products/blackBgShoes3.jpg";

export const SEPARATOR = " ";
export const defaultIconSize = "24px";
export const HIDE_ALL = "hideAll";
export const RIGHT = "right";
export const LEFT = "left";
export const WHITE = "white";
export const BLACK = "black";
export const TOP = "top";
export const DEFAULT_LANGUAGE = "en";
export const FRENCH_LANGUAGE = "fr";
export const ENGLISH_LANGUAGE = "en";

export const APP_URL = {
    BASE: "/",
    PRODUCT: "/product",
};

export const REDUX_CONSTANTS = {
    LOGIN: "auth",
    REGISTER: "register",
    CHANGE_THEME: "change theme",
    CHANGE_LANGUAGE: "change language"
}

export const categoriesConstants = [
    {
        name: "fashion"
    },
    {
        name: "electronics"
    },
    {
        name: "vehicles"
    },
    {
        name: "sports"
    },
    {
        name: "machinery"
    },
    {
        name: "home"
    },
    {
        name: "garden"
    },
    {
        name: "personal"
    }
]

export const accountConstants = [
    {
        name: "shoppingCart",
        total: overTen(120)
    },
    {
        name: "favorites"
    },
    {
        name: "contactUs"
    },
    {
        name: "changeTheme"
    },
    {
        name: "changeLanguage"
    },
    {
        name: "logout"
    }
]

export const categoriesProducts = [
    {
        src: shoes,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 1
    },
    {
        src: shoes2,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 2
    },
    {
        src: shoes3,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 3
    },
]

export const categoriesBlackProducts = [
    {
        src: blackShoes,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 1
    },
    {
        src: blackShoes2,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 2
    },
    {
        src: blackShoes3,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 3
    },
];

