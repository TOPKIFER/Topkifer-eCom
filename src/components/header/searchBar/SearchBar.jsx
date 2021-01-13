import React from "react";
import searchBarClasses from "./searchBar.module.scss"
import search from "assets/icons/search.svg";
import cancel from "assets/icons/cancel.svg";
import Icon from "../../icon/Icon";
import {multipleClasses} from "../../../utilities/utilities";

/**
 * Search bar component
 * @description The Search bar component is for searching
 * @param {Boolean} mobile to know if we are displaying the search bar on mobile or not
 * @param {String} searchInputClass The search input class
 * @param {Any} rest All other useful props
 * @author Arnaud LITAABA
 */
const SearchBar = ({mobile, searchInputClass, ...rest}) => {
    const {
        searchBar,
        searchInput,
        searchInputMobile,
        searchBarMobile,
        searchOverlay
    } = searchBarClasses;
    return <>
        <div className={multipleClasses(!mobile ? searchBar : searchBarMobile, searchInputClass)}>
            <Icon
                className="mr-2"
                src={search}
                style={{
                    height: "16px",
                }}
                alt="search-icon"
            />
            <input className={!mobile ? searchInput : searchInputMobile} type="text"
                   placeholder="Search anything you want"/>
            {
                mobile && <Icon
                    src={cancel}
                    {...rest}
                    style={{
                        height: "16px",
                        cursor: "pointer"
                    }}
                    alt="cancel-icon"
                />
            }
        </div>
        <div className={searchOverlay}/>
        </>
}

export default SearchBar