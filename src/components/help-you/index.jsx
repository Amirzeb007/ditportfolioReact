import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactusBtn = () => {
    return <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;
}

function HelpYou(props) {
    return (
        <>
            <section className='gradient py-5'>
                <Container>
                    <Row>
                        <Col>
                            <h4 className="sec_hd txt_white fw-normal">
                                How can we <font className="fw-bold txt_white">Help You?</font>
                                <span>Learn more about what we do</span>
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center align-items-center gap-3">
                                <p className="fw-bold desc">Learn how we can transform your business</p><ContactusBtn />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default HelpYou;