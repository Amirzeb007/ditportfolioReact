import React from 'react';
import { Link } from 'react-router-dom';

function MyLogo(props) {
    return (
        <Link className={props.myclass} to={props.link}>
            <img src={props.img} className="" alt={props.alt} />
        </Link>
    );
}

export default MyLogo;