import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MuiNextLink from "./MuiNextLink";
import Button from "@mui/material/Button";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/portfolio.svg"
            alt="A portfolio"
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
        <Grid item xs={12} sm={6} container flexDirection="column" justifyContent="center" alignItems="center">
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            A Crypto Enthusiast Who Loves Web Development and DeFi
            <Typography textAlign="center">
              {`Hello! I'm Javi. This site was designed using Next.js 12 and MUI. I'm a full stack developer with a passion for web3.`}
            </Typography>
          </Typography>
          <MuiNextLink href="/about" underline="none">
            <Button variant="outlined" size="large">
              About Us
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
