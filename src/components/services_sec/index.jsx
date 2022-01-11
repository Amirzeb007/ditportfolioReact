import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function OurServicesSec(props) {
    const cards = props.cards;
    return (
        <section className="our_services_sec sec_pad">
            <Container>
                <Row>
                    <Col>
                        <h2 className="sec_hd txt_black">
                            {props.secHd}
                            {props.secHdSpan &&
                                <span>{props.secHdSpan}</span>}
                        </h2>
                        <div className="flex_box">
                            {cards.map((item, i) => {
                                return (
                                    <div key={i} className="secvices_cards">
                                        <h4>{item.cardHD}</h4>
                                        <div className="img-wrapper">
                                            <img src={item.cardImg} alt="" className="img-fluid" />
                                        </div>
                                        <p>{item.cardPara}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default OurServicesSec;