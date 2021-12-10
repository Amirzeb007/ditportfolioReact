import React, { Fragment } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Banner from '../components/banner/banner';
import {
    icon_api,
    icon_levels,
    icon_responsive,
    icon_tags,
    web_dev_banner
} from '../assets/img';


class WebDevPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        document.title = "Webiste Development | DiscoverItech"
    }

    render() {
        const bannerImg = web_dev_banner;
        // const contactUS_btn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;
        // const contactUS_btn_white = <Link to="/contact-us" className="common_btn btn_hover txt_red bg-light">Contact Us</Link>;

        return (
            <Fragment>
                <Header />
                <Banner
                    bannerImg={bannerImg}
                    bannerHd="Web"
                    bannerhdSpan="Development"
                    bannerCaps="We create websites and applications that provide effective solutions for your goals. We have just awesome web development services! Our professional ewb developers provide web application development services to our valuable clients. DiscoveriTech offers a variety of website design and development services, from a simple corporate website to custom e-commerce. We are intranet experiences using the latest and proven web technologies."
                />
                <Section1 />
                <Footer />
            </Fragment>
        );
    }
}

function Section1(pros) {
    return (
        <section className='expertise_sec py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="small_hd">There are many reasons why our clients come to us again and again</h5>
                        <div className="flex_wrapper">
                            <div className="box">
                                <div className="img_Wrapper">
                                    <img src={icon_tags} alt="" className="img-fluid" />
                                </div>
                                <div className="cap">
                                    <h4>Full Stack Expertise</h4>
                                    <p>
                                        We are one of the very few who have expertise in all of the latest technologies of all major platforms.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img_Wrapper">
                                    <img src={icon_responsive} alt="" className="img-fluid" />
                                </div>
                                <div className="cap">
                                    <h4>Device Agnostic Solutions</h4>
                                    <p>
                                        All of our Solutions are mobile-ready and tested on all major mobile devices.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img_Wrapper">
                                    <img src={icon_api} alt="" className="img-fluid" />
                                </div>
                                <div className="cap">
                                    <h4>Integration and API Exerts</h4>
                                    <p>
                                        We have a penchant of carrying out even the most difficult software integration and integration API development.
                                    </p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="img_Wrapper">
                                    <img src={icon_levels} alt="" className="img-fluid" />
                                </div>
                                <div className="cap">
                                    <h4>Scalibility and Flexibilty</h4>
                                    <p>
                                        Using micro-service architecture, we create solutions that is easily extensible and scalable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default WebDevPage;