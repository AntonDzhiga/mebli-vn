import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs';
import OurService from '../components/OurService/OurService';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';

const LandingPage = () => {
  return (
    <>
      <Header/>
      <AboutUs/>
      <OurService/>
      <Gallery/>
    </>
  )
}

export default LandingPage;
