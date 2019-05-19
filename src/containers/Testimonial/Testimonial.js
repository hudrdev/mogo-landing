import React from 'react';

import Divider from '../../components/Divider/Divider';

const Testimonial = () => (
    <div className="Testimonial">
        <div className="Testimonial__Slider">
            <div className="Testimonial__Slider-prev">
                <img src={require('../../img/arrow.svg')} alt=""/>
            </div>

            <div className="Testimonial__Slider-quote">
                <div className="Testimonial__Slider-quote-circle" />
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
                <div className="Testimonial__Slider-quote-name">
                    <Divider />
                    <span>Joshua Earle</span>
                </div>
            </div>

            <div className="Testimonial__Slider-next">
                <img src={require('../../img/arrow.svg')} alt=""/>
            </div>
        </div>
    </div>
)

export default Testimonial;