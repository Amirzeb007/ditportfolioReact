import React from 'react';
import { Link } from 'react-router-dom';

function MyDropDownMenu(props) {
    const dropItem = props.dropItem;
    return (
        <ul className="dropdown-menu">
            {
                dropItem.map((item, i) => {
                    return <li key={i}><Link className={props.dropClass} to={item.url}>{item.txt}</Link></li>;
                })
            }
        </ul>
    );
}

export default MyDropDownMenu;