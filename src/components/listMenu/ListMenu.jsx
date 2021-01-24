import React from "react";
import listMenuWhiteClasses from "./listMenuWhite.module.scss"
import listMenuBlackClasses from "./listMenuBlack.module.scss"
import {connect} from "react-redux";
import {WHITE} from "../../utilities/constant";

/**
 * ListMenu component
 * @description The ListMenu component is for listings menu data and why not other data ;-)
 * @param {Array} lists An array of objects which represents list of menu
 * @param {String} actualTheme Actual theme of the app
 * @author Arnaud LITAABA
 */
const ListMenu = ({lists, actualTheme}) => {

    const {listMenuItems, listMenuItem, listMenu, menuAccountBadge} = actualTheme === WHITE ? listMenuWhiteClasses : listMenuBlackClasses;

    return <div className={listMenu}>
        <ul className={listMenuItems}>
            {lists?.map(list => {
                const {name, total, ...rest} = list;
                return <li key={name} {...rest} className={listMenuItem}>
                    <span>{name}</span>
                    {
                        total && <span className={menuAccountBadge}>{total}</span>
                    }
                </li>
            })}
        </ul>
    </div>
}

/**
 * connect the List menu Component to the whole store
 * Extract the value of the whole state we need here
 * @param {Object} state the whole state managed by redux
 * @return {Object} all desired value from redux
 * @author Arnaud LITAABA
 */
const mapStateToProps = state => {
    return {
        actualTheme: state.themeState.actualTheme,
    }
}

/**
 * connect the List menu Component to the whole store
 * @description Extract the value of the whole state we need here
 * Bind all extracted values to list menu props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(ListMenu)