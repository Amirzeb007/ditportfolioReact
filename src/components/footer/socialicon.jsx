import React from 'react';
import { Link } from 'react-router-dom';

function SocialIcons(props) {
    return (
        <ul>
            {
                props.items.map((item, i) => {
                    return <li key={i} >
                        <Link to={item.link}>
                            <i className={item.classes}></i>
                        </Link>
                    </li>
                })
            }
        </ul>
    );
}

export default SocialIcons;