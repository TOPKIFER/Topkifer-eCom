import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "components/header/Header";
import Homepage from "components/pages/homepage/Homepage";
import Login from "components/register/Login";
import Signup from "components/register/Signup";

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
