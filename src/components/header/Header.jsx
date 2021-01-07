import React, {useState} from "react";
import headerClasses from "./header.module.scss";
import Navbar from "./navbar/Navbar";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {

    const [mobileSearch, showMobileSearch] = useState(false);

    const toggleMobileSearch = () => {
        showMobileSearch(!mobileSearch)
    }

    console.log(mobileSearch)

    const {header} = headerClasses;
    return (
        <header className={header}>
            <Navbar toggleMobileSearch={toggleMobileSearch}/>
            <div className="w-100">
                {mobileSearch && <SearchBar mobile/>}
            </div>
        </header>
    );
}

export default Header
