import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import MyLightroom from '../custom_lightroom';

function PortfolioSec(props) {

    const [url, seturl] = useState(null);

    const OpenLightRoom = (item, i) => {
        return (
            seturl(item)
        );
    }

    return (
        <section className={props.extraClass ? 'portfolio_sec sec_pad top_padd' : 'portfolio_sec sec_pad'}>
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2 className="sec_hd txt_white">
                            {props.portfolioSechd}
                            {props.portfolioSechdSpan && <span>
                                {props.portfolioSechdSpan}
                            </span>}
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="portfolio_tabs_wrapper">
                            <Tab.Container id="portfolio-tab" defaultActiveKey="pills-all-work">
                                <Nav variant="pills" className="flex-row">
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-all-work">{props.tab1}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-website">{props.tab2}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-branding">{props.tab3}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-app">{props.tab4}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="pills-social-media">{props.tab5}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="pills-all-work">
                                        <div className="flex_box">
                                            {
                                                props.portfolioCards.map((item, i) => {
                                                    return (
                                                        <div key={i} className="portfolio_cards">
                                                            <div className="img_wrapper">
                                                                <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                    <img src={item.img} alt="" onClick={() => OpenLightRoom(item.img, i)} className="img-fluid" />
                                                                </div>
                                                                <span>{item.span}</span>
                                                            </div>
                                                            <h5>{item.span}</h5>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pills-website">
                                        <div className="flex_box">
                                            {
                                                props.portfolioCards.map((item, i) => {
                                                    return (
                                                        <div key={i} className="portfolio_cards">
                                                            <div className="img_wrapper">
                                                                <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                    <img src={item.img} alt="" onClick={() => OpenLightRoom(item.img, i)} className="img-fluid" />
                                                                </div>
                                                                <span>{item.span}</span>
                                                            </div>
                                                            <h5>{item.span}</h5>
                                                        </div>);
                                                })
                                            }
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pills-branding">
                                        <div className="flex_box">
                                            {
                                                props.portfolioCards.map((item, i) => {
                                                    return (
                                                        <div key={i} className="portfolio_cards">
                                                            <div className="img_wrapper">
                                                                <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                    <img src={item.img} alt="" onClick={() => OpenLightRoom(item.img, i)} className="img-fluid" />
                                                                </div>
                                                                <span>{item.span}</span>
                                                            </div>
                                                            <h5>{item.span}</h5>
                                                        </div>);
                                                })
                                            }
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pills-app">
                                        <div className="flex_box">
                                            {
                                                props.portfolioCards.map((item, i) => {
                                                    return (
                                                        <div key={i} className="portfolio_cards">
                                                            <div className="img_wrapper">
                                                                <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                    <img src={item.img} alt="" onClick={() => OpenLightRoom(item.img, i)} className="img-fluid" />
                                                                </div>
                                                                <span>{item.span}</span>
                                                            </div>
                                                            <h5>{item.span}</h5>
                                                        </div>);
                                                })
                                            }
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="pills-social-media">
                                        <div className="flex_box">
                                            {
                                                props.portfolioCards.map((item, i) => {
                                                    return (
                                                        <div key={i} className="portfolio_cards">
                                                            <div className="img_wrapper">
                                                                <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                    <img src={item.img} alt="" onClick={() => OpenLightRoom(item.img, i)} className="img-fluid" />
                                                                </div>
                                                                <span>{item.span}</span>
                                                            </div>
                                                            <h5>{item.span}</h5>
                                                        </div>);
                                                })
                                            }
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            <MyLightroom
                url={url}
            />
        </section>
    );
}

export default PortfolioSec;