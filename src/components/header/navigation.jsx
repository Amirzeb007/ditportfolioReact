import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const [isActive, setActive] = useState(false);
    const [itemIndex, setitemIndex] = useState(null);
    const [isSubActive, setSubActive] = useState(false);
    const [SubIndex, setSubIndex] = useState(null);

    const handleChange = (i) => {
        return setActive(!isActive) + setitemIndex(i);
        // return console.log(i, "//>>");
    }
    const handleChange2 = (i) => {
        return setSubActive(!isSubActive) + setSubIndex(i);
        // return console.log(i, "//>>");
    }
    return (
        <ul className="navbar-nav ms-auto">
            {
                props.navItem.map((item1, i1) => {
                    return (
                        <li key={i1} className={isActive && itemIndex === i1 ? 'nav-item active' : 'nav-item'}>
                            <div className="link_wrapper">
                                <Link className="nav-link" to={item1.url}>{item1.txt} </Link>
                                {item1.dropdown1 && <i className="fa fa-chevron-down" onClick={() => handleChange(i1)}></i>}
                            </div>
                            {
                                item1.dropdown1 &&
                                <div className={isActive && itemIndex === i1 ? 'droplist open' : 'droplist'} data-dropdown="first">
                                    <ul>
                                        {
                                            item1.dropdown1.map((item2, i2) => {
                                                return (
                                                    <li key={i2} className={isSubActive && SubIndex === i2 ? 'list_item active' : 'list_item'}>
                                                        <div className="link_wrapper2">
                                                            <Link to={item2.url}>{item2.txt}</Link>
                                                            {item2.dropdown2 && <i className="fa fa-chevron-right" onClick={() => handleChange2(i2)}></i>}
                                                        </div>
                                                        {item2.dropdown2 &&
                                                            <div className={isSubActive && SubIndex === i2 ? 'droplist open' : 'droplist'} data-dropdown="second">
                                                                <ul>
                                                                    {
                                                                        item2.dropdown2.map((item3, i3) => {
                                                                            return (
                                                                                <li key={i3} className="list_item">
                                                                                    <Link to={item3.url}>{item3.txt}</Link>
                                                                                </li>
                                                                            );
                                                                        })
                                                                    }
                                                                </ul>
                                                            </div>
                                                        }
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </li>
                    );
                })
            }
        </ul >
    );
}

export default Nav;
