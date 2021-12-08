import React from 'react';
import MyOwlCarousel from '../owlcaro/owl-carousal';

function OurClient(props) {

    const myCards = () => {
        return props.cards.map((item, i) => {
            return (
                <div key={i} className="item">
                    <div className="img_wrapper">
                        <img src={item} alt="" className="img-fluid" />
                    </div>
                </div>
            );
        });
    }
    const options = {
        loop: true,
        center: true,
        margin: 10,
        smartSpeed: 900,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2
            },
            550: {
                items: 3
            }
        }
    }
    return (
        <section className="our_client_sec">
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
            <div className="container slider_container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="slider_wrapper">
                            <MyOwlCarousel
                                myClassess={props.classes}
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

export default OurClient;