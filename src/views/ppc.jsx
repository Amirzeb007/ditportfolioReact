import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    ppc_banner,
    target_aud,
    sales_gen,
    graphic_research,
} from '../assets/img';
import HelpYou from '../components/help-you';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SeoPage() {
    useEffect(() => {
        document.title = "Pay Per Click ( PPC ) | DiscoverItech"
    }, []);

    const cards = [
        { hd: 'Keyword Research', para: 'PPC keyword research strategy let you know the current trending keywords in the online marketing domain. We have dedicated a team to research the right and needy keywords for your business.' },
        { hd: 'Account Setup', para: 'Discover iTech offers one-time PPC setups to start your business’s campaign on the right foot. We implement the necessary campaign settings that will generate leads for your business.' },
        { hd: 'Compaign Launch', para: 'After account setup, it’s time to get the nuts. Campaign launch means showing your advertising to your selected and targeted audience and provide traffic or generate your sales.' },
        { hd: 'Analysis & Feedback', para: 'Finally, its time to monitor the advertising campaigns. Professioanl analyzing and reporting always benefits more. We have an expert team to analyze the campaigns and the feedback.' },
    ];

    const cards2 = [
        { img: sales_gen, hd: 'Sales Generation', para: 'Businesses can’t just rely on their existing customers to fuel growth, so there’s a constant need for more leads.' },
        { img: target_aud, hd: 'Target Audience', para: 'The definition of audience targeting is exactly what you’d expect: It’s the practice of using data to segment consumers.' },
        { img: graphic_research, hd: 'Increase Business', para: 'We could have increased this list to implementing and able to focus on the main ones that will have the biggest impact.' },
    ];

    const Contactbtn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;

    return (
        <>
            <Banner
                bannerImg={ppc_banner}
                bannerHd="Pay Per"
                bannerhdSpan="Click"
                bannerCaps="PPC (Pay Per Click) is a valuable part of any marketing effort both for the exposure to your target audience."
                bannerBtn={Contactbtn}
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Pay Per Click <font className='fw-bold txt_red'>Services</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mb-5 mt-3">
                                PPC (Pay-Per-Click) advertising is a payment option given by various online advertising platforms where the advertisers pay when the users click on their ads. Numerous online marketing platforms offer PPC advertising, and is the most popular among them is Google Ads. A PPC campaign offers more control over results than organic Search Engine Optimization and social media marketing platforms. And a well designed and managed PPC campaign can become the best ROI generating tool for any business.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal mb-5">
                                Why <font className='fw-bold txt_red'>PPC?</font>
                            </h2>
                            <div className="flex_wrapper">
                                <Col2Cards
                                    cards={cards}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section className='expertise_sec we_do_sec sec_pad bg_white'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                What do <font className='fw-bold txt_red'>we do?</font>
                            </h2>
                            <p className="desc text-center mt-3 mb-5 mxwidth_75 mx-auto">
                                Research indicates that searchers click on paid search ads more often than any other form of digital advertising. This means that people really don’t mind being advertised to, provided that the products and services advertised actually fit the searcher’s needs. Advertisers are offered a unique means of putting their message in front of an audience who is actively and specifically seeking out their product.
                            </p>
                            <div className="flex_wrapper text-center">
                                <Col2Cards
                                    cards={cards2}
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

export default SeoPage;