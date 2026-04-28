import React from 'react';
//import Pricing from '../home/Pricing';
//import Hero from '../home/Hero';
import Brokerage from './Brokerage';
import Hero from "./Hero";
import OpenAccount from '../../OpenAccount';
//import OpenAccount from '../homeOpenAccount';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <OpenAccount />
        <Brokerage />
        </>
     );
}

export default PricingPage;