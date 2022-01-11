import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    mobile_mock3,
    wireframing_banner,
    wireframing_icon,
    ui_testing,
    exp_strategy,
} from '../assets/img';
import HelpYou from '../components/help-you';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UiWireframingPage() {

    useEffect(() => {
        document.title = "UI Wireframing | DiscoverItech"
    }, []);

    const cards = [
        { img: wireframing_icon, hd: 'Wireframing', para: 'A wireframe has a simple and clean layout for your app.' },
        { img: exp_strategy, hd: 'User Experience Strategy', para: 'User experience (UX) is an anchor of successful design.' },
        { img: ui_testing, hd: 'UI Testing', para: 'Testing method used to evaluate how easy a website is to use.' },
    ];

    const LearnMore = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;

    return (
        <>
            <Banner
                bannerImg={wireframing_banner}
                bannerHd="UI"
                bannerhdSpan="Wireframing"
                bannerCaps="The base has to be solid for a successful structure above and a happy story ahead."
                bannerBtn={LearnMore}
            />
            <section className='expertise_sec we_do_sec sec_pad bg_white'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Our <font className='fw-bold txt_red'>Expertise</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3 mb-5">
                                Building the architecture to support awesome apps.
                            </p>
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

export default UiWireframingPage;