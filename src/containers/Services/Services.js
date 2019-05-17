import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Services = () => (
    <div className="Services">
        <SectionTitle 
            titleL1='We work with'
            titleL2='amazing services' />
        <div className="Services__Container">
            <div className="Services__Item">
                <img src={require('../../img/alarm.svg')} alt="" className='Services__Item-icon' />
                <h3 className="Services__Item-title">photography</h3>
                <p className="Services__Item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>

            <div className="Services__Item">
                <img src={require('../../img/line-graph.svg')} alt="" className='Services__Item-icon' />
                <h3 className="Services__Item-title">web design</h3>
                <p className="Services__Item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>

            <div className="Services__Item">
                <img src={require('../../img/computer.svg')} alt="" className='Services__Item-icon' />
                <h3 className="Services__Item-title">creativity</h3>
                <p className="Services__Item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>

            <div className="Services__Item">
                <img src={require('../../img/book.svg')} alt="" className='Services__Item-icon' />
                <h3 className="Services__Item-title">seo</h3>
                <p className="Services__Item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>

            <div className="Services__Item">
                <img src={require('../../img/home.svg')} alt="" className='Services__Item-icon' />
                <h3 className="Services__Item-title">css/html</h3>
                <p className="Services__Item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>

            <div className="Services__Item">
                <img src={require('../../img/image.svg')} alt="" className='Services__Item-icon' />
                <h3 className="Services__Item-title">digital</h3>
                <p className="Services__Item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
)

export default Services;