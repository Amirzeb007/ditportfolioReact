import React from 'react';
import {
    envelope,
    location,
    mobile,
} from '../../assets/img';
import MyContactForm from './form';

function ContactFormSec(props) {
    return (
        <section className={props.extraClass ? 'contact_sec sec_pad top_padd' : 'contact_sec sec_pad'}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h2 className="sec_hd txt_black">
                            {props.sechd}
                            {props.sechdSpan &&
                                <span>
                                    {props.sechdSpan}
                                </span>
                            }
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container full_width">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 align-self-center">
                        <div className="contact_info">
                            <ul>
                                <li>
                                    <div className="icon_wrapper">
                                        <img src={location} alt="" className="img-fluid" />
                                    </div>
                                    <div className="info_wrapper">
                                        <h4>Address</h4>
                                        <p className="desc">
                                            3556 Fartford Way Vig, Mount <br />
                                            Pleasant, SC, <br />
                                            29466, Australia.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon_wrapper">
                                        <img src={mobile} alt="" className="img-fluid" />
                                    </div>
                                    <div className="info_wrapper">
                                        <h4>Call for queries</h4>
                                        <p className="desc">
                                            734-697-2907 <br />
                                            843-971-1906
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon_wrapper">
                                        <img src={envelope} alt="" className="img-fluid" />
                                    </div>
                                    <div className="info_wrapper">
                                        <h4>Email Us</h4>
                                        <p className="desc">hello@discoveritech.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <MyContactForm
                            hd="Say Hi"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ContactFormSec;