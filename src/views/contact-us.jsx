import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContactFormSec from '../components/contact_form_sec/contact_form';

function ContactUsPage() {
    return (
        <>
            <Header />
            <ContactFormSec
                extraClass={"top_padd"}
                sechd="Get In Touch & Get Started Today!"
                sechdSpan="Let Us Turn Your Ideas Into Reality."
            />
            <Footer />
        </>
    );
}

export default ContactUsPage;