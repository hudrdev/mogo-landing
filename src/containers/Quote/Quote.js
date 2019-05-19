import React from 'react';

import Divider from '../../components/Divider/Divider';

const Quote = () => (
    <div className="Quote">
        <div className="Quote__Slider">
            <div className="Quote__Slider-prev">
                <img src={require('../../img/arrow.svg')} alt=""/>
            </div>

            <div className="Quote__Slider-quote">
                <div className="Quote__Slider-quote-square">
                    <img src={require('../../img/quote-clouds.svg')} alt=""/>
                </div>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
                <div className="Quote__Slider-quote-name">
                    <Divider />
                    <span>Jon Doe</span>
                </div>
            </div>

            <div className="Quote__Slider-next">
                <img src={require('../../img/arrow.svg')} alt=""/>
            </div>
        </div>
    </div>
)

export default Quote;