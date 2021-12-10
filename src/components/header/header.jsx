import React from 'react';
import { sitelogo } from '../../assets/img';
import { Link } from 'react-router-dom';
import MyLogo from '../site-logo';
import Nav from './navigation';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topNavigation: [
                {
                    url: '/services',
                    txt: 'Services',
                    dropdown1: [
                        {
                            url: '/', txt: 'Custom Apps',
                            dropdown2: [
                                { url: '/services/mobile-app-development', txt: 'Mobile App Development' },
                                { url: '/services/website-developemnt', txt: 'Website Devevelopment' },
                                { url: '/', txt: 'WordPress Development' },
                                { url: '/', txt: 'Responsive Web Design' },
                                { url: '/', txt: 'Blockchain Development' },
                            ]
                        },
                        {
                            url: '/', txt: 'UI/UX',
                            dropdown2: [
                                { url: '/', txt: 'Creative & Intelligent Designs' },
                                { url: '/', txt: 'Graphics Designing' },
                                { url: '/', txt: 'Logo Designing' },
                                { url: '/', txt: 'Web & Mobile' },
                                { url: '/', txt: 'UI Wireframing' },
                                { url: '/', txt: 'Ideation Elaboration' },
                            ]
                        },
                        {
                            url: '/', txt: 'Digital Marketing',
                            dropdown2: [
                                { url: '/', txt: 'Smart Insights' },
                                { url: '/', txt: 'PPC' },
                                { url: '/', txt: 'SEO' },
                                { url: '/', txt: 'Email Marketing' },
                                { url: '/', txt: 'Social Media Marketing' },
                                { url: '/', txt: 'Online Marketing' },
                            ],
                        },
                        {
                            url: '/', txt: 'Cyber Security',
                            dropdown2: [
                                { url: '/', txt: 'We’re Security Aware!' },
                                { url: '/', txt: 'Data Security' },
                                { url: '/', txt: 'Website Security' },
                                { url: '/', txt: 'Network & IT Security' },
                                { url: '/', txt: 'Cloud Security' },
                                { url: '/', txt: 'Virus Testing & Solution' },
                            ],
                        },
                        {
                            url: '/', txt: 'Testing',
                            dropdown2: [
                                { url: '/', txt: 'Quality Assurance' },
                                { url: '/', txt: 'Testing Services' },
                                { url: '/', txt: 'Performance Testing' },
                                { url: '/', txt: 'Mobile Testing' },
                                { url: '/', txt: 'Test Automation' },
                                { url: '/', txt: 'Software Testing' },
                            ],
                        }
                    ],
                },
                {
                    url: '/technology', txt: 'Technology',
                    dropdown1: [
                        {
                            url: '/', txt: 'App Development',
                            dropdown2: [
                                { url: '/', txt: 'iOS App Development' },
                                { url: '/', txt: 'Android Development' },
                                { url: '/', txt: 'HTML5 Development' },
                                { url: '/', txt: 'React Native App' },
                                { url: '/', txt: 'Social Media Marketing' },
                                { url: '/', txt: 'Xamarin Development' },
                            ],
                        },
                        {
                            url: '/', txt: 'Web Development',
                            dropdown2: [
                                { url: '/', txt: 'Java/J2EE' },
                                { url: '/', txt: '.Net' },
                                { url: '/', txt: 'PHP' },
                                { url: '/', txt: 'Mean Stack' },
                                { url: '/', txt: 'Social Media Marketing' },
                                { url: '/', txt: 'Ruby on Rails' },
                            ],
                        },
                        {
                            url: '/', txt: 'Frontend',
                            dropdown2: [
                                { url: '/', txt: 'Angular JS' },
                                { url: '/', txt: 'ReactJS Development' },
                                { url: '/', txt: 'Bootstrap' },
                                { url: '/', txt: 'Ember.js' },
                                { url: '/', txt: 'Knowout.js' },
                            ],
                        },
                        {
                            url: '/', txt: 'ECM',
                            dropdown2: [
                                { url: '/', txt: 'Alfresco' },
                                { url: '/', txt: 'Liferay' },
                                { url: '/', txt: 'SharePoint' },
                                { url: '/', txt: 'Ektron' },
                                { url: '/', txt: 'WordPress' },
                            ],
                        },
                        {
                            url: '/', txt: 'Cloud',
                            dropdown2: [
                                { url: '/', txt: 'Amazon Web Services' },
                                { url: '/', txt: 'Windows Azure' },
                                { url: '/', txt: 'DevOps' },
                                { url: '/', txt: 'Google App Services' },
                                { url: '/', txt: 'Cassandra' },
                            ],
                        },
                        {
                            url: '/', txt: 'Other Services',
                            dropdown2: [
                                { url: '/', txt: '3rd Party Integration' },
                                { url: '/', txt: 'Content Management' },
                            ],
                        },
                    ],
                },
                {
                    url: '/insights', txt: 'Insights',
                    dropdown1: [
                        { url: '/', txt: 'Latest Blogs' },
                        { url: '/', txt: 'Infographic' },
                        { url: '/', txt: 'Videos' },
                        { url: '/', txt: 'Case Study' },
                        { url: '/', txt: 'Press Release' },
                        { url: '/', txt: 'Slidesare PPTs' },
                    ],
                },
                { url: '/about', txt: 'About' },
                { url: '/portfolio', txt: 'Portfolio' },
                { url: '/career', txt: 'Career' },
            ]
        }
    }

    render() {
        return (
            <header className="header_absolute">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <MyLogo
                            link="/#"
                            myclass="navbar-brand"
                            img={sitelogo}
                            alt="DIT Logo"
                            imgclass="img-fluid"
                        />
                        <span className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span>
                        </span>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Nav
                                navItem={this.state.topNavigation}
                            />
                            <Link to="/contact-us" className="common_btn btn_hover bg_red txt_white">Contact Us</Link>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;