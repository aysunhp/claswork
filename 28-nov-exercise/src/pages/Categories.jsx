import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/categories").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <>
      <div
        className="container"
        style={{
          width: "70%",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          margin: "30px auto",
        }}
      >
        {data.map((item, i) => {
          return (
            <Card sx={{ width: 345 }} key={i}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://w0.peakpx.com/wallpaper/920/275/HD-wallpaper-aesthetic-sky-cloud-clouds-peace.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  style={{
                    display: "block",
                    margin: "20px auto",
                  }}
                  component={Link}
                  to={"/categories/" + item.id}
                >
                  Go to Details
                </Button>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
