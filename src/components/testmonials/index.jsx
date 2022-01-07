import React from 'react';
import MyOwlCarousel from '../owlcaro';

function TestiSec(props) {
    const options = {
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        smartSpeed: 900,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 1
            },
            1300: {
                items: 2
            }

        }
    }
    const myCards = () => {
        return props.cards.map((item, i) => {
            return (
                <div key={i} className="item">
                    <div className="wrap">
                        <div className="slide_header">
                            <div className="img_wrapper">
                                <img src={item.img} alt="" className="img-fluid" />
                            </div>
                            <div className="caps">
                                <h4>{item.hd}
                                    {item.span &&
                                        <span>
                                            {item.span}
                                        </span>
                                    }
                                </h4>
                            </div>
                        </div>
                        <div className="slide_body">
                            <p>{item.msg}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }
    return (
        <section className="testimonial-sec">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h2 className="sec_hd txt_black">
                            {props.SecHd}
                            {props.SecHdSpan &&
                                <span className="extra_width">
                                    {props.SecHdSpan}
                                </span>
                            }
                        </h2>
                    </div>
                </div>
            </div>
            <div className="testi_wrapper">
                <div className="row mx-0">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="img_wrapper">
                            <img src={props.colimg} alt="" className="img-fluid" />
                            <img src={props.colimgsm} alt="" className="img-fluid float_img" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="slider_wrapper">
                            <MyOwlCarousel
                                extraClass={props.classes}
                                myOptions={options}
                                items={myCards()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestiSec;