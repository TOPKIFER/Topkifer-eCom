import React, {createContext, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "components/header/Header";
import Homepage from "views/pages/homepage/Homepage";
import Drawer from "components/drawer/Drawer";
import Auth from "views/auth/Auth";
import {APP_URL, LEFT} from "utilities/constant";

const {BASE} = APP_URL;

export const AuthContext = createContext();

const App = () => {
    const [state, setState] = useState({
        visible: false,
        isClosing: false
    });

    const setVisible = (target,value) => {
        setState({...state,[target]: value})
    }

    return (
        <Router>
            <div className="App">
                <AuthContext.Provider value={{
                    ...state,
                    setVisible: setVisible
                }}>
                    <Header/>
                    <Drawer content={<Auth/>} position={LEFT}/>
                </AuthContext.Provider>
                <Switch>
                    <Route exact path={BASE}>
                        <Homepage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
