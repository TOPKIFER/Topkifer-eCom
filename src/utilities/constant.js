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
export const MENU = "menu";
export const SHOPPING = "shopping";
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
export const MAX_PRODUCT_IMAGE_IN_CARROUSEL = 4;
export const MINUS_SIGN = "-";
export const SUM_SIGN = "+";
export const VERY_GOOD_STAR = 3000;
export const GOOD_STAR = 2250;
export const FAIR_STAR = 1500;
export const POOR_RATE = 750;
export const VERY_POOR_RATE = 0;

export const APP_URL = {
    BASE: "/",
    PRODUCT: "/product",
    CART: "/cart",
    FAVORITE: "/favorite",
};

export const REDUX_CONSTANTS = {
    LOGIN: "auth",
    REGISTER: "register",
    CHANGE_THEME: "change theme",
    CHANGE_LANGUAGE: "change language",
    ADD_TO_CART: "add to cart",
    UPDATE_CART: "update cart",
    CHANGE_CART: "change cart",
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

export const categoriesProductsReviews = [
    {
        idProduct: 1,
        data: {
            total: 2500,
            veryPoor: {
                total: 1,
                content: [
                    {
                        id: 1,
                        stars: 1,
                        owner: 1,
                        createdAt: new Date().toUTCString(),
                        updatedAt: new Date().toUTCString(),
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor enim ex illo laudantium libero nesciunt officiis ut veniam voluptate"
                    },
                ]
            },
            poor: {
                total: 1,
                content: [
                    {
                        id: 1,
                        stars: 2,
                        owner: 1,
                        createdAt: new Date().toUTCString(),
                        updatedAt: new Date().toUTCString(),
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor enim ex illo laudantium libero nesciunt officiis ut veniam voluptate"
                    },
                ]
            },
            veryGood: {
                total: 1,
                content: [
                    {
                        id: 1,
                        stars: 5,
                        owner: 1,
                        createdAt: new Date().toUTCString(),
                        updatedAt: new Date().toUTCString(),
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor enim ex illo laudantium libero nesciunt officiis ut veniam voluptate"
                    },
                ]
            },
        }

    }
]

export const categoriesProducts = [
    {
        src: shoes,
        title: "Nike Shoes 1",
        price: "45000",
        sizes: ["xs", "s", "m"],
        colors: ["#1b2436", "#137681", "#2efef6"],
        stock: 50,
        reviews: {
            total: 2500,
            veryPoor: 200,
            poor: 400,
            fair: 700,
            good: 700,
            veryGood: 500,
        },
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
        id: 1,
        otherSrc: [
            {
                src: shoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 2500,
                    veryPoor: 200,
                    poor: 400,
                    fair: 700,
                    good: 700,
                    veryGood: 500,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 11
            }, {
                src: shoes2,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 2500,
                    veryPoor: 200,
                    poor: 400,
                    fair: 700,
                    good: 700,
                    veryGood: 500,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 12
            }, {
                src: shoes3,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 2500,
                    veryPoor: 200,
                    poor: 400,
                    fair: 700,
                    good: 700,
                    veryGood: 500,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 13
            }
        ]
    },
    {
        src: shoes2,
        title: "Nike Shoes 2",
        price: "46000",
        sizes: ["xs", "s"],
        colors: ["#1B2436", "#137681", "#2efef6"],
        stock: 40,
        reviews: {
            total: 3003,
            veryPoor: 300,
            poor: 500,
            fair: 800,
            good: 800,
            veryGood: 600,
        },
        description: " WLorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
        id: 2,
        otherSrc: [
            {
                src: shoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3000,
                    veryPoor: 300,
                    poor: 500,
                    fair: 800,
                    good: 800,
                    veryGood: 600,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 21
            }, {
                src: shoes2,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3000,
                    veryPoor: 300,
                    poor: 500,
                    fair: 800,
                    good: 800,
                    veryGood: 600,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 22
            }, {
                src: shoes3,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3000,
                    veryPoor: 300,
                    poor: 500,
                    fair: 800,
                    good: 800,
                    veryGood: 600,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 23
            }, {
                src: shoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3000,
                    veryPoor: 300,
                    poor: 500,
                    fair: 800,
                    good: 800,
                    veryGood: 600,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 24
            }
        ]
    },
    {
        src: shoes3,
        title: "Nike Shoes",
        price: "45000",
        sizes: ["xs", "s", "m"],
        colors: ["#1B2436", "#137681", "#2efef6"],
        stock: 50,
        reviews: {
            total: 3500,
            veryPoor: 400,
            poor: 600,
            fair: 900,
            good: 900,
            veryGood: 700,
        },
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
        id: 3,
        otherSrc: [
            {
                src: shoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 31
            }, {
                src: shoes2,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 32
            }, {
                src: shoes3,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 33
            }
        ]
    },
]

export const categoriesBlackProducts = [
    {
        src: blackShoes,
        title: "Nike Shoes",
        price: "45000",
        sizes: ["xs", "s", "m"],
        colors: ["#1B2436", "#137681", "#2efef6"],
        stock: 50,
        reviews: {
            total: 2500,
            veryPoor: 200,
            poor: 400,
            fair: 700,
            good: 700,
            veryGood: 500,
        },
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
        id: 1,
        otherSrc: [
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 2500,
                    veryPoor: 200,
                    poor: 400,
                    fair: 700,
                    good: 700,
                    veryGood: 500,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 11
            }, {
                src: blackShoes2,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 2500,
                    veryPoor: 200,
                    poor: 400,
                    fair: 700,
                    good: 700,
                    veryGood: 500,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 12
            }, {
                src: blackShoes3,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 2500,
                    veryPoor: 200,
                    poor: 400,
                    fair: 700,
                    good: 700,
                    veryGood: 500,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 13
            }
        ]
    },
    {
        src: blackShoes2,
        title: "Nike Shoes",
        price: "45000",
        sizes: ["xs", "s", "m"],
        colors: ["#1B2436", "#137681", "#2efef6"],
        stock: 50,
        reviews: {
            total: 3500,
            veryPoor: 400,
            poor: 600,
            fair: 900,
            good: 900,
            veryGood: 700,
        },
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
        id: 2,
        otherSrc: [
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 21
            }, {
                src: blackShoes2,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 22
            }, {
                src: blackShoes3,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 23
            },
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 24
            }
        ]
    },
    {
        src: blackShoes3,
        title: "Nike Shoes",
        price: "45000",
        sizes: ["xs", "s", "m"],
        colors: ["#1B2436", "#137681", "#2efef6"],
        stock: 50,
        reviews: {
            total: 3500,
            veryPoor: 400,
            poor: 600,
            fair: 900,
            good: 900,
            veryGood: 700,
        },
        description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
        id: 3,
        otherSrc: [
            {
                src: blackShoes,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 31
            }, {
                src: blackShoes2,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 32
            }, {
                src: blackShoes3,
                title: "Nike Shoes",
                price: "45000",
                sizes: ["xs", "s", "m"],
                colors: ["#1B2436", "#137681", "#2efef6"],
                stock: 50,
                reviews: {
                    total: 3500,
                    veryPoor: 400,
                    poor: 600,
                    fair: 900,
                    good: 900,
                    veryGood: 700,
                },
                description: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsum, vero! A aperiam beatae consequuntur eius eligendi esse eum, facere harum incidunt inventore laborum odio quam quidem quisquam saepe suscipit.",
                id: 33
            }
        ]
    },
];

export const relativesCategoriesProduct = [
    {
        idProduct: 1,
        relativeProducts: [...categoriesProducts].concat([...categoriesProducts])
    }
]

export const relativesBlackCategoriesProduct = [
    {
        idProduct: 1,
        relativeProducts: [...categoriesBlackProducts].concat([...categoriesBlackProducts])
    }
]

export const userWhiteShoppingCart = [...categoriesProducts.map((value, index) => {
    return {
        id: index + 1,
        quantity: index + 2,
        product: {...value},
        size: "m",
        color: "#137681"
    }
})]

export const userBlackShoppingCart = [...categoriesBlackProducts.map((value, index) => {
    return {
        id: index + 1,
        quantity: index + 2,
        product: {...value},
        size: "m",
        color: "#137681"
    }
})]



