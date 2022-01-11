import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    ux,
    angular,
    bootstrap,
    sencha,
    web_mobile,
    consult,
    graphic_research
} from '../assets/img';
import HelpYou from '../components/help-you';
import TecSlider from '../components/technology-slider';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WebAndMobilePage() {

    const sliderCards = [
        {
            img: angular,
            hd: 'Angularjs Technology',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet nostrum ex officiis, delectus placeat itaque excepturi quaerat mollitia? Quod eos cumque, inventore incidunt culpa exercitationem doloribus veritatis repellendus debitis.'
        },
        {
            img: bootstrap,
            hd: 'Angularjs Technology',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet nostrum ex officiis, delectus placeat itaque excepturi quaerat mollitia? Quod eos cumque, inventore incidunt culpa exercitationem doloribus veritatis repellendus debitis.'
        },
        {
            img: sencha,
            hd: 'Angularjs Technology',
            para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet nostrum ex officiis, delectus placeat itaque excepturi quaerat mollitia? Quod eos cumque, inventore incidunt culpa exercitationem doloribus veritatis repellendus debitis.'
        },
    ];

    useEffect(() => {
        document.title = "Web & Mobile | DiscoverItech"
    }, []);

    const cards = [
        { img: graphic_research, hd: 'Less Effort', para: 'With the help of best responsive web design, you can update your website with fewer efforts (a few clicks).' },
        { img: consult, hd: 'Smooth User Experience', para: 'Professional responsive web design gives users a very smooth & optimized experience on any device.' },
    ];

    const LearnMore = <Link to="/" className="common_btn btn_hover txt_white bg_red">Learn More</Link>;

    return (
        <>
            <Banner
                bannerImg={web_mobile}
                bannerHd="Responsive"
                bannerhdSpan="Web Design"
                bannerCaps="We have professional Front-end Developers."
                bannerBtn={LearnMore}
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Mobile UI <font className='fw-bold txt_red'>And UX Design</font>
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec we_do_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <div className="flex_wrapper text-center">
                                <Col2Cards
                                    cards={cards}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='tec_slider_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Frontend Technology <font className='fw-bold txt_red'>Expertise</font>
                            </h2>
                            <p className="desc text-center mt-3 mb-5">
                                We are experts in every major front-end toolkit and technology stack
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div className='slider_container'>
                    <Row>
                        <Col>
                            <TecSlider
                                cards={sliderCards}
                                sliderClass="tec_slider"
                            />
                        </Col>
                    </Row>
                </div>
            </section>
            <HelpYou />
        </>
    );
}

export default WebAndMobilePage;