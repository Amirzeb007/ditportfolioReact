import React from 'react';
import { sitelogo } from '../../assets/img';
import { Link } from 'react-router-dom';
import MyDropDownMenu from './dropdown-menu';
import MyLogo from '../site-logo';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropItem1: [
                { url: '/', txt: 'Mobile App Development' },
                { url: '/', txt: 'Web Dev Services' },
                { url: '/', txt: 'WordPress Development' },
                { url: '/', txt: 'Responsive Web Design' },
                { url: '/', txt: 'Blockchain Development' },
            ],
            dropItem2: [
                { url: '/', txt: 'Creative & Intelligent Designs' },
                { url: '/', txt: 'Graphics Designing' },
                { url: '/', txt: 'Logo Designing' },
                { url: '/', txt: 'Web & Mobile' },
                { url: '/', txt: 'UI Wireframing' },
                { url: '/', txt: 'Ideation Elaboration' },
            ],
            dropItem3: [
                { url: '/', txt: 'Smart Insights' },
                { url: '/', txt: 'PPC' },
                { url: '/', txt: 'SEO' },
                { url: '/', txt: 'Email Marketing' },
                { url: '/', txt: 'Social Media Marketing' },
                { url: '/', txt: 'Online Marketing' },
            ],
            dropItem4: [
                { url: '/', txt: 'We’re Security Aware!' },
                { url: '/', txt: 'Data Security' },
                { url: '/', txt: 'Website Security' },
                { url: '/', txt: 'Network & IT Security' },
                { url: '/', txt: 'Cloud Security' },
                { url: '/', txt: 'Virus Testing & Solution' },
            ],
            dropItem5: [
                { url: '/', txt: 'Quality Assurance' },
                { url: '/', txt: 'Testing Services' },
                { url: '/', txt: 'Performance Testing' },
                { url: '/', txt: 'Mobile Testing' },
                { url: '/', txt: 'Test Automation' },
                { url: '/', txt: 'Software Testing' },
            ],
            dropItem6: [
                { url: '/', txt: 'iOS App Development' },
                { url: '/', txt: 'Android Development' },
                { url: '/', txt: 'HTML5 Development' },
                { url: '/', txt: 'React Native App' },
                { url: '/', txt: 'Social Media Marketing' },
                { url: '/', txt: 'Xamarin Development' },
            ],
            dropItem7: [
                { url: '/', txt: 'Java/J2EE' },
                { url: '/', txt: '.Net' },
                { url: '/', txt: 'PHP' },
                { url: '/', txt: 'Mean Stack' },
                { url: '/', txt: 'Social Media Marketing' },
                { url: '/', txt: 'Ruby on Rails' },
            ],
            dropItem8: [
                { url: '/', txt: 'Angular JS' },
                { url: '/', txt: 'ReactJS Development' },
                { url: '/', txt: 'Bootstrap' },
                { url: '/', txt: 'Ember.js' },
                { url: '/', txt: 'Knowout.js' },
            ],
            dropItem9: [
                { url: '/', txt: 'Alfresco' },
                { url: '/', txt: 'Liferay' },
                { url: '/', txt: 'SharePoint' },
                { url: '/', txt: 'Ektron' },
                { url: '/', txt: 'WordPress' },
            ],
            dropItem10: [
                { url: '/', txt: 'Amazon Web Services' },
                { url: '/', txt: 'Windows Azure' },
                { url: '/', txt: 'DevOps' },
                { url: '/', txt: 'Google App Services' },
                { url: '/', txt: 'Cassandra' },
            ],
            dropItem11: [
                { url: '/', txt: '3rd Party Integration' },
                { url: '/', txt: 'Content Management' },
            ],
        }
    }
    render() {
        const { dropItem1, dropItem2, dropItem3, dropItem4, dropItem5, dropItem6, dropItem7, dropItem8, dropItem9, dropItem10, dropItem11 } = this.state;
        return (
            <header className="header_absolute">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <MyLogo
                            link="/#"
                            myclass="Navbar-brand"
                            img={sitelogo}
                            alt="DIT Logo"
                            imgclass="img-fluid"
                        />
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <button className="nav-link" id="navbarDropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false">Services</button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Custom Apps
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem1} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                UI/UX
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem2} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Digital Marketing
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem3} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Cyber Security
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem4} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Testing
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem5} dropClass={"dropdown-item"} />
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <button className="nav-link" id="navbarDropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Technology
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                App Development
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem6} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Web Development
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem7} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Frontend
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem8} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                ECM
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem9} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Cloud
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem10} dropClass={"dropdown-item"} />
                                        </li>

                                        <li className="dropend">
                                            <button className="nav-link dropdown-toggle" id="" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Other Services
                                            </button>
                                            <MyDropDownMenu dropItem={dropItem11} dropClass={"dropdown-item"} />
                                        </li>

                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <button className="nav-link " id="navbarDropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Insights
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item insight-first" to="/">Latest Blogs</Link></li>
                                        <li><Link className="dropdown-item" to="/">Infographic</Link></li>
                                        <li><Link className="dropdown-item" to="/">Videos</Link></li>
                                        <li><Link className="dropdown-item" to="/">Case Study</Link></li>
                                        <li><Link className="dropdown-item" to="/">Press Release</Link></li>
                                        <li><Link className="dropdown-item insight-last" to="/">Slideshare PPTs</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">About</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Career</Link>
                                </li>
                            </ul>
                            <Link to="/" className="common_btn btn_hover bg_red txt_white">Contact Us</Link>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;