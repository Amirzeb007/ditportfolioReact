import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    idea_abt,
    ideation_banner,
    detailed_icon,
    roadmap,
    brief,
    graphic_research,
    phases,
    refining_design
} from '../assets/img';
import HelpYou from '../components/help-you';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function IdeationElaPage() {
    useEffect(() => {
        document.title = "Ideation Elaboration | DiscoverItech"
    }, []);

    const cards = [
        { img: detailed_icon, hd: 'Detailed Requirement Gathering', para: 'There is concern from many project managers that they are expected to estimate the effort.' },
        { img: roadmap, hd: 'Business Case Roadmap', para: 'We will work with you to create a Business Case to explore the technology options.' },
        { img: brief, hd: 'Project Architecture Development', para: 'The Development of the field of software engineering known as software architecture.' },
    ];

    const cards2 = [
        { img: phases, hd: 'Detailed Discovery Phase', para: 'Discovery Phase is the initial stage of a software project which involves business analysis and requirements elicitation.' },
        { img: refining_design, hd: 'Flexible Product Architecture', para: 'Product architecture is the scheme by which the function of a product is allocated to physical components.' },
        { img: graphic_research, hd: 'Focus on Usability and Design', para: 'Usability is part of the broader term “user experience” and refers to the ease of access and/or use of a product or website.' },
    ];

    const Contactbtn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;

    return (
        <>
            <Banner
                bannerImg={ideation_banner}
                bannerHd=" Ideation"
                bannerhdSpan="Elaboration"
                bannerCaps="Because it's the details that make a big picture GRAND"
                bannerBtn={Contactbtn}
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                About <font className='fw-bold txt_red'>DISCOVERiTECH</font>
                            </h2>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
                        <Col lg={4} md={4} sm={12} className='mb-3 mb-lg-0 mb-md-0'>
                            <div className="img_wrapper text-center">
                                <img src={idea_abt} alt="" style={{ width: '100%', maxWidth: '350px' }} className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <p className="desc">
                                The software to be developed is a web-based process support tool, which guides users through the collaborative idea elaboration process. Ideation is the process where you generate ideas and solutions through sessions such as Sketching, Prototyping, Brainstorming, Brainwriting, Worst Possible Idea, and a wealth of other ideation techniques. The goal of these requirements documentations is the identification and description of the requirements for a tool to support collaborative idea elaboration process.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec we_do_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Our <font className='fw-bold txt_red'>Services</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mt-3 mx-auto mb-5">
                                Innovation starts by ironing out the details. Our services are designed to help organizations get that competitive edge that sets their product apart, both in its design and its technology.
                            </p>
                            <div className="flex_wrapper text-center">
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
                                Our <font className='fw-bold txt_red'>Features</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3 mb-5">
                                We have 10+ years of expertise in helping clients define and develop detailed features of their products. We are specialists in defining, analyzing, documenting, and maintaining product initiatives and systems.
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

export default IdeationElaPage;