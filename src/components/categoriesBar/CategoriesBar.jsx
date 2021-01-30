import React, {useState} from "react";
import categoriesBarWhiteClasses from "./categoriesBarWhite.module.scss"
import categoriesBarBlackClasses from "./categoriesBarBlack.module.scss"
import {categoriesConstants, LEFT, RIGHT, WHITE} from "utilities/constant";
import {connect} from "react-redux";
import {getMessage} from "../../utilities/i18n";
import {moveFile} from "../../utilities/utilities";

/**
 * CategoriesBar component
 * @description The categories bar component for displaying all available categories
 * @param {String} actualTheme the actual theme of the app
 * @author Arnaud LITAABA
 */
const CategoriesBar = (actualTheme) => {

    const {
        categoriesBar, categoryClass,
        mobileCategories, mobileCategoryClass,
        categoryController
    } = actualTheme === WHITE ? categoriesBarWhiteClasses : categoriesBarBlackClasses;

    // we initialise the state with our constants categories
    const [categoriesState, setCategoriesState] = useState({
        categories: [...categoriesConstants]
    });

    const move = (direction) => {
        setCategoriesState({
            categories: [...moveFile(categoriesState.categories, direction)]
        })
    }

    const {categories} = categoriesState;

    return <div className={categoriesBar}>
        {categories.map(category => {
            const {name} = category;
            return <span className={categoryClass} key={name}>{name}</span>
        })}
        <div className={mobileCategories}>
            <div className={categoryController} onClick={() => move(LEFT)}> {"<"} </div>
            {categories.map((category, index) => {
                const name = getMessage(category.name);
                return index < 3 && <span className={mobileCategoryClass} key={name}>{name}</span>
            })}
            <div className={categoryController} onClick={() => move(RIGHT)}> {">"} </div>
        </div>
    </div>
}

/**
 * connect the categories bar card Component to the whole store
 * Extract the theme value
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
 * connect the categories bar Component to the whole store
 * @description Extract the theme value
 * Bind theme value to categories bar props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(CategoriesBar)