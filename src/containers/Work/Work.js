import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Gallery from '../../components/Gallery/Gallery';

const Work = () => (
    <div className="Work">
        <SectionTitle
            titleL1='What we do'
            titleL2='some of our work' />
        <p className='Work__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim<br /> veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Gallery />
    </div>
)

export default Work;