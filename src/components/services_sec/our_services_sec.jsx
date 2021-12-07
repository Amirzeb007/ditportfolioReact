import React from 'react';

function OurServicesSec(props) {
    const cards = props.cards;
    return (
        <section className="our_services_sec sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="sec_hd txt_black">
                            {props.secHd}
                            {props.secHdSpan &&
                                <span>{props.secHdSpan}</span>}
                        </h2>
                        <div className="flex_box">
                            {cards.map((item, i) => {
                                return (
                                    <div key={i} className="secvices_cards">
                                        <h4>{item.cardHD}</h4>
                                        <div className="img-wrapper">
                                            <img src={item.cardImg} alt="" className="img-fluid" />
                                        </div>
                                        <p>{item.cardPara}</p>
                                    </div>);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServicesSec;