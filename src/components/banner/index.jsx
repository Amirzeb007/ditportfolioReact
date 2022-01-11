import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Banner(props) {
    const { extraClass, bannerHd, bannerhdSpan, bannerCaps, bannerBtn, bannerImg } = props;

    return (
        <section className={extraClass ? extraClass : 'banner'}>
            <Container>
                <Row>
                    <Col lg={7} md={6} sm={12} className="align-self-center">
                        <div className="banner_cap">
                            <div className="banner_hd">
                                {bannerHd}{bannerhdSpan &&
                                    <span className="txt_red"> {bannerhdSpan}</span>
                                }
                            </div>
                            <div className="caps">
                                {bannerCaps}
                            </div>
                            {bannerBtn && bannerBtn}
                        </div>
                    </Col>
                    <Col lg={5} md={6} sm={12} className='order-sm-1'>
                        <div className="banner_img text-center">
                            <img src={bannerImg} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;