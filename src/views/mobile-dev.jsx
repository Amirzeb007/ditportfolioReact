import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import MyContactForm from '../components/contact_form_sec/contact-form';
import {
    mobile_dev_banner,
    mobile_mock1,
    mobile_mock2,
    html5_img,
    xamarian_logo
} from '../assets/img';

function MobileAppPage() {

    useEffect(() => {
        document.title = "Mobile Development | DiscoverItech"
    }, []);

    const bannerImg = mobile_dev_banner;
    const contactUS_btn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;
    const contactUS_btn_white = <Link to="/contact-us" className="common_btn btn_hover txt_red bg-light">Contact Us</Link>;
    return (
        <>
            <Header />
            <Banner
                bannerImg={bannerImg}
                bannerHd="Application"
                bannerhdSpan="Development"
                bannerCaps="We are one of the top app development companies providing the custom mobile app development service. At DiscoveriTech, fore the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android phones. As an expert in mobile application develpopment services, we can create the right app that will meet all your business and industry needs."
            />
            <SectionOne
                colhd="iOS App"
                colhdSpan="Development Services"
                para="As well-known iOS Mobile Applications Development Company, we offer expertise in creating feature-rich native mobile applications for a user-friendly experience an iOS devices. We have dedicated iOS app development team, who can enable your business to maximize brand loyalty and boost your company's revenue by creating reliable and purpose-built iPhone and iPad apps."
                img={mobile_mock2}
                conBtn={contactUS_btn}
                extraClasscol1="col-lg-6 col-md-12"
                extraClasscol2="align-self-baseline bkg col-lg-6 col-md-12"
                secClass="bg_top"
            />
            <SectionOne
                colhd="HTML5 App"
                colhdSpan="Development Services"
                para="DiscoveriTech provides Android app development services for clients who want to reach more than two billion monthly active users on the Android platform. We have expert app developers, who can build different types of custom Android app for multiple devices. Our developed mobile apps are business focused and guarantee interactive user experience thanks to the carefully crafted designs. We build fully responsive and user-friendly apps for the different screen sizes in use by the large landscape of Android devices.Our team is active 24/7 for your answering your query and android app development consultancy."
                img={html5_img}
                conBtn={contactUS_btn}
                extraClasscol1="align-self-center col-lg-4 col-md-5 order-1"
                extraClasscol2="align-self-center col-lg-8 col-md-7"
                secClass="small_img"
            />
            <SectionOne
                colhd="iOS App"
                colhdSpan="Development Services"
                para="DiscoveriTech provides Android app development services for clients who want to reach more than two billion monthly active users on the Android platform. We have expert app developers, who can build different types of custom Android app for multiple devices. Our developed mobile apps are business focused and guarantee interactive user experience thanks to the carefully crafted designs. We build fully responsive and user-friendly apps for the different screen sizes in use by the large landscape of Android devices.Our team is active 24/7 for your answering your query and android app development consultancy."
                img={mobile_mock1}
                conBtn={contactUS_btn}
                extraClasscol1="col-lg-6 col-md-12"
                extraClasscol2="align-self-end col-lg-6 col-md-12 bkg2"
                secClass="bg_bottom"
            />
            <SectionOne
                colhd="Xamarin App"
                colhdSpan="Development"
                para="DiscoveriTech provides Android app development services for clients who want to reach more than two billion monthly active users on the Android platform. We have expert app developers, who can build different types of custom Android app for multiple devices. Our developed mobile apps are business focused and guarantee interactive user experience thanks to the carefully crafted designs. We build fully responsive and user-friendly apps for the different screen sizes in use by the large landscape of Android devices.Our team is active 24/7 for your answering your query and android app development consultancy."
                img={xamarian_logo}
                conBtn={contactUS_btn_white}
                extraClasscol1="align-self-center col-lg-4 col-md-5 order-1"
                extraClasscol2="align-self-center col-lg-8 col-md-7"
                secClass="gradient small_img"
            />
            <section className="dev_services sec_pad">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="sec_hd mb-5">
                                How Can We Help You?
                            </h4>
                            <MyContactForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default MobileAppPage;

function SectionOne(props) {
    return (
        <section className={props.secClass ? props.secClass + ' dev_services sec_pad' : 'dev_services sec_pad'}>
            <div className="container">
                <div className="row">
                    <div className={props.extraClasscol1 ? props.extraClasscol1 : ''}>
                        <div className="img_wrapper text-center">
                            <img src={props.img} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className={props.extraClasscol2 ? props.extraClasscol2 : ' '}>
                        <div className="col_hd">
                            <h4>{props.colhd} {props.colhdSpan &&
                                <span className="txt_red">{props.colhdSpan}</span>
                            }
                            </h4>
                            <p className="desc">
                                {props.para}
                            </p>
                            {props.conBtn}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
