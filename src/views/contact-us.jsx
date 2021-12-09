import React, { Component, Fragment } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContactFormSec from '../components/contact_form_sec/contact_form';

class ContactUsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        document.title = "Contact Us | DiscoverItech"
    }

    render() {
        return (
            <Fragment>
                <Header />
                <ContactFormSec
                    extraClass={"top_padd"}
                    sechd="Get In Touch & Get Started Today!"
                    sechdSpan="Let Us Turn Your Ideas Into Reality."
                />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactUsPage;