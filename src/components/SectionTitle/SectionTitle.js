import React from 'react';

import Divider from '../Divider/Divider';

const SectionTitle = (props) => (
    <div className="SectionTitle">
        <span className='SectionTitle__titleL1'>{props.titleL1}</span>
        <h2 className='SectionTitle__titleL2'>{props.titleL2}</h2>
        <Divider />
    </div>
)

export default SectionTitle;