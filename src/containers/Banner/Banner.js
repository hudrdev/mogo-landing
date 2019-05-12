import React from 'react';

import Divider from '../../components/Divider/Divider';

function Banner() {
    return (
        <section className="Banner">
            <div className="Banner__Slider">
                <span className="Banner__Slider-title">creative template</span>
                <span className="Banner__Slider-text">welcome</span>
                <span className="Banner__Slider-text">to mogo</span>
                <Divider />
                <div className="Banner__Slider-link">
                    <a href='localhost:3000'>learn more</a>
                </div>
            </div>
            <div className="Banner__SliderControls">
                <div className="Banner__SliderControls-container">
                    <div className="Banner__SliderControls-indicator" />
                    <div>
                        <span className="Banner__SliderControls-number">01</span>
                        <span className="Banner__SliderControls-text">intro</span>
                    </div>    
                </div>
                <div className="Banner__SliderControls-container">
                    <div className="Banner__SliderControls-indicator" />
                    <div>
                        <span className="Banner__SliderControls-number">02</span>
                        <span className="Banner__SliderControls-text">work</span>
                    </div>
                </div>
                <div className="Banner__SliderControls-container">
                    <div className="Banner__SliderControls-indicator" />
                    <div>
                        <span className="Banner__SliderControls-number">03</span>
                        <span className="Banner__SliderControls-text">about</span>
                    </div>
                </div>
                <div className="Banner__SliderControls-container">
                    <div className="Banner__SliderControls-indicator" />
                    <div>
                        <span className="Banner__SliderControls-number">04</span>
                        <span className="Banner__SliderControls-text">contacts</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;