import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    envelope,
    location,
    mobile,
} from '../../assets/img';
import MyContactForm from './contact-form';

function ContactFormSec(props) {
    return (
        <section className={props.extraClass ? 'contact_sec sec_pad top_padd' : 'contact_sec sec_pad'}>
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2 className="sec_hd txt_black">
                            {props.sechd}
                            {props.sechdSpan &&
                                <span>
                                    {props.sechdSpan}
                                </span>
                            }
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Container className="full_width">
                <div className="row">
                    <Col lg={4} md={12} className="align-self-center">
                        <div className="contact_info">
                            <ul>
                                <li>
                                    <div className="icon_wrapper">
                                        <img src={location} alt="" className="img-fluid" />
                                    </div>
                                    <div className="info_wrapper">
                                        <h4>Address</h4>
                                        <p className="desc">
                                            3556 Fartford Way Vig, Mount <br />
                                            Pleasant, SC, <br />
                                            29466, Australia.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon_wrapper">
                                        <img src={mobile} alt="" className="img-fluid" />
                                    </div>
                                    <div className="info_wrapper">
                                        <h4>Call for queries</h4>
                                        <p className="desc">
                                            734-697-2907 <br />
                                            843-971-1906
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon_wrapper">
                                        <img src={envelope} alt="" className="img-fluid" />
                                    </div>
                                    <div className="info_wrapper">
                                        <h4>Email Us</h4>
                                        <p className="desc">hello@discoveritech.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8} md={12}>
                        <MyContactForm
                            hd="Say Hi"
                        />
                    </Col>
                </div>
            </Container>
        </section >
    );
}

export default ContactFormSec;