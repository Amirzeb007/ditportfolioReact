import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import { Card2by2 } from '../components/cards';
import {
    icon_api,
    icon_levels,
    icon_responsive,
    icon_tags,
    skew_person,
    skew_scope,
    skew_setting,
    skew_tags,
    web_dev_banner
} from '../assets/img';
import HelpYou from '../components/help-you';

function WebDevPage() {

    useEffect(() => {
        document.title = "Webiste Development | DiscoverItech"
    }, []);

    const bannerImg = web_dev_banner;
    const cards = [
        { img: icon_tags, hd: 'Full Stack Expertise', para: 'We are one of the very few who have expertise in all of the latest technologies of all major platforms.' },
        { img: icon_responsive, hd: 'Device Agnostic Solutions', para: 'All of our Solutions are mobile-ready and tested on all major mobile devices.' },
        { img: icon_api, hd: 'Integration and API Exerts', para: 'We have a penchant of carrying out even the most difficult software integration and integration API development.' },
        { img: icon_levels, hd: 'Scalibility and Flexibilty', para: 'Using micro-service architecture, we create solutions that is easily extensible and scalable.' },
    ]
    return (
        <>
            <Header />
            <Banner
                bannerImg={bannerImg}
                bannerHd="Web"
                bannerhdSpan="Development"
                bannerCaps="We create websites and applications that provide effective solutions for your goals. We have just awesome web development services! Our professional ewb developers provide web application development services to our valuable clients. DiscoveriTech offers a variety of website design and development services, from a simple corporate website to custom e-commerce. We are intranet experiences using the latest and proven web technologies."
            />
            <Card2by2
                hd="There are many reasons why our clients come to us again and again"
                cards={cards}
            />
            <SectionTwo />
            <HelpYou />
            <Footer />
        </>
    );
}



function SectionTwo(props) {
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WebDevPage;