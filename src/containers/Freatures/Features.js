import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Features = () => (
    <div className="Features">
        <SectionTitle 
            titleL1='For all devices'
            titleL2='unique design' />
        <div className="Features__Container">
            <img src={require('../../img/features-ipad.png')} alt="" className="Features__iPad"/>
        </div>
        <img src={require('../../img/features-iphone.png')} alt="" className="Features__iPhone"/>
    </div>
)

export default Features;