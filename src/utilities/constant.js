import {overTen} from "./utilities";

export const SEPARATOR = " ";
export const defaultIconSize = "24px";
export const HIDE_ALL = "hideAll";
export const RIGHT = "right";
export const LEFT = "left";
export const WHITE = "white";
export const BLACK = "black";

export const APP_URL = {
    BASE: "/"
};

export const REDUX_CONSTANTS = {
    LOGIN: "auth",
    REGISTER: "register",
    CHANGE_THEME: "change theme",
}

export const categoriesConstants = [
    {
        name: "Fashion"
    },
    {
        name: "Electronics"
    },
    {
        name: "Vehicles"
    },
    {
        name: "Sports"
    },
    {
        name: "Machinery"
    },
    {
        name: "Home"
    },
    {
        name: "Garden"
    },
    {
        name: "Personal"
    }
]

export const accountConstants = [
    {
        name: "Shopping cart",
        total: overTen(120)
    },
    {
        name: "Favorites"
    },
    {
        name: "Contact us"
    },
    {
        name: "Change theme"
    },
    {
        name: "Logout"
    }
]
