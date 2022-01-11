import React, { useEffect } from 'react';
import Banner from '../components/banner';
import {
    target_aud,
    sales_gen,
    graphic_research,
    seo_banner,
    seo_oppertunity,
    seo_benefits,
} from '../assets/img';
import HelpYou from '../components/help-you';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SeoPage() {
    useEffect(() => {
        document.title = "Searching Engine Optimization ( Seo ) | DiscoverItech"
    }, []);

    const cards = [
        { hd: 'Keyword Research', para: 'PPC keyword research strategy let you know the current trending keywords in the online marketing domain. We have dedicated a team to research the right and needy keywords for your business.' },
        { hd: 'Account Setup', para: 'Discover iTech offers one-time PPC setups to start your business’s campaign on the right foot. We implement the necessary campaign settings that will generate leads for your business.' },
        { hd: 'Compaign Launch', para: 'After account setup, it’s time to get the nuts. Campaign launch means showing your advertising to your selected and targeted audience and provide traffic or generate your sales.' },
        { hd: 'Analysis & Feedback', para: 'Finally, its time to monitor the advertising campaigns. Professioanl analyzing and reporting always benefits more. We have an expert team to analyze the campaigns and the feedback.' },
    ];

    const cards2 = [
        { img: sales_gen, hd: 'Sales Generation', para: 'Businesses can’t just rely on their existing customers to fuel growth, so there’s a constant need for more leads.' },
        { img: target_aud, hd: 'Target Audience', para: 'The definition of audience targeting is exactly what you’d expect: It’s the practice of using data to segment consumers.' },
        { img: graphic_research, hd: 'Increase Business', para: 'We could have increased this list to implementing and able to focus on the main ones that will have the biggest impact.' },
    ];

    const Contactbtn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;

    return (
        <>
            <Banner
                bannerImg={seo_banner}
                bannerHd="Search Engine"
                bannerhdSpan="Optimization"
                bannerCaps="Search Engine Optimization action plan for immediate results and a sustained growth path."
                bannerBtn={Contactbtn}
            />
            <section className="intro_sec">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                We Are One Of The <font className='fw-bold txt_red d-block'>SEO Marketers</font>
                            </h2>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='bg_light_pink py-5'>
                <Container>
                    <Row>
                        <Col lg={4} md={4} sm={12} className='mb-4 mb-lg-0 mb-md-0'>
                            <div className="img_wrapper text-center">
                                <img src={seo_oppertunity} alt="" style={{ width: '100%', maxWidth: '300px' }} className="img-fluid" />
                            </div>
                        </Col>
                        <Col lg={8} md={8} sm={12}>
                            <h4 className="small_hdv2 mb-4"><strong>Hear it from the Best SEO Services</strong></h4>
                            <p className="desc">
                                Our search engine optimization (SEO) services are designed to increase visibility within the algorithmic (“natural”, “organic”, or “free”) search results to deliver high quality, targeted traffic to your website. We’re an SEO-first team – it’s in our DNA. We believe that 20% of actions drive 80% of results, so we focus on what will move the needle in our SEO services.
                                <br />
                                <br />
                                All our work is handmade, there’s no artificial bots, spam, or pesticides in our organic strategies, and every campaign we work on is entirely bespoke to your industry, your business, and your team.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="intro_sec sec_pad">
                <Container>
                    <Row className='mb-5'>
                        <Col>
                            <h2 className="sec_hd txt_black fw-normal">
                                SEO <font className='fw-bold txt_red'>Benefits</font>
                            </h2>
                            <p className="desc text-center mxwidth_75 mx-auto mt-3">
                                SEO is essential for any kind of Business
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                            <h4 className="small_hdv2 mb-4"><strong>Why do you need SEO?</strong></h4>
                            <p className="desc">
                                The truth is that SEO is an important part of any marketing strategy.
                                <br />
                                <br />
                                SEO is a combination of activities that help search engines find and trust you, organize the information you’re publishing, and present it to users searching for it. Many business owners see search engine optimization (SEO) as a mystery, an enigma that only those with inside knowledge can solve. The truth is that SEO is an important part of any marketing strategy, and it doesn’t have to be complicated.
                            </p>
                        </Col>
                        <Col lg={4} md={4} sm={12} className='mt-4 mt-lg-0 mt-md-0'>
                            <div className="img_wrapper text-center">
                                <img src={seo_benefits} alt="" style={{ width: '100%', maxWidth: '350px' }} className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <HelpYou />
        </>
    );
}

export default SeoPage;