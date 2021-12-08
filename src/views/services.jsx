import React, { Component } from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import ComingSoon from '../components/coming-soon';

class ServicesPage extends Component {
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

export default ServicesPage;