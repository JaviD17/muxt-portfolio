import { Container, Grid } from '@mui/material';
import Image from 'next/image';

const SectionAbout = () => {
    return (
        <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}></Grid>
                <Image
                src="/portfolio.svg"
                alt="A portfolio"
                Layout="responsive"
                width={800}
                height={600}
                />
                <Grid item xs={12} sm={6}></Grid>
            </Grid>
        </Container>
    )
}

export default SectionAbout;