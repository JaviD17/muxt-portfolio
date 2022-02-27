// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import * as React from "react";
// import Container from "@mui/material/Container";
import Hero from "../components/Hero";
import SectionAbout from "../components/SectionAbout";
import SectionImage from "../components/SectionImage";
import SectionReview from '../components/SectionReview';

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero
        imgSrc="/home-hero.jpg"
        imgAlt="Colorful background"
        title="Javi's Portfolio"
        subtitle="Build your craft"
      />
      <SectionAbout />
      <SectionImage imgSrc="/programming.jpg" imgAlt="A half open macbook" />
      <SectionReview />
    </React.Fragment>
  );
};

export default Homepage;
