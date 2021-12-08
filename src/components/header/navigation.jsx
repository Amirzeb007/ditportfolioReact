import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <ul className="navbar-nav ms-auto">
            {
                props.navItem.map((item1, i1) => {
                    return (
                        <li key={i1} className="nav-item" >
                            <Link className="nav-link" to={item1.url}>{item1.txt}</Link>
                            {item1.dropdown1 &&
                                <div className="droplist" data-dropdown="first">
                                    <ul>
                                        {
                                            item1.dropdown1.map((item2, i2) => {
                                                return (
                                                    <li key={i2} className="list_item">
                                                        <Link to={item2.url}>{item2.txt} {item2.dropdown2 && <i className="fa fa-chevron-right"></i>}</Link>
                                                        {item2.dropdown2 &&
                                                            <div className="droplist" data-dropdown="second">
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
        </ul>
    );
}

export default Nav;
