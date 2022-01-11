import React, { useEffect } from 'react';
import Banner from '../components/banner';
import { Col2Cards } from '../components/cards';
import {
    res_banner,
    less_effort,
    mob_segment,
    ux,
    u_friendly,
    angular,
    bootstrap,
    sencha
} from '../assets/img';
import HelpYou from '../components/help-you';
import TecSlider from '../components/technology-slider';
import { Container, Col, Row } from 'react-bootstrap';

function ResWebDesign() {

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
        document.title = "Responsive Website Design | DiscoverItech"
    }, []);

    const cards = [
        { img: less_effort, hd: 'Less Effort', para: 'With the help of best responsive web design, you can update your website with fewer efforts (a few clicks).' },
        { img: ux, hd: 'Smooth User Experience', para: 'Professional responsive web design gives users a very smooth & optimized experience on any device.' },
        { img: u_friendly, hd: 'User-Friendly Website', para: 'Responsive sites are user-friendly! because your website can be used on any device of any screen size.' },
        { img: mob_segment, hd: 'Mobile Segment', para: 'This mobile segment feature helps you to make changes in your website to increase traffic.' },
    ]
    return (
        <>
            <Banner
                bannerImg={res_banner}
                bannerHd="Responsive"
                bannerhdSpan="Web Design"
                bannerCaps="We have professional Front-end Developers."
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Responsive <font className='fw-bold txt_red'>Web Design</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3">
                                A DiscoverSite is a professionally designed, mobile-responsive website that gets you more leads from the web and mobile visitors. DiscoverSite works with our Discover software, which helps you manage your leads, turn them into customers and understand what marketing works. And because DiscoverSite and Discover work together, you get even more from your marketing.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='expertise_sec py-5'>
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
            <section className='tec_slider_sec sec_pad'>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                Frontend Technology <font className='fw-bold txt_red'>Expertise</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3 mb-5">
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

export default ResWebDesign;