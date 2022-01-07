import React from 'react';
import MyOwlCarousel from '../owlcaro';
import { res_banner } from '../../assets/img';
import { angular, sencha, bootstrap } from '../../assets/img';

function Tec_slider() {
    const options = {
        loop: true,
        margin: 10,
        dots: true,
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
                items: 3
            }
        }
    }
    const myCards = () => {
        return [angular, bootstrap, sencha, angular].map((item, i) => {
            return (
                <div key={i} className="item">
                    <div className="wrap">
                        <div className="slide_header">
                            <div className="img_wrapper">
                                <img src={item} alt="" className="img-fluid" />
                            </div>
                            <div className="caps">
                                <h4>
                                    Angularjs Technology
                                </h4>
                            </div>
                        </div>
                        <div className="slide_body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam amet nostrum ex officiis, delectus placeat itaque excepturi quaerat mollitia? Quod eos cumque, inventore incidunt culpa exercitationem doloribus veritatis repellendus debitis.
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
            extraClass='tec_slider'
        />
    );
}

export default Tec_slider;