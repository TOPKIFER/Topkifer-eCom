import React from "react";
import searchBarWhiteClasses from "./searchBarWhite.module.scss"
import searchBarBlackClasses from "./searchBarBlack.module.scss"
import search from "assets/icons/search.svg";
import cancel from "assets/icons/cancel.svg";
import Icon from "components/icon/Icon";
import {multipleClasses} from "utilities/utilities";
import {connect} from "react-redux";
import {WHITE} from "../../../utilities/constant";

/**
 * Search bar component
 * @description The Search bar component is for searching
 * @param {Boolean} mobile to know if we are displaying the search bar on mobile or not
 * @param {String} searchInputClass The search input class
 * @param {String} actualTheme the actual theme of the app
 * @param {Any} rest All other useful props
 * @author Arnaud LITAABA
 */
const SearchBar = ({mobile, searchInputClass, actualTheme, ...rest}) => {
    const {
        searchBar,
        searchInput,
        searchInputMobile,
        searchBarMobile,
        searchOverlay
    } = actualTheme === WHITE ? searchBarWhiteClasses : searchBarBlackClasses;
    return <>
        <div className={multipleClasses(!mobile ? searchBar : searchBarMobile, searchInputClass)}>
            <Icon
                className="mr-2"
                src={search}
                size="16px"
            />
            <input className={!mobile ? searchInput : searchInputMobile} type="text"
                   placeholder="Search anything you want"/>
            {
                mobile && <Icon
                    src={cancel}
                    {...rest}
                    size="16px"
                    style={{
                        cursor: "pointer"
                    }}
                />
            }
        </div>
        <div className={searchOverlay}/>
    </>
}

/**
 * connect the search bar Component to the whole store
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
 * connect the search bar Component to the whole store
 * @description Extract the theme value
 * bind theme value to search bar props
 * @author Arnaud LITAABA
 */
export default connect(mapStateToProps)(SearchBar)