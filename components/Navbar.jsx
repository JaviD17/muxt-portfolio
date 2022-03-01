import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import MuiNextLink from "./MuiNextLink";
import Button from "@mui/material/Button";

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path }, i) => (
          <MuiNextLink
            key={`${title}${i}`}
            href={path}
            // variant="button"
            sx={{ color: `common.white`, textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="medium"
              sx={{ bgcolor: "common.black", borderRadius: 25 }}
            >
              {title}
            </Button>
          </MuiNextLink>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
