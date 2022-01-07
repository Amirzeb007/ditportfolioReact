import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import { Card2by2, Card3Col } from '../components/cards';
import {
    res_banner,
    less_effort,
    mob_segment,
    ux,
    u_friendly

} from '../assets/img';
import HelpYou from '../components/help-you';
import Tec_slider from '../components/technology-slider';

function ResWebDesign() {

    useEffect(() => {
        document.title = "Responsive Website Design | DiscoverItech"
    }, []);

    const bannerImg = res_banner;
    const cards = [
        { img: less_effort, hd: 'Less Effort', para: 'With the help of best responsive web design, you can update your website with fewer efforts (a few clicks).' },
        { img: ux, hd: 'Smooth User Experience', para: 'Professional responsive web design gives users a very smooth & optimized experience on any device.' },
        { img: u_friendly, hd: 'User-Friendly Website', para: 'Responsive sites are user-friendly! because your website can be used on any device of any screen size.' },
        { img: mob_segment, hd: 'Mobile Segment', para: 'This mobile segment feature helps you to make changes in your website to increase traffic.' },
    ]
    return (
        <>
            <Header />
            <Banner
                bannerImg={bannerImg}
                bannerHd="Responsive"
                bannerhdSpan="Web Design"
                bannerCaps="We have professional Front-end Developers."
            />
            <section className="intro_sec">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <h2 className="sec_hd txt_black fw-normal">
                                Responsive <font className='fw-bold txt_red'>Web Design</font>
                            </h2>
                            <p className="desc text-center mt-3">
                                A DiscoverSite is a professionally designed, mobile-responsive website that gets you more leads from the web and mobile visitors. DiscoverSite works with our Discover software, which helps you manage your leads, turn them into customers and understand what marketing works. And because DiscoverSite and Discover work together, you get even more from your marketing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Card2by2
                hd="There are many reasons why our clients come to us again and again"
                cards={cards}
            />
            <section className='tec_slider_sec sec_pad'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Tec_slider />
                        </div>
                    </div>
                </div>
            </section>
            <HelpYou />
            <Footer />
        </>
    );
}

export default ResWebDesign;