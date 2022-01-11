import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    graphic_research,
    e_marketing,
    detailed_icon,
    integration,
} from '../assets/img';
import HelpYou from '../components/help-you';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EMarketingPage() {
    useEffect(() => {
        document.title = "Email Marketing | DiscoverItech"
    }, []);

    const cards = [
        { img: detailed_icon, hd: 'Plan & Research', para: 'Strategy is essential for impacting subscribers and engaging with your email marketing.' },
        { img: integration, hd: 'Integration', para: 'Integration help take email marketing efforts to the next level benefits for customers.' },
        { img: graphic_research, hd: 'Email Analytics', para: 'Set goals, and report progress, you can easily build a repeatable email analytics.' },
    ];

    const Contactbtn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;

    return (
        <>
            <Banner
                bannerImg={e_marketing}
                bannerHd="Email"
                bannerhdSpan="Marketing"
                bannerCaps="Email Marketing enables your agency to work with your clients on an ongoing basis and earn revenue each time you send a campaign on their behalf. Many email marketing tools like Campaign Monitor allow you to markup prices and bill your clients directly to account for the unique services your agency provides."
                bannerBtn={Contactbtn}
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Why do we need <font className='fw-bold txt_red d-block'>Email Marketing?</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3">
                                Email marketing isn’t something marketers do just because they can and it’s easy. The tactic is very effective at helping business owners and consumers stay connected. In fact, consumers often seek out email marketing campaigns from their favorite brands and local stores.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec we_do_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal mb-5">
                                Our <font className='fw-bold txt_red'>Services</font>
                            </h2>
                            <div className="flex_wrapper text-center">
                                <Col2Cards
                                    cards={cards}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <HelpYou />
        </>
    );
}

export default EMarketingPage;