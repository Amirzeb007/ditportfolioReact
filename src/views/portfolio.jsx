import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import PortfolioSec from '../components/portfolio_sec/portfolio_sec';
import { Link } from 'react-router-dom';
import {
    app_1,
    app_2,
    app_3,
    app_4,
    app_5,
    app_6,
    app_7,
    app_8,
    app_9,
} from '../assets/img';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allWork: [
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
            ],
        }
    }
    render() {
        const ViewMore_btn = <Link to="/" className="common_btn btn_hover txt_white bg_red mx-auto mt-5 view_more">View More</Link>;
        return (
            <div>
                <Header />
                <PortfolioSec
                    extraPad={"top_padd"}
                    portfolioSechd="Portfolio"
                    portfolioSechdSpan="Checkout the work we've done for our other clients. Our portfolio includes case studies for work done for"
                    portfolioCards={this.state.allWork}
                    portfolioViewBtn={ViewMore_btn}
                    tab1="All Work"
                    tab2="Website"
                    tab3="Branding"
                    tab4="App"
                    tab5="Social Media"
                />
                <Footer />
            </div>
        );
    }
}

export default Portfolio;