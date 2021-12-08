import React from 'react';
import { sitelogo } from '../../assets/img';
import { Link } from 'react-router-dom';
import MyDropDownMenu from './dropdown-menu';
import MyLogo from '../site-logo';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <header className="header_absolute">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <MyLogo
                            link="/"
                            myclass="Navbar-brand"
                            img={sitelogo}
                            alt="DIT Logo"
                            imgclass="img-fluid"
                        />
                        <a className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/insights">Insights</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/career">Career</Link>
                                </li>
                            </ul>
                            <Link to="/contact-us" className="common_btn btn_hover bg_red txt_white">Contact Us</Link>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;