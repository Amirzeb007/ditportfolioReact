import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import { Card2by2 } from '../components/cards';
import {
    skew_person,
    skew_scope,
    skew_setting,
    skew_tags,
    wordpress_banner,
    fullstack,
    plugins,
    setting,
    u_friendly
} from '../assets/img';
import HelpYou from '../components/help-you';

function WordpessDevPage() {

    useEffect(() => {
        document.title = "Wordpress Development | DiscoverItech"
    }, []);

    const bannerImg = wordpress_banner;
    const cards = [
        { img: fullstack, hd: 'Full Stack Expertise', para: 'We are one of the very few who have expertise in professional WordPress platform development.' },
        { img: u_friendly, hd: 'Theme Development', para: 'Our developers can develop a high functional WordPress theme.' },
        { img: plugins, hd: 'Plugin Development', para: 'Custom Plugin Development. Get any plugin development by our expert developers' },
        { img: setting, hd: 'Integration and API Experts', para: 'We can easily do software integration and integrating API development.' },
    ]
    return (
        <>
            <Header />
            <Banner
                bannerImg={bannerImg}
                bannerHd="WordPress"
                bannerhdSpan="Development"
                bannerCaps="We create complete full-stack WordPress web application developers."
            />
            <section className="intro_sec mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="sec_hd txt_black fw-normal">
                                WordPress Web <font className='fw-bold txt_red'>Development Services</font>
                            </h4>
                            <p className="desc text-center mt-3">
                                Discover iTech is a professional WordPress website development studio that has designed and developed hundreds of custom WordPress powered websites. We specialize in developing professional WordPress websites that are attractive, functional, and target our client’s audience. We offer top quality work, latest web solutions, free support, and freelance rates to our valuable customers. We have a professional and experienced team, who can develop a WordPress website, develop a WordPress Theme and WordPress Plugin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Card2by2
                hd="There are many reasons why our clients come to us again and again"
                cards={cards}
            />
            <PrcoessSec />
            <HelpYou />
            <Footer />
        </>
    );
}

function PrcoessSec(props) {
    return (
        <section className='sec_pad process_sec'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h4 className="sec_hd txt_black fw-normal">
                            Our Web Application <font className='fw-bold txt_red'>Development Process</font>
                        </h4>
                        <div className="styled_flex">
                            <div className="box">
                                <span className='nmbr'>01</span>
                                <div className="img_wrapper">
                                    <div className="wrapper">
                                        <img src={skew_scope} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="caps">
                                    <h5>Research</h5>
                                    <p>We prepare a complete application readmap.</p>
                                </div>
                            </div>
                            <div className="box">
                                <span className='nmbr'>02</span>
                                <div className="img_wrapper">
                                    <div className="wrapper">
                                        <img src={skew_person} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="caps">
                                    <h5>User Experience</h5>
                                    <p>Expert User, Experience Engineering</p>
                                </div>
                            </div>
                            <div className="box">
                                <span className='nmbr'>03</span>
                                <div className="img_wrapper">
                                    <div className="wrapper">
                                        <img src={skew_tags} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="caps">
                                    <h5>Development</h5>
                                    <p>Minimalistic code with flexible architecture</p>
                                </div>
                            </div>
                            <div className="box">
                                <span className='nmbr'>04</span>
                                <div className="img_wrapper">
                                    <div className="wrapper">
                                        <img src={skew_setting} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="caps">
                                    <h5>Testing</h5>
                                    <p>Test performance in every environment</p>
                                </div>
                            </div>
                            <div className="box">
                                <span className='nmbr'>05</span>
                                <div className="img_wrapper">
                                    <div className="wrapper">
                                        <img src={skew_tags} alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="caps">
                                    <h5>Iterate</h5>
                                    <p>Time to make the app even better</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WordpessDevPage;