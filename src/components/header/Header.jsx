import React, {useState} from "react";
import headerClasses from "./header.module.scss";
import Navbar from "./navbar/Navbar";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {

    const [mobileSearch, showMobileSearch] = useState(false);

    const toggleMobileSearch = () => {
        showMobileSearch(!mobileSearch)
    }

    const {header, mobileSearchWrapper} = headerClasses;
    return (
        <header className={header}>
            <Navbar mobileSearch={mobileSearch} toggleMobileSearch={toggleMobileSearch}/>
            <div className={mobileSearchWrapper}>
                {mobileSearch && <SearchBar onClick={toggleMobileSearch} mobile/>}
            </div>
        </header>
    );
}

export default Header
