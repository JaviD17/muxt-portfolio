import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { red } from "@mui/material/colors";

const JaviReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Javi profile letter">
            JA
          </Avatar>
        }
        title="Javi"
      />
      <CardContent>
        <Rating value={5} readOnly />
        <Typography variant="body2" color="text.secondary">
          This website has a clean and smooth UX design that has modern
          functionality.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JaviReview;
