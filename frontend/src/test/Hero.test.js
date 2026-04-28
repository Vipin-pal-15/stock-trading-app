import React from "react";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/products/Hero";

// Test Suite
describe('Hero Component',()=>{
    test('renders hero image',()=>{
        render(<Hero/>);
        const heroImage=screen.getAllByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src',"media\image\images\homeHero.png");
    })
})