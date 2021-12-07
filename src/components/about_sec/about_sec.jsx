import React from 'react';

function AboutSec(props) {
    return (
        <section className="home_about_sec sec_pad">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h2 className="sec_hd txt_black">
                            {props.SecHd}
                            {props.SecHdSpan &&
                                <span>
                                    {props.SecHdSpan}
                                </span>
                            }
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="section_img text-center">
                            <img src={props.Colimg} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <h3 className="sub_hd">
                            {props.Colhd}
                        </h3>
                        <p className="desc" dangerouslySetInnerHTML={{ __html: props.Colpara }} />
                        {props.ColBtn && props.ColBtn}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSec;

