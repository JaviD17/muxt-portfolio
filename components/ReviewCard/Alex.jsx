import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { lightGreen } from "@mui/material/colors";

const JaviReview = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: lightGreen[400] }}
            aria-label="Alex profile letter"
          >
            CO
          </Avatar>
        }
        title="Alex"
      />
      <CardContent>
        <Rating value={4.5} precision={0.5} readOnly />
        <Typography variant="body2" color="text.secondary">
          {`It's user friendly and easy to navigate I love the feel of this site.`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JaviReview;
