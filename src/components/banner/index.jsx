import React from 'react';

function Banner(props) {
    return (
        <section className="banner home_banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12 align-self-center">
                        <div className="banner_cap">
                            <div className="banner_hd">
                                {props.bannerHd}{props.bannerhdSpan &&
                                    <span className="txt_red"> {props.bannerhdSpan}</span>
                                }
                            </div>
                            <div className="caps">
                                {props.bannerCaps}
                            </div>
                            {props.contactUS_btn && props.contactUS_btn}
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
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