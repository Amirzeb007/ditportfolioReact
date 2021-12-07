import React from 'react';

function PortfolioSec(props) {
    return (
        <section className={"portfolio_sec sec_pad " + props.extraPad}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h2 className="sec_hd txt_white">
                            {props.portfolioSechd}
                            {props.portfolioSechdSpan && <span>
                                {props.portfolioSechdSpan}
                            </span>}
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="portfolio_tabs_wrapper">
                            <ul className="nav nav-pills" id="portfolio-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-all-work" data-bs-toggle="pill" data-bs-target="#all-work"
                                        type="button" role="tab" aria-controls="all-work" aria-selected="true">{props.tab1}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-website" data-bs-toggle="pill" data-bs-target="#website"
                                        type="button" role="tab" aria-controls="website" aria-selected="false">{props.tab2}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-branding" data-bs-toggle="pill" data-bs-target="#branding"
                                        type="button" role="tab" aria-controls="branding" aria-selected="false">{props.tab3}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-app" data-bs-toggle="pill" data-bs-target="#app" type="button"
                                        role="tab" aria-controls="app" aria-selected="false">{props.tab4}</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-social-media" data-bs-toggle="pill" data-bs-target="#social-media"
                                        type="button" role="tab" aria-controls="social-media" aria-selected="false">{props.tab5}</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="all-work" role="tabpanel" aria-labelledby="pills-all-work">
                                    <div className="flex_box">
                                        {
                                            props.portfolioCards.map((item, i) => {
                                                return (
                                                    <div key={i} className="portfolio_cards">
                                                        <div className="img_wrapper">
                                                            <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                <img src={item.img} alt="" className="img-fluid" />
                                                            </div>
                                                            <span>{item.span}</span>
                                                        </div>
                                                        <h5>{item.span}</h5>
                                                    </div>);
                                            })
                                        }
                                    </div>
                                    {props.portfolioViewBtn && props.portfolioViewBtn}
                                </div>
                                <div className="tab-pane fade" id="website" role="tabpanel" aria-labelledby="pills-website">
                                    <div className="flex_box">
                                        {
                                            props.portfolioCards.map((item, i) => {
                                                return (
                                                    <div key={i} className="portfolio_cards">
                                                        <div className="img_wrapper">
                                                            <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                <img src={item.img} alt="" className="img-fluid" />
                                                            </div>
                                                            <span>{item.span}</span>
                                                        </div>
                                                        <h5>{item.span}</h5>
                                                    </div>);
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="branding" role="tabpanel" aria-labelledby="pills-branding">
                                    <div className="flex_box">
                                        {
                                            props.portfolioCards.map((item, i) => {
                                                return (
                                                    <div key={i} className="portfolio_cards">
                                                        <div className="img_wrapper">
                                                            <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                <img src={item.img} alt="" className="img-fluid" />
                                                            </div>
                                                            <span>{item.span}</span>
                                                        </div>
                                                        <h5>{item.span}</h5>
                                                    </div>);
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="app" role="tabpanel" aria-labelledby="pills-app">
                                    <div className="flex_box">
                                        {
                                            props.portfolioCards.map((item, i) => {
                                                return (
                                                    <div key={i} className="portfolio_cards">
                                                        <div className="img_wrapper">
                                                            <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                <img src={item.img} alt="" className="img-fluid" />
                                                            </div>
                                                            <span>{item.span}</span>
                                                        </div>
                                                        <h5>{item.span}</h5>
                                                    </div>);
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="social-media" role="tabpanel" aria-labelledby="pills-social-media">
                                    <div className="flex_box">
                                        {
                                            props.portfolioCards.map((item, i) => {
                                                return (
                                                    <div key={i} className="portfolio_cards">
                                                        <div className="img_wrapper">
                                                            <div className="wrap open_lightroom" data-bs-toggle="modal" data-bs-target="#lightRoom">
                                                                <img src={item.img} alt="" className="img-fluid" />
                                                            </div>
                                                            <span>{item.span}</span>
                                                        </div>
                                                        <h5>{item.span}</h5>
                                                    </div>);
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSec;