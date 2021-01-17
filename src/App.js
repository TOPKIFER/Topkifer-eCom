import React, {createContext, useEffect, useState} from "react";
import "./app.scss";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Drawer from "components/drawer/Drawer";
import Menu from "views/menu/Menu";
import {BLACK, HIDE_ALL, LEFT} from "utilities/constant";
import AppRoute from "./router/Router";
import {connect} from "react-redux"


/**
 * A context (value) with createContext imported from React
 * @value  {Context} DrawerSearchContext have a provider and a consumer and
 * handle drawer visibility, closing state and mobile search trigger.
 * @author Arnaud LITAABA
 */
export const DrawerSearchContext = createContext();

/**
 * Main component
 * Will use the @DrawerSearchContext in PROVIDER mode since, he wraps all others components
 * @param {String} actualTheme Actual theme of the app
 * @author Arnaud LITAABA
 */
const App = ({actualTheme}) => {
    const [state, setState] = useState({
        visible: false,
        isClosing: false,
        mobileSearch: false
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
            <div className="app">
                <DrawerSearchContext.Provider value={{
                    ...state,
                    setContextValue: setContextValue
                }}>
                    <Header/>
                    <Drawer content={<Menu/>} position={LEFT}/>
                    <AppRoute/>
                    <Footer/>
                </DrawerSearchContext.Provider>
            </div>
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
        actualTheme: state.themeState.actualTheme
    }
}

/**
 * connect the app Component to the whole store
 * @description Extract the theme value
 * bind theme value to app props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(App)

