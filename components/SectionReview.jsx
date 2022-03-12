import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import JaviReview from "./ReviewCard/Javi";
import PedroReview from "./ReviewCard/Pedro";
import AlexReview from "./ReviewCard/Alex";

const SectionReview = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Customer Review
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <JaviReview />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <PedroReview />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <AlexReview />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;
