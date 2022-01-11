import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    market_analysis,
    resource_plan,
    tec_helps,
    graphic_research,
    logo_design_banner,
    horse_icon,
    exchange_icon,
    wallet_icon,
    tec_centric,
    data_driven,
    phases,
} from '../assets/img';
import HelpYou from '../components/help-you';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LogoDesignPage() {

    useEffect(() => {
        document.title = "Logo Designing | DiscoverItech"
    }, []);

    const cards = [
        { img: tec_helps, hd: 'Technology that Helps', para: 'Technology has taken us from using pens and paper, to working on computers.' },
        { img: graphic_research, hd: 'Planning and Storyboarding', para: 'Creating a storyboard might just sound like an extra step in the process of making a design.' },
        { img: resource_plan, hd: 'Resource Planning', para: 'The list might seem daunting and endless, but it doesn’t have to cost you the earth.' },
        { img: market_analysis, hd: 'Market Analysis', para: 'Analysis provides sources for trends and statistics, market research, & financial ratios.' },
    ];

    const cards2 = [
        { img: tec_centric, hd: 'Technology Centric', para: 'The difficulties that an Organization could face on technology related issues due to its adoption of e-Commerce practice.' },
        { img: data_driven, hd: 'Data Driven', para: 'Progress in an activity is compelled by data, rather than by intuition or by personal experience.' },
        { img: phases, hd: 'Clear Project Phases', para: 'At the root of any successful project is a project manager (PM) worth his or her weight in gold.' },
    ];

    const Contactbtn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;

    return (
        <>
            <Banner
                bannerImg={logo_design_banner}
                bannerHd="Logo"
                bannerhdSpan="Designing"
                bannerCaps="There is Technology behind every Creativity... and Creativity behind every Technology!!"
                bannerBtn={Contactbtn}
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                All About <font className='fw-bold txt_red'>Creative Strategy</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3">
                                Creatives get various demands and design requests from clients, but there’s this exact same request hidden in all of it: “Solve my problem.” In this article, Douglas Davis explains the need to explore the words behind the pictures and discusses the business objectives involved in creative problem solving. Your creative strategy provides the guiding principles for copywriters and art directors who are assigned to develop the advertisement.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec py-5'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal mb-3">
                                How do <font className='fw-bold txt_red'>we do it?</font>
                            </h2>
                            <h5 className="small_hd">Some stumble upon creativity by chance, rest look for inspiration by thoroughly analyzing user requirements.</h5>
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
                                Key Features of Creative <font className='fw-bold txt_red'>Strategy Services</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3 mb-5">
                                Road from idea to profits is not short. but we help you find the shortest route
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

export default LogoDesignPage;