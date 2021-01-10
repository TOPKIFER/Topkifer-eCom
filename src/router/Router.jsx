import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {APP_URL} from "../utilities/constant";
import {AuthContext} from "../App";
import {multipleClasses} from "../utilities/utilities";

const Home = lazy(() => import("views/pages/home/Home"));

const {BASE} = APP_URL;
const AppRoute = (props) => {
    return <AuthContext.Consumer>
        {({mobileSearch}) => (
            <div className={multipleClasses(mobileSearch ? "predefinedHeight" : "", "app-container")}><Switch>
                <Suspense fallback={null}>
                    <Route exact path={BASE}>
                        <Home/>
                    </Route>
                </Suspense>
            </Switch>
            </div>
        )}
    </AuthContext.Consumer>
}
export default AppRoute