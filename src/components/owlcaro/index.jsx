import React from 'react';
import ReactOwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function MyOwlCarousel(props) {
    return (
        <ReactOwlCarousel
            className={props.extraClass}
            {...props.myOptions}
        >
            {props.items}
        </ReactOwlCarousel>
    );
}

export default MyOwlCarousel;