import React, {useState} from "react";
import categoriesBarClasses from "./categoriesBar.module.scss"
import {categoriesConstants, LEFT, RIGHT} from "../../utilities/constant";

const CategoriesBar = () => {

    const {
        categoriesBar, categoryClass,
        mobileCategories, mobileCategoryClass,
        categoryController
    } = categoriesBarClasses;
    const [state, setState] = useState({
        categories: [...categoriesConstants]
    });

    const move = (direction) => {
        const oldCategories = [...categories];
        if (direction === LEFT) {
            const last = categories.pop();
            categories.unshift(last);
            setState({categories: [...categories]})
            return
        }
        const first = oldCategories.shift();
        oldCategories.reverse().unshift(first);
        setState({categories: [...oldCategories.reverse()]})
    }

    const {categories} = state;
    return <div className={categoriesBar}>
        {categories.map(category => {
            const {name} = category;
            return <span className={categoryClass} key={name}>{name}</span>
        })}
        <div className={mobileCategories}>
            <div className={categoryController} onClick={() => move(LEFT)}> {"<"} </div>
            {categories.map((category, index) => {
                const {name} = category;
                return index < 3 && <span className={mobileCategoryClass} key={name}>{name}</span>
            })}
            <div className={categoryController} onClick={() => move(RIGHT)}> {">"} </div>
        </div>
    </div>
}

export default CategoriesBar