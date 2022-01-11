import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyOwlCarousel from '../owlcaro';

function OurClient(props) {

    const myCards = () => {
        return props.cards.map((item, i) => {
            return (
                <div key={i} className="item">
                    <div className="img_wrapper">
                        <img src={item} alt="" className="img-fluid" />
                    </div>
                </div>
            );
        });
    }
    const options = {
        loop: true,
        center: true,
        margin: 10,
        smartSpeed: 900,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            550: {
                items: 3
            }
        }
    }
    return (
        <section className="our_client_sec">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2 className="sec_hd txt_black">
                            {props.SecHd}
                            {props.SecHdSpan &&
                                <span className="extra_width">
                                    {props.SecHdSpan}
                                </span>
                            }
                        </h2>
                    </Col>
                </Row>
            </Container>
            <Container className="slider_container">
                <Row>
                    <Col>
                        <div className="slider_wrapper">
                            <MyOwlCarousel
                                extraClass={props.classes}
                                myOptions={options}
                                items={myCards()}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default OurClient;