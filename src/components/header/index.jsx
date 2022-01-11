import React, { useState } from 'react';
import { sitelogo } from '../../assets/img';
import { Link } from 'react-router-dom';
import MyLogo from '../site-logo';
import Nav from './navigation';
import { Container } from 'react-bootstrap';

function Header() {
    const topNavigation = [
        {
            txt: 'Services',
            dropdown: [
                {
                    txt: 'Custom Apps',
                    dropdown: [
                        { url: '/services/mobile-app-development', txt: 'Mobile App Development' },
                        { url: '/services/website-developemnt', txt: 'Website Devevelopment' },
                        { url: '/services/wordpress-development', txt: 'WordPress Development' },
                        { url: '/services/responsive-website-design', txt: 'Responsive Web Design' },
                        { url: '/services/blockchain-development', txt: 'Blockchain Development' },
                    ]
                },
                {
                    txt: 'UI/UX',
                    dropdown: [
                        { url: '/not-found', txt: 'Creative & Intelligent Designs' },
                        { url: '/services/graphic-designing', txt: 'Graphics Designing' },
                        { url: '/services/logo-designing', txt: 'Logo Designing' },
                        { url: '/services/web-&-mobile', txt: 'Web & Mobile' },
                        { url: '/services/ui-wireframing', txt: 'UI Wireframing' },
                        { url: '/services/ideation-elaboration', txt: 'Ideation Elaboration' },
                    ]
                },
                {
                    txt: 'Digital Marketing',
                    dropdown: [
                        { url: '/not-found', txt: 'Smart Insights' },
                        { url: '/services/ppc', txt: 'PPC' },
                        { url: '/services/seo', txt: 'SEO' },
                        { url: '/services/email-marketing', txt: 'Email Marketing' },
                        { url: '/not-found', txt: 'Social Media Marketing' },
                        { url: '/not-found', txt: 'Online Marketing' },
                    ],
                },
                {
                    txt: 'Cyber Security',
                    dropdown: [
                        { url: '/not-found', txt: 'We’re Security Aware!' },
                        { url: '/not-found', txt: 'Data Security' },
                        { url: '/not-found', txt: 'Website Security' },
                        { url: '/not-found', txt: 'Network & IT Security' },
                        { url: '/not-found', txt: 'Cloud Security' },
                        { url: '/not-found', txt: 'Virus Testing & Solution' },
                    ],
                },
                {
                    txt: 'Testing',
                    dropdown: [
                        { url: '/not-found', txt: 'Quality Assurance' },
                        { url: '/not-found', txt: 'Testing Services' },
                        { url: '/not-found', txt: 'Performance Testing' },
                        { url: '/not-found', txt: 'Mobile Testing' },
                        { url: '/not-found', txt: 'Test Automation' },
                        { url: '/not-found', txt: 'Software Testing' },
                    ],
                }
            ],
        },
        {
            txt: 'Technology',
            dropdown: [
                {
                    txt: 'App Development',
                    dropdown: [
                        { url: '/not-found', txt: 'iOS App Development' },
                        { url: '/not-found', txt: 'Android Development' },
                        { url: '/not-found', txt: 'HTML5 Development' },
                        { url: '/not-found', txt: 'React Native App' },
                        { url: '/not-found', txt: 'Social Media Marketing' },
                        { url: '/not-found', txt: 'Xamarin Development' },
                    ],
                },
                {
                    txt: 'Web Development',
                    dropdown: [
                        { url: '/not-found', txt: 'Java/J2EE' },
                        { url: '/not-found', txt: '.Net' },
                        { url: '/not-found', txt: 'PHP' },
                        { url: '/not-found', txt: 'Mean Stack' },
                        { url: '/not-found', txt: 'Social Media Marketing' },
                        { url: '/not-found', txt: 'Ruby on Rails' },
                    ],
                },
                {
                    txt: 'Frontend',
                    dropdown: [
                        { url: '/not-found', txt: 'Angular JS' },
                        { url: '/not-found', txt: 'ReactJS Development' },
                        { url: '/not-found', txt: 'Bootstrap' },
                        { url: '/not-found', txt: 'Ember.js' },
                        { url: '/not-found', txt: 'Knowout.js' },
                    ],
                },
                {
                    txt: 'ECM',
                    dropdown: [
                        { url: '/not-found', txt: 'Alfresco' },
                        { url: '/not-found', txt: 'Liferay' },
                        { url: '/not-found', txt: 'SharePoint' },
                        { url: '/not-found', txt: 'Ektron' },
                        { url: '/not-found', txt: 'WordPress' },
                    ],
                },
                {
                    txt: 'Cloud',
                    dropdown: [
                        { url: '/not-found', txt: 'Amazon Web Services' },
                        { url: '/not-found', txt: 'Windows Azure' },
                        { url: '/not-found', txt: 'DevOps' },
                        { url: '/not-found', txt: 'Google App Services' },
                        { url: '/not-found', txt: 'Cassandra' },
                    ],
                },
                {
                    txt: 'Other Services',
                    dropdown: [
                        { url: '/not-found', txt: '3rd Party Integration' },
                        { url: '/not-found', txt: 'Content Management' },
                    ],
                },
            ],
        },
        {
            txt: 'Insights',
            dropdown: [
                { url: '/not-found', txt: 'Latest Blogs' },
                { url: '/not-found', txt: 'Infographic' },
                { url: '/not-found', txt: 'Videos' },
                { url: '/not-found', txt: 'Case Study' },
                { url: '/not-found', txt: 'Press Release' },
                { url: '/not-found', txt: 'Slidesare PPTs' },
            ],
        },
        { url: '/about', txt: 'About' },
        { url: '/portfolio', txt: 'Portfolio' },
        { url: '/career', txt: 'Career' },
    ]

    const [menuHidden, setmenuHidden] = useState("true");

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <Container>
                    <MyLogo
                        link="/#"
                        myclass="navbar-brand"
                        img={sitelogo}
                        alt="DIT Logo"
                        imgclass="img-fluid"
                    />
                    <span className="navbar-toggler" onClick={() => setmenuHidden(!menuHidden)}>
                        <span className="fa fa-bars"></span>
                    </span>
                    <div className="navbar_collapse" data-hidden={menuHidden}>
                        <span className="fa fa-times" onClick={() => setmenuHidden(!menuHidden)}></span>
                        <Nav
                            navItem={topNavigation}
                        />
                        <Link to="/contact-us" className="common_btn btn_hover bg_red txt_white">Contact Us</Link>
                    </div>
                </Container>
            </nav>
        </header>
    );
}

export default Header;