import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <ul className="navbar-nav ms-auto">
            {
                props.navItem.map((item, i) => {
                    return (
                        <li key={i} className='nav-item'>
                            {item.dropdown ? <button className="nav-link"> {item.txt} <i className="fa fa-chevron-down"></i></button>
                                :
                                <NavLink className="nav-link" to={item.url}>{item.txt} </NavLink>
                            }
                            {
                                item.dropdown &&
                                <div className='droplist' data-dropdown="first">
                                    <ul>
                                        {
                                            item.dropdown.map((item, i) => {
                                                return (
                                                    <li key={i} className='list_item'>
                                                        {item.dropdown ? <button className="nav-link"> {item.txt} <i className="fa fa-chevron-right"></i></button>
                                                            : <NavLink to={item.url} className='nav-link'>{item.txt}</NavLink>
                                                        }
                                                        {item.dropdown &&
                                                            <div className='droplist' data-dropdown="second">
                                                                <ul>
                                                                    {
                                                                        item.dropdown.map((item, i) => {
                                                                            return (
                                                                                <li key={i} className="list_item">
                                                                                    <NavLink className='nav-link' to={item.url}>{item.txt}</NavLink>
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
