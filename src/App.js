import React, {createContext, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "components/header/Header";
import Drawer from "components/drawer/Drawer";
import Menu from "views/menu/Menu";
import {HIDE_ALL, LEFT} from "utilities/constant";
import AppRoute from "./router/Router";


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
 * @author Arnaud LITAABA
 */
const App = () => {
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
                </DrawerSearchContext.Provider>
            </div>
        </Router>
    );
}

export default App;
