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
          <>
            {i === navLinks.length - 1 && (
              <MuiNextLink
                key={`${title}${i}`}
                href={path}
                sx={{ color: "common.white", underline: "none" }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ bgcolor: "common.black" }}
                >
                  {title}
                </Button>
              </MuiNextLink>
            )}
            {i < navLinks.length - 1 && (
              <MuiNextLink
                key={`${title}${i}`}
                href={path}
                variant="button"
                sx={{ color: `common.white`, opacity: 0.7, padding: 1 }}
              >
                {title}
              </MuiNextLink>
            )}
          </>
        ))}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
