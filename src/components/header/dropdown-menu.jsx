import React from 'react';
import { NavLink } from 'react-router-dom';

function MyDropDownMenu(props) {
    const dropItem = props.dropItem;
    return (
        <ul className="dropdown-menu">
            {
                dropItem.map((item, i) => {
                    return <li key={i}><NavLink className={props.dropClass} to={item.url}>{item.txt}</NavLink></li>;
                })
            }
        </ul>
    );
}

export default MyDropDownMenu;