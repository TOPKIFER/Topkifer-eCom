import React from "react";
import listMenuClasses from "./listMenu.module.scss"

const ListMenu = ({lists}) => {

    const {listMenuItems, listMenuItem, listMenu, menuAccountBadge} = listMenuClasses;

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

export default ListMenu