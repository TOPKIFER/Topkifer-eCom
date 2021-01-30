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
export const INSIDE_NAVIGATION = "INSIDE_NAVIGATION";
export const UNKNOWN = "UNKNOWN";
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
        id: 1,
        otherSrc: [
            {
                src: shoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 11
            }, {
                src: shoes2,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 12
            }, {
                src: shoes3,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 13
            }
        ]
    },
    {
        src: shoes2,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 2,
        otherSrc: [
            {
                src: shoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 21
            }, {
                src: shoes2,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 22
            }, {
                src: shoes3,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 23
            }, {
                src: shoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 24
            }
        ]
    },
    {
        src: shoes3,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 3,
        otherSrc: [
            {
                src: shoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 31
            }, {
                src: shoes2,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 32
            }, {
                src: shoes3,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 33
            }
        ]
    },
]

export const categoriesBlackProducts = [
    {
        src: blackShoes,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 1,
        otherSrc: [
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 11
            }, {
                src: blackShoes2,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 12
            }, {
                src: blackShoes3,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 13
            }
        ]
    },
    {
        src: blackShoes2,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 2,
        otherSrc: [
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 21
            }, {
                src: blackShoes2,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 22
            }, {
                src: blackShoes3,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 23
            },
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 24
            }
        ]
    },
    {
        src: blackShoes3,
        title: "Nike Shoes",
        price: "45000 cfa",
        id: 3,
        otherSrc: [
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 31
            }, {
                src: blackShoes2,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 32
            }, {
                src: blackShoes3,
                title: "Nike Shoes",
                price: "45000 cfa",
                id: 33
            }
        ]
    },
];

