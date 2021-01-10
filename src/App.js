import React, {createContext, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "components/header/Header";
import Drawer from "components/drawer/Drawer";
import Auth from "views/auth/Auth";
import {HIDE_ALL, LEFT} from "utilities/constant";
import AppRoute from "./router/Router";

export const AuthContext = createContext();

const App = () => {
    const [state, setState] = useState({
        visible: false,
        isClosing: false,
        mobileSearch: false
    });

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
                <AuthContext.Provider value={{
                    ...state,
                    setContextValue: setContextValue
                }}>
                    <Header/>
                    <Drawer content={<Auth/>} position={LEFT}/>
                    <AppRoute/>
                </AuthContext.Provider>
            </div>
        </Router>
    );
}

export default App;
