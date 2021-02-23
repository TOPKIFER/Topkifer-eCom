import React, {lazy, Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {APP_URL} from "utilities/constant";
import {DrawerSearchContext} from "App";
import {multipleClasses} from "utilities/utilities";

const Home = lazy(() => import("views/pages/home/Home"));
const Product = lazy(() => import("views/pages/product/Product"));
const Cart = lazy(() => import("views/pages/cart/Cart"));
const Favorites = lazy(() => import("views/pages/favorites/Favorites"));

const {BASE, PRODUCT, CART, FAVORITE} = APP_URL;

/**
 * AppRoute
 * @description A lazy loading router for optimisations, fast app and fast first eyes contacts
 * @param {props} props All properties of the AppRoute component inherited or not
 * @summary Will use the @DrawerSearchContext in CONSUMER mode to handle the search bar visibility
 * @author Arnaud LITAABA
 */
const AppRoute = (props) => {
    return <DrawerSearchContext.Consumer>
        {/*
        We use destructuring to extract only the data
        we need from DrawerSearchContext. And here it is mobileSearch to adjust the height
        when user show the search bar*/}
        {({mobileSearch}) => (
            <div className={multipleClasses(mobileSearch ? "predefinedHeight" : "", "app-container")}><Switch>
                <Suspense fallback={null}>
                    <Route exact path={BASE} component={Home}/>
                    <Route path={PRODUCT + "/:id"} component={Product}/>
                    <Route path={CART} component={Cart}/>
                    <Route path={FAVORITE} component={Favorites}/>
                </Suspense>
            </Switch>
            </div>
        )}
    </DrawerSearchContext.Consumer>
}
export default AppRoute