export const multipleClasses = (...classes) => classes.join(" ");
export const overHundred = (value) => value > 99 ? "99+" : value;
export const toggleAuthVisibility = (setVisible, value) => {
    setVisible("isClosing", !value);
    setTimeout(() => {
        setVisible("visible", value);
    }, 300)
}