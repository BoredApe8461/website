import React from 'react';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Team />
            <Footer />
        </>

    )
}

export default Home;

