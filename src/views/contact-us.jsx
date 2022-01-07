import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactFormSec from '../components/contact_form_sec';

function ContactUsPage() {
    return (
        <>
            <Header />
            <ContactFormSec
                sechd="Get In Touch & Get Started Today!"
                sechdSpan="Let Us Turn Your Ideas Into Reality."
            />
            <Footer />
        </>
    );
}

export default ContactUsPage;