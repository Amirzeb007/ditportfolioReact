import React from 'react';
import { Link } from 'react-router-dom';

const Contactus_Btn = () => {
    return <Link to="/contact-us" className="common_btn btn_hover txt_white bg_red">Contact Us</Link>;
}

function HelpYou(props) {
    return (
        <>
            <section className='gradient py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="sec_hd txt_white fw-normal">
                                How can we <font className="fw-bold txt_white">Help You?</font>
                                <span>Learn more about what we do</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center align-items-center gap-3">
                                <p className="fw-bold desc">Learn how we can transform your business</p><Contactus_Btn />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HelpYou;