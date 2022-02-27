import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { red } from "@mui/material/colors";

const PedroReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[600] }} aria-label="Pedro profile letter">
            PE
          </Avatar>
        }
        title="Pedro"
      />
      <CardContent>
        <Rating value={4.5} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          Very natural and intuitive flow to the site.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PedroReview;
