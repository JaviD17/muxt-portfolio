import Grid from "@mui/material/Grid";
import Image from "next/image";

const Hero = ({ imgSrc, imgAlt }) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        zIndex: -100,
        mb: 15,
      }}
    >
      <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .7)",
        }}
      ></Grid>
    </Grid>
  );
};

export default Hero;
