import React from 'react';
import { Link } from 'react-router-dom';

function MyColumns(props) {
    return (
        <div className="column">
            <h5>{props.hd}</h5>
            <ul>
                {
                    props.navitems.map((item, i) => {
                        return <li key={i} ><Link to={item.link}>{item.txt}</Link></li>
                    })
                }
            </ul>
        </div>
    );
}

export default MyColumns;