import React from "react";
import searchBarClasses from "./searchBar.module.scss"
import search from "assets/icons/search.svg";
import cancel from "assets/icons/cancel.svg";
import Icon from "../../icon/Icon";
import {multipleClasses} from "../../../utilities/utilities";

const SearchBar = ({mobile, searchInputClass, ...rest}) => {
    const {
        searchBar,
        searchInput,
        searchInputMobile,
        searchBarMobile
    } = searchBarClasses;
    return <div className={multipleClasses(!mobile ? searchBar : searchBarMobile, searchInputClass)}>
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
}

export default SearchBar