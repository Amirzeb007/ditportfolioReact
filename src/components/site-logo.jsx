import React from 'react';
import { Link } from 'react-router-dom';

function MyLogo(props) {
    return (
        <Link className={props.myclass} onClick={(e) => e.preventDefault()} to={props.link}>
            <img src={props.img} className={props.imgClass} alt={props.alt} />
        </Link>
    );
}

export default MyLogo;