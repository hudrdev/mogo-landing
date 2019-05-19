import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';

const WhatWeDo = () => (
    <div className="WhatWeDo">
        <SectionTitle 
            titleL1='Service'
            titleL2='what we do' />
        <p className='WhatWeDo__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim<br /> veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className="WhatWeDo__Container">
            <img src={require('../../img/whatwedo-picture.jpg')} alt="" className="WhatWeDo__Container-img"/>
            <div className="WhatWeDo__Accordeon">
                <div className="WhatWeDo__Accordeon-item">
                    <div className="WhatWeDo__Accordeon-item-head">
                        <img src={require('../../img/whatwedo-pic.svg')} alt="" className='WhatWeDo__Accordeon-item-head-icon'/>
                        <span className='WhatWeDo__Accordeon-item-head-title'>photography</span>
                        <img src={require('../../img/arrow.svg')} alt="" className="WhatWeDo__Accordeon-item-head-arrow"/>
                    </div>
                    <p className="WhatWeDo__Accordeon-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi, minus a quaerat reprehenderit similique ut itaque exercitationem quia est voluptatibus facere quo blanditiis quas fugiat, ullam, reiciendis maiores! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi, minus a quaerat reprehenderit similique ut itaque exercitationem quia est voluptatibus facere quo blanditiis quas fugiat, ullam, reiciendis maiores! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi, minus a quaerat reprehenderit similique ut itaque exercitationem quia est voluptatibus facere quo blanditiis quas fugiat, ullam, reiciendis maiores!
                    </p>
                </div>

                <div className="WhatWeDo__Accordeon-item">
                    <div className="WhatWeDo__Accordeon-item-head">
                        <img src={require('../../img/whatwedo-equalizer.svg')} alt="" className='WhatWeDo__Accordeon-item-head-icon'/>
                        <span className='WhatWeDo__Accordeon-item-head-title'>creativity</span>
                        <img src={require('../../img/arrow.svg')} alt="" className="WhatWeDo__Accordeon-item-head-arrow"/>
                    </div>
                    {/* <p className="WhatWeDo__Accordeon-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi, minus a quaerat reprehenderit similique ut itaque exercitationem quia est voluptatibus facere quo blanditiis quas fugiat, ullam, reiciendis maiores! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi, minus a quaerat reprehenderit similique ut itaque exercitationem quia est voluptatibus facere quo blanditiis quas fugiat, ullam, reiciendis maiores!
                    </p> */}
                </div>

                <div className="WhatWeDo__Accordeon-item">
                    <div className="WhatWeDo__Accordeon-item-head">
                        <img src={require('../../img/whatwedo-bullseye.svg')} alt="" className='WhatWeDo__Accordeon-item-head-icon'/>
                        <span className='WhatWeDo__Accordeon-item-head-title'>web design</span>
                        <img src={require('../../img/arrow.svg')} alt="" className="WhatWeDo__Accordeon-item-head-arrow"/>
                    </div>
                    {/* <p className="WhatWeDo__Accordeon-item-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi, minus a quaerat reprehenderit similique ut itaque exercitationem quia est voluptatibus facere quo blanditiis quas fugiat, ullam, reiciendis maiores! 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius modi, minus a quaerat reprehenderit similique ut itaque exercitationem quia est voluptatibus facere quo blanditiis quas fugiat, ullam, reiciendis maiores!
                    </p> */}
                </div>
            </div>
        </div>
    </div>
)

export default WhatWeDo;