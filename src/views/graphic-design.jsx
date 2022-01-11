import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    graphic_banner,
    sketching_design,
    refining_design,
    graphic_research,
    brief,
    process_timeline
} from '../assets/img';
import { Container, Col, Row } from 'react-bootstrap';

function GraphicDesignPage() {
    useEffect(() => {
        document.title = "Graphic Designing | DiscoverItech"
    }, []);

    const cards = [
        { img: sketching_design, hd: 'The Creative Brief', para: 'It helps the designer learn more about the needs of the client.' },
        { img: refining_design, hd: 'Graphic Research', para: 'Deep research for the graphics design, which is going to be designed.' },
        { img: graphic_research, hd: 'Sketching the Design', para: 'Now it’s time to build on your prioritized ideas and start sketching.' },
        { img: brief, hd: 'Refining Design', para: 'Refining the design according to client requirement and fix the changing.' },
    ];

    return (
        <>
            <Banner
                bannerImg={graphic_banner}
                bannerHd=" Graphics"
                bannerhdSpan="Designing"
                bannerCaps="We have creative and professional Graphic Designer team."
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Graphic <font className='fw-bold txt_red'>Designing Services</font>
                            </h2>
                            <p className="desc mxwidth_75 mx-auto text-center mt-3">
                                Graphics tells the people about you and your business. You might not have the biggest business out there in the market, but it really does leave a very good impression on the minds of the consumer/customer/client/audience. Keep an impression on audience by your creative graphics. Let your creative graphics be your identity and cause of business progress. Let it say positive things about your business.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h5 className="small_hd">There are many reasons why our clients come to us again and again</h5>
                            <div className="flex_wrapper">
                                <Col2Cards
                                    cards={cards}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section className='our_process_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h4 className="sec_hd txt_black fw-normal">
                                Our <font className='fw-bold txt_red'>Process</font>
                            </h4>
                            <div className="img_wrapper mt-5">
                                <img src={process_timeline} alt="" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default GraphicDesignPage;