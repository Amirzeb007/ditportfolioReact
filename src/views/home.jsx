import React, { useEffect } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/banner';
import OurServicesSec from '../components/services_sec/our_services_sec';
import AboutSec from '../components/about_sec/about_sec';
import PortfolioSec from '../components/portfolio_sec/portfolio_sec';
import ContactFormSec from '../components/contact_form_sec/contact_form';
import OurClient from '../components/our-clients/our-client-sec';
import TestiSec from '../components/testmonials';
import {
    homeBanner,
    app_dev,
    web_design,
    social,
    logo_design,
    cover_boy,
    app_1,
    app_2,
    app_3,
    app_4,
    app_5,
    app_6,
    app_7,
    app_8,
    app_9,
    Hoko_Logo,
    inone_logo,
    universal_logo,
    person_img,
    qoute_icon,
    test_art
} from '../assets/img';

function Home() {

    const cards = [
        {
            cardHD: "App Development",
            cardImg: app_dev,
            cardPara: "We design and build iOS,Android or hybrid apps using react native and flutter or cordova"
        },
        {
            cardHD: "Web Design",
            cardImg: web_design,
            cardPara: "We design and build iOS,Android or hybrid apps using react native and flutter or cordova"
        },
        {
            cardHD: "Social Media",
            cardImg: social,
            cardPara: "How you present your brand is important.We make that process easy for you"
        },
        {
            cardHD: "Logo & Branding",
            cardImg: logo_design,
            cardPara: "We craft exquisite brand identities that convay your product and service well to your clients"
        },
    ];

    const allWork = [
        {
            img: app_1,
            hd: 'Weather And News App',
            span: 'App'
        },
        {
            img: app_2,
            hd: 'Weather And News App',
            span: 'App'
        },
        {
            img: app_3,
            hd: 'Weather And News App',
            span: 'App'
        },
        {
            img: app_4,
            hd: 'Coco Oil',
            span: 'Branding'
        },
        {
            img: app_5,
            hd: 'Coco Oil',
            span: 'Think Tank'
        },
        {
            img: app_6,
            hd: 'Media Inc.',
            span: 'App'
        },
        {
            img: app_7,
            hd: 'Crypto App',
            span: 'App'
        },
        {
            img: app_8,
            hd: 'Aspire',
            span: 'Social'
        },
        {
            img: app_9,
            hd: 'Aspire',
            span: 'Webiste'
        },
    ];

    const ourClientCards = [Hoko_Logo, inone_logo, universal_logo, Hoko_Logo];

    const testmonials = [
        {
            img: person_img,
            hd: 'Amir Zeb',
            span: 'Lorem ipsum',
            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed cumque corrupti ullam exercitationem tempore, alias, eaque unde deserunt id molestias ea earum veritatis ut! Earum sit repellendus qui neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente ad aut tempora facilis velit quibusdam autem dolorem fuga, dignissimos numquam id quod, dolor provident, harum quo dolore quasi? Necessitatibus.',
        },
        {
            img: person_img,
            hd: 'Amir Zeb',
            span: 'Lorem ipsum',
            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed cumque corrupti ullam exercitationem tempore, alias, eaque unde deserunt id molestias ea earum veritatis ut! Earum sit repellendus qui neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente ad aut tempora facilis velit quibusdam autem dolorem fuga, dignissimos numquam id quod, dolor provident, harum quo dolore quasi? Necessitatibus.',
        },
        {
            img: person_img,
            hd: 'Amir Zeb',
            span: 'Lorem ipsum',
            msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed cumque corrupti ullam exercitationem tempore, alias, eaque unde deserunt id molestias ea earum veritatis ut! Earum sit repellendus qui neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente ad aut tempora facilis velit quibusdam autem dolorem fuga, dignissimos numquam id quod, dolor provident, harum quo dolore quasi? Necessitatibus.',
        }
    ];

    const contactUS_btn = <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;
    const learnMore_btn = <Link to="/" className="txt_white common_btn bg_red btn_hover">Learn More</Link>;
    const ViewMore_btn = <Link to="/" className="common_btn btn_hover txt_white bg_red mx-auto mt-5 view_more">View More</Link>;
    const bannerImg = homeBanner;
    const testiCaroClassess = "owl-theme testi_slider";
    const clientCaroClassess = "owl-theme clients_slider";
    useEffect(() => {
        document.title = "Home | DiscoverItech"
    }, []);
    return (
        <>
            <Header />
            <Banner
                bannerImg={bannerImg}
                bannerHd="We make IT,"
                bannerhdSpan="Possible"
                bannerCaps="Being a top-notch Custom software development company, our services are designed to take your business to the next level, reducing the gap between you and the heights of success you wish to achieve"
                bannerBtn={contactUS_btn}
            />
            <OurServicesSec
                secHd="Our Services"
                secHdSpan="Learn how we helped our several clients grow in online business. It will give you an idea of our capabilities."
                cards={cards} />
            <AboutSec
                SecHd="About US"
                SecHdSpan="Learn how we helped our several clients grow their businesses online."
                Colimg={cover_boy}
                Colhd="Reasons For Choosing Us"
                Colpara="At Discover-I-Tech we are a complete digital marketing agency offering design, development and internet marketing services to all the businesses.We build your complete presence with Website and mobile app design, CRM Integrations, email setup, Search engine optimization, and complete digital marketing services.<br /><br />Create and improve your marketing potential (products, services).Provide access to unique technologies, as well as the knowledge and experience to build a successful business on the Internet.Show you clear, measurable results and regular work on the development of your business on the Internet."
                ColBtn={learnMore_btn}
            />
            <PortfolioSec
                portfolioSechd="Portfolio"
                portfolioSechdSpan="Checkout the work we've done for our other clients. Our portfolio includes case studies for work done for"
                portfolioCards={allWork}
                portfolioViewBtn={ViewMore_btn}
                tab1="All Work"
                tab2="Website"
                tab3="Branding"
                tab4="App"
                tab5="Social Media"
            />
            <OurClient
                SecHd="Our Clients"
                SecHdSpan="Yah... There is a reason why working with us makes sense. We are counted amoung the world's best software development company because we deliver with speed, precision, and professional quality."
                cards={ourClientCards}
                classes={clientCaroClassess}
            />
            <TestiSec
                SecHd="Client Testimonial"
                SecHdSpan="At DiscoveriTech, we have been serving happy customers globally. As a leading software development
                    company, we believe in building trusted relationships, not just partnerships. You can see here, what
                    they say about us."
                colimg={test_art}
                colimgsm={qoute_icon}
                cards={testmonials}
                classes={testiCaroClassess}
            />
            <ContactFormSec
                sechd="Get In Touch & Get Started Today!"
                sechdSpan="Let Us Turn Your Ideas Into Reality."
            />
            <Footer />
        </>
    );
}

export default Home;