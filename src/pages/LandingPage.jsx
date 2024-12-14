import React from 'react'
import './LandingPage.css'
import AboutUs from '../components/AboutUs/AboutUs';
import OurService from '../components/OurService/OurService';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Header/>
      <AboutUs/>
      <OurService/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default LandingPage;
