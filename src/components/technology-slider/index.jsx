import React from 'react';
import MyOwlCarousel from '../owlcaro';
import { slider_icon } from '../../assets/img';

function TecSlider(props) {

    const { cards, sliderClass } = props;

    const options = {
        margin: 5,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: true,
        nav: true,
        navText: [`<img src=${slider_icon} className="img-fluid" />`, `<img src=${slider_icon} className="img-fluid" />`],
        smartSpeed: 900,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1080: {
                items: 3
            }
        }
    }

    const myCards = () => {
        return cards.map((item, i) => {
            return (
                <div key={i} className="item">
                    <div className='wrap'>
                        <div className="slide_header">
                            <div className="img_wrapper">
                                <img src={item.img} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="slide_body">
                            <h4>
                                {item.hd}
                            </h4>
                            <p>
                                {item.para}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <MyOwlCarousel
            myOptions={options}
            items={myCards()}
            extraClass={sliderClass}
        />
    );
}

export default TecSlider;