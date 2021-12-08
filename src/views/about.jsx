import React, { Component } from 'react';
import ComingSoon from '../components/coming-soon';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <ComingSoon />
                <Footer />
            </div>
        );
    }
}

export default AboutUs;