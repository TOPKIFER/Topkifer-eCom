/**
 * Multiple classes
 * @param {...string} classes All desired StyleSheet classes
 * @summary A helper for conveniently add multiple StyleSheet classes
 * @author Arnaud LITAABA
 */
import {SEPARATOR} from "./constant";

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