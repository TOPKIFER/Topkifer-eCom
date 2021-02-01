import React from 'react';
import {useIntl} from "react-intl";

const intl = useIntl;

export const getMessage = (id) => {
    return intl().formatMessage({id, defaultMessage: id});
}

export const getLanguage = () => {
    return {
        "en": {
            // authentication sections
            "login": "Login",
            "pleaseLoginInToYourAccount": "Please login to your account",
            "username": "Username",
            "enterYourUsername": "Enter your username",
            "enterYourPassword": "Enter your password",
            "password": "Password",
            "lostYourPassword": "Lost your password ?",
            "doNotHaveAnAccountCreateNow": "Do not have an account ? Create now",
            "rememberMe": "Remember me",
            "register": "Register",
            "logout": "Logout",
            "menu": "Menu",
            // accounts constants
            "myAccount": "My account",
            "account": "Account",
            "changeTheme": "Change theme",
            "shoppingCart": "Shopping cart",
            "favorites": "Favorites",
            "contactUs": "Contact us",
            "changeLanguage": "Change language",
            // categories constants
            "fashion": "Fashion",
            "electronics": "Electronics",
            "vehicles": "Vehicles",
            "sports": "Sports",
            "machinery": "Machinery",
            "home": "Home",
            "garden": "Garden",
            "personal": "Personal",
            // product section
            "addToCart": "Add to cart"
        },
        "fr": {
            "login": "Se connecter",
            "logout": "Se déconnecter",
            "changeTheme": "Changer le theme"
        }
    }
}