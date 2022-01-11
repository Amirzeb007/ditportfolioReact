import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function AboutSec(props) {
    return (
        <section className="home_about_sec sec_pad">
            <Container>
                <Row>
                    <Col>
                        <h2 className="sec_hd txt_black">
                            {props.SecHd}
                            {props.SecHdSpan &&
                                <span>
                                    {props.SecHdSpan}
                                </span>
                            }
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="section_img text-center">
                            <img src={props.Colimg} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="align-self-center">
                        <h3 className="sub_hd">
                            {props.Colhd}
                        </h3>
                        <p className="desc" dangerouslySetInnerHTML={{ __html: props.Colpara }} />
                        {props.ColBtn && props.ColBtn}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutSec;

