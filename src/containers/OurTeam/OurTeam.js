import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const OurTeam = () => (
    <div className="OurTeam">
        <SectionTitle
            titleL1='Who we are'
            titleL2='meet our team' />
        <p className='OurTeam__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim<br /> veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='OurTeam__images'>
            <div className='OurTeam__images-item'>
                <div className="OurTeam__images-item-socials">
                    <div><i className="fab fa-facebook-f" /></div>
                    <div><i className="fab fa-twitter"/></div>
                    <div><i className="fab fa-pinterest-p"/></div>
                    <div><i className="fab fa-instagram"/></div>
                </div>
            </div>
            <div className="OurTeam__images__name">
                <span className="OurTeam__images__name-l1">matthew dix</span>
                <span className="OurTeam__images__name-l2">Graphic design</span>
            </div>
            <div className='OurTeam__images-item'>
                <div className="OurTeam__images-item-socials">
                    <div><i className="fab fa-facebook-f" /></div>
                    <div><i className="fab fa-twitter"/></div>
                    <div><i className="fab fa-pinterest-p"/></div>
                    <div><i className="fab fa-instagram"/></div>
                </div>
            </div>
            <div className="OurTeam__images__name">
                <span className="OurTeam__images__name-l1">christopher campbell</span>
                <span className="OurTeam__images__name-l2">Branding/UX design</span>
            </div>
            <div className='OurTeam__images-item'>
                <div className="OurTeam__images-item-socials">
                    <div><i className="fab fa-facebook-f" /></div>
                    <div><i className="fab fa-twitter"/></div>
                    <div><i className="fab fa-pinterest-p"/></div>
                    <div><i className="fab fa-instagram"/></div>
                </div>
            </div>
            <div className="OurTeam__images__name">
                <span className="OurTeam__images__name-l1">michael fertig</span>
                <span className="OurTeam__images__name-l2">Developer</span>
            </div>
        </div>
    </div>
)

export default OurTeam;