import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const AboutUs = () => (
    <div className='AboutUs'>
        <SectionTitle 
            titleL1='What we do'
            titleL2='story about us' />
        <p className='AboutUs__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim<br /> veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='AboutUs__images'>
            <div className='AboutUs__images-item'>
                <img src={require('../../img/aboutus-person-icon.svg')} alt='' className='AboutUs__images-item-icon' />
                <p className='AboutUs__images-item-text'>super team</p>
            </div>
            <div className='AboutUs__images-item'>
                <img src={require('../../img/aboutus-person-icon.svg')} alt='' className='AboutUs__images-item-icon' />
                <p className='AboutUs__images-item-text'>creativity</p>
            </div>
            <div className='AboutUs__images-item'>
                <img src={require('../../img/aboutus-person-icon.svg')} alt='' className='AboutUs__images-item-icon' />
                <p className='AboutUs__images-item-text'>digital</p>
            </div>
        </div>
    </div>
)

export default AboutUs;