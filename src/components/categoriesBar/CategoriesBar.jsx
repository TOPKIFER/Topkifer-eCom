import React from "react";
import categoriesBarClasses from "./categoriesBar.module.scss"
import {categoriesConstants} from "../../utilities/constant";

const CategoriesBar = (props) => {

    const {categoriesBar,categoryClass} = categoriesBarClasses;

    const categories = [...categoriesConstants]

    return <div className={categoriesBar}>
        {categories.map(category => {
            const {name} = category;
            return <span className={categoryClass} key={name}>{name}</span>
        })}
    </div>
}

export default CategoriesBar