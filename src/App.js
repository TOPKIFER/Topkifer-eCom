import React, {createContext, useEffect, useState} from "react";
import "./app.scss";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Drawer from "components/drawer/Drawer";
import Menu from "views/menu/Menu";
import {BLACK, HIDE_ALL, LEFT, MENU, RIGHT, SHOPPING} from "utilities/constant";
import AppRoute from "./router/Router";
import {connect} from "react-redux";
import {IntlProvider} from 'react-intl';
import {DEFAULT_LANGUAGE} from "./utilities/constant";
import {getLanguage} from "./utilities/i18n";
import PreviewCart from "views/pages/cart/cartPreview/CartPreview";


/**
 * A context (value) with createContext imported from React
 * @value  {Context} DrawerSearchContext have a provider and a consumer and
 * handle drawer visibility, closing state and mobile search trigger.
 * @author Arnaud LITAABA
 */
export const DrawerSearchContext = createContext();

/**
 * A context (value) with createContext imported from React
 * @value  {Context} DrawerSearchContext have a provider and a consumer and
 * handle drawer visibility, closing state.
 * @author Arnaud LITAABA
 */
export const DrawerCartContext = createContext();

/**
 * Main component
 * Will use the @DrawerSearchContext in PROVIDER mode since, he wraps all others components
 * @param {String} actualTheme Actual theme of the app
 * @param {String} actualLanguage Actual language Actual theme of the app
 * @param {Object} loggedInUser the logged in user
 * @author Arnaud LITAABA
 */
const App = ({actualTheme, actualLanguage, loggedInUser}) => {
    const [state, setState] = useState({
        visible: false,
        isClosing: false,
        mobileSearch: false
    });

    const [cartState, setCartState] = useState({
        visible: false,
        isClosing: false,
    });

    /**
     * A way to change context value
     * @param {string} target the targeted data to change
     * @param {value} value the new value for the targeted data.
     * @author Arnaud LITAABA
     */
    const setContextValue = (target, value) => {
        if (target === HIDE_ALL) {
            setState({...state, visible: false, mobileSearch: false})
            return
        }
        setState({...state, [target]: value})
    }

    const setCartContextValue = (target, value) => {
        setCartState({...cartState, [target]: value})
    }

    useEffect(() => {
        if (actualTheme) {
            switch (actualTheme) {
                case BLACK:
                    document.body.style.backgroundColor = "#202325";
                    return
                default:
                    document.body.style.backgroundColor = "white";
                    return
            }
        }
    }, [actualTheme])

    return (
        <Router>
            <IntlProvider messages={getLanguage()[loggedInUser.language || actualLanguage]}
                          locale={loggedInUser.language || actualLanguage}
                          defaultLocale={DEFAULT_LANGUAGE}>
                <div className="app">
                    <DrawerSearchContext.Provider value={{
                        ...state,
                        setContextValue: setContextValue
                    }}>
                        <DrawerCartContext.Provider value={{
                            ...cartState,
                            setCartContextValue: setCartContextValue
                        }}>
                            <Header/>
                            <Drawer target={MENU} content={<Menu/>} position={LEFT}/>
                            <Drawer target={SHOPPING} content={<PreviewCart/>} position={RIGHT}/>
                            <AppRoute/>
                            <Footer/>
                        </DrawerCartContext.Provider>
                    </DrawerSearchContext.Provider>
                </div>
            </IntlProvider>
        </Router>
    );
}

/**
 * connect the menu Component to the whole store
 * Extract the function and the value of the whole state we need here
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme,
        actualLanguage: state.languageState.actualLanguage,
        loggedInUser: state.loginState.loggedInUser,
    }
}

/**
 * connect the app Component to the whole store
 * @description Extract the theme value
 * bind theme value to app props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(App)

