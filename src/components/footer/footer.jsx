import React from 'react';
import { Link } from 'react-router-dom';
import { envelope, mobile, sitelogo2 } from '../../assets/img';
import MyLogo from '../site-logo';
import MyColumns from './cols';
import SocialIcons from './socialicon';

function Footer() {
    const column1 = [
        {
            link: '/',
            txt: 'App & Web'
        },
        {
            link: '/',
            txt: 'Devops Consulting'
        },
        {
            link: '/',
            txt: 'Online Marketing'
        },
        {
            link: '/',
            txt: 'Social Media'
        },
        {
            link: '/',
            txt: 'Testing Services'
        },
        {
            link: '/',
            txt: '3rd Party Integration'
        },
    ]
    const column2 = [
        {
            link: '/',
            txt: 'App Development'
        },
        {
            link: '/',
            txt: 'Bootstrap'
        },
        {
            link: '/',
            txt: 'Graphics'
        },
        {
            link: '/',
            txt: 'KnockoutJS'
        },
        {
            link: '/',
            txt: 'React Native'
        },
        {
            link: '/',
            txt: 'WordPress'
        },
    ]
    const column3 = [
        {
            link: '/',
            txt: 'AngularJS'
        },
        {
            link: '/',
            txt: 'Blockchain'
        },
        {
            link: '/',
            txt: 'DevOps'
        },
        {
            link: '/',
            txt: 'Force.Com'
        },
        {
            link: '/',
            txt: 'UI Wireframing'
        },
        {
            link: '/',
            txt: 'Xamarin'
        },
    ]
    const column4 = [
        {
            link: '/',
            txt: 'Home'
        },
        {
            link: '/',
            txt: 'Company'
        },
        {
            link: '/',
            txt: 'Partners'
        },
        {
            link: '/',
            txt: 'Portfolio'
        },
        {
            link: '/',
            txt: 'Blog'
        },
        {
            link: '/',
            txt: 'Contact Us'
        },
    ]
    const socialItems = [
        {
            link: '/',
            classes: 'facebook fa fa-facebook-f'
        },
        {
            link: '/',
            classes: 'twitter fa fa-twitter'
        },
        {
            link: '/',
            classes: 'linkedin fa fa-linkedin'
        },
        {
            link: '/',
            classes: 'instagram fa fa-instagram'
        },
        {
            link: '/',
            classes: 'behance fa fa-behance'
        },
        {
            link: '/',
            classes: 'dribble fa fa-dribbble'
        },
        {
            link: '/',
            classes: 'pinterest fa fa-pinterest-p'
        },
        {
            link: '/',
            classes: 'flickr fa fa-flickr'
        },
        {
            link: '/',
            classes: 'vine fa fa-vine'
        },
        {
            link: '/',
            classes: 'reddit fa fa-reddit-alien'
        },
        {
            link: '/',
            classes: 'slideshare fa fa-slideshare'
        },
        {
            link: '/',
            classes: 'wordpress fa fa-wordpress'
        },
        {
            link: '/',
            classes: 'tumblr fa fa-tumblr'
        },
        {
            link: '/',
            classes: 'youtube fa fa-youtube'
        },
    ]
    return (
        <footer>
            <div className="container colphon">
                <div className="row">

                    <div className="col-lg-4 col-md-5 col-sm-12">
                        <div className="inner-wrapper">
                            <ul className="info_ul">
                                <li>
                                    <div className="foo_logo">
                                        <MyLogo
                                            link="/"
                                            myclass=""
                                            img={sitelogo2}
                                            alt="DIT Logo"
                                            imgclass="img-fluid"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className="info_wrapper">
                                        <div className="img_wrapper">
                                            <img src={mobile} className="img-fluid" alt="" />
                                        </div>
                                        <span>
                                            734-697-2907 <br />
                                            843-971-1906
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="info_wrapper">
                                        <div className="img_wrapper">
                                            <img src={envelope} className="img-fluid" alt="" />
                                        </div>
                                        <span>hello @discoveritech.com</span>
                                    </div>
                                </li>
                                <li>
                                    <h5>Contact Us</h5>
                                    <form action="">
                                        <div className="input_group">
                                            <input type="text" className="form-control" placeholder="Email" aria-label="Email"
                                                aria-describedby="button-addon2" />
                                            <input type="button" value="Go" />
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 col-sm-12">
                        <div className="footer_navigation">
                            <MyColumns
                                hd="Services"
                                navitems={column1}
                            />
                            <MyColumns
                                hd="Technologies"
                                navitems={column2}
                            />
                            <MyColumns
                                hd="Trending"
                                navitems={column3}
                            />
                            <MyColumns
                                hd="Quick Links"
                                navitems={column4}
                            />
                        </div>
                        <div className="social-navigation">
                            <SocialIcons
                                items={socialItems} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="foo_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright">
                                <p>&copy; Copyrights 2021. All Rights Reserved.</p>
                                <p>
                                    <Link to="/">Privacy Policy</Link> &nbsp; &nbsp; |&nbsp; &nbsp; <Link to="/">Terms & Conditions</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;