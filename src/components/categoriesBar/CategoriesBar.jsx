import React, {useState} from "react";
import categoriesBarClasses from "./categoriesBar.module.scss"
import {categoriesConstants, LEFT, RIGHT} from "../../utilities/constant";

/**
 * CategoriesBar component
 * @description The categories bar component for displaying all available categories
 * @author Arnaud LITAABA
 */
const CategoriesBar = () => {

    const {
        categoriesBar, categoryClass,
        mobileCategories, mobileCategoryClass,
        categoryController
    } = categoriesBarClasses;

    // we initialise the state with our constants categories
    const [state, setState] = useState({
        categories: [...categoriesConstants]
    });

    /**
     * Move Categories
     * @description The move function is to move to the next or previous categories
     * especially on mobile
     * @param {String} direction The direction to move
     * @author Arnaud LITAABA
     */
    const move = (direction) => {
        const oldCategories = [...categories];
        if (direction === LEFT) {

            // pop() give us the last value of our array
            const last = categories.pop();

            // unshift() add the last value of our array in the first position
            categories.unshift(last);

            // Obviously save changes with this
            setState({categories: [...categories]})
            return
        }

        // shift() give us the first value of our array
        const first = oldCategories.shift();

        /* unshift() add the first value of our array in the first position, so
        * we need to reverse() the array before
        */
        oldCategories.reverse().unshift(first);

        // Obviously save changes with this
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