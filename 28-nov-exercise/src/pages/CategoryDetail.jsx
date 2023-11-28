import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";

const CategoryDetail = () => {
  const item = useParams();
  console.log(item.id);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/categories/" + item.id).then((res) => {
      setCategory(res.data);
    });
  }, []);

  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://w0.peakpx.com/wallpaper/920/275/HD-wallpaper-aesthetic-sky-cloud-clouds-peace.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryDetail;
