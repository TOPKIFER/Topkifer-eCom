/**
 * Multiple classes
 * @param {...string} classes All desired StyleSheet classes
 * @summary A helper for conveniently add multiple StyleSheet classes
 * @author Arnaud LITAABA
 */
import {LEFT, SEPARATOR} from "./constant";

export const multipleClasses = (...classes) => classes.join(SEPARATOR);

/**
 * Make index
 * @param {...Any} values All values for making unique index
 * @summary A helper for conveniently add unique key to component
 * @author Arnaud LITAABA
 */
export const makeIndex = (...values) => values.join("-|-");

/**
 * Is mobile
 * @summary A helper for mobile browsing detection
 * @author Arnaud LITAABA
 */
export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


/**
 * Over X value, here ten
 * @param {maxValue} value A desired max value before add +
 * @summary A helper for conveniently add data to badge
 * @author Arnaud LITAABA
 */
export const overTen = (value) => value > 9 ? "9+" : value;

/**
 * ToggleAuthVisibility
 * @param {function} setVisible The context trigger values function
 * @param {Boolean} value The new context value
 * @summary A helper for conveniently trigger context value
 * @author Arnaud LITAABA
 */
export const toggleAuthVisibility = (setVisible, value) => {
    setVisible("isClosing", !value);
    setTimeout(() => setVisible("visible", value), 300)
}

/**
 * UpperFirst
 * @param {String} value The context trigger values function
 * @summary A helper for uppercase the first character of a string
 * @author Arnaud LITAABA
 */
export const upperFist = (value) => value ? value[0].toUpperCase() + value.slice(1) : value

/**
 * Move file from one direction to another
 * @description The move files function is to move to the next or previous file
 * @param {Array} files The targeted files
 * @param {String} direction The direction to move
 * @author Arnaud LITAABA
 */
export const moveFile = (files, direction) => {
    const oldFiles = [...files];
    if (direction === LEFT) {

        // pop() give us the last value of our array
        const last = files.pop();

        // unshift() add the last value of our array in the first position
        files.unshift(last);

        // Obviously return the files
        return files
    }

    // shift() give us the first value of our array
    const first = oldFiles.shift();

    /* unshift() add the first value of our array in the first position, so
    * we need to reverse() the array before
    */
    oldFiles.reverse().unshift(first);

    // Obviously return the files
    return oldFiles.reverse()
}

let total = 3089;

export const calculateRate = (value) => {

    const mo = value / 5;

    switch (true) {
        case value.toString().length === 7:
            return Math.round(mo / 200000);
        case value.toString().length === 6:
            return Math.round(mo / 20000);
        case value.toString().length === 5:
            return Math.round(mo / 2000);
        case value.toString().length === 4:
            return Math.round(mo / 200);
        case value.toString().length === 3:
            return Math.round(mo / 20);
        case value.toString().length === 2:
            return Math.round(mo / 2);
        default:
            return Math.round(mo);
    }
}


export const defineTextColor = (hex) => {
    // colors: ["#1B2436", "#137681", "#2efef6"],
    // console.log(hex)
    switch (true) {
        case hex.toLowerCase() === "#1b2436":
            return "Black"
        case hex.toLowerCase() === "#137681":
            return "Pure blue"
        case hex.toLowerCase() === "#2efef6":
            return "Skye blue"
        default:
            return ""
    }
}

let res = calculateRate(total);