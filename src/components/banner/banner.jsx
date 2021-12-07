import React from 'react';

function Banner(props) {
    return (
        <section className="banner home_banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <div className="banner_cap">
                            <div className="banner_hd">
                                {props.bannerHd}<span className="txt_red">{props.bannerHdSpan}</span>
                            </div>
                            <div className="caps">
                                {props.bannerCaps}
                            </div>
                            {props.contactUS_btn && props.contactUS_btn}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="banner_img text-center">
                            <img src={props.bannerImg} alt="Home Page Banner" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;