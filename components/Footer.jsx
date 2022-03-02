import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "../components/MuiNextLink";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.black" }}
          href="https://google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.black" }}
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.black" }}
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </MuiNextLink>
      </Stack>
      <Typography align="center" color="common.black">
        © {new Date().getFullYear()}, {`Javi's Portfolio`}
      </Typography>
    </Box>
  );
};

export default Footer;
