export const multipleClasses = (...classes) => classes.join(" ");
export const overTen = (value) => value > 9 ? "9+" : value;
export const toggleAuthVisibility = (setVisible, value) => {
    setVisible("isClosing", !value);
    setTimeout(() => setVisible("visible", value), 300)
}
export const upperFist = (value) => value ? value[0].toUpperCase() + value.slice(1) : value