import React, {Component} from 'react';

import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Facts from '../Facts/Facts';
import Services from '../Services/Services';
import Features from '../Freatures/Features';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Quote from '../Quote/Quote';
import OurTeam from '../OurTeam/OurTeam';
import Logos from '../Logos/Logos';
import Work from '../Work/Work';
import Testimonial from '../Testimonial/Testimonial';
import PplSay from '../PplSay/PplSay';

class App extends Component {
    render() {
        return (
           <div className="App">
                <Banner />
                <AboutUs />
                <Facts />
                <Services />
                <Features />
                <WhatWeDo />
                <Quote />
                <OurTeam />
                <Logos />
                <Work />
                <Testimonial />
                <PplSay />
            </div> 
        )
    }
}

export default App;
