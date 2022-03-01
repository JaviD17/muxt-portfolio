import * as React from "react";
import Hero from "../components/Hero";
import SectionAbout from "../components/SectionAbout";
import SectionImage from "../components/SectionImage";
import SectionReview from "../components/SectionReview";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavigationCard from "../components/NavigationCard";

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

      <SectionImage imgSrc="/cpu.jpg" imgAlt="A cpu" />

      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/oldTech.jpg"
              imgAlt="Old tech on a table"
              title="Old Tech"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./projects"
              ctaText="Check Out"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/team.jpg"
              imgAlt="A team"
              title="A team"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./projects"
              ctaText="Chcek Out"
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Homepage;
