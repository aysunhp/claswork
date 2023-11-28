import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const AlbumLayout = () => {
  let counts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let years = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
  ];
  const [value, setValue] = useState("");
  const [data, setData] = useState({});
  console.log(value);

  return (
    <>
      <AppBar position="static" style={{ margin: "0px", padding: "0px" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CameraAltIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ margin: "0 auto", marginTop: "70px" }} xs={6}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={5} style={{ margin: "0 auto", marginTop: "70px" }}>
              <p
                style={{
                  fontWeight: "200",
                  fontSize: "3.75rem",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Album layout
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "1.5rem",
                  color: "rgba(0, 0, 0, 0.6)",
                  marginBottom: "40px",
                }}
              >
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don't simply skip over it entirely.
              </p>
            </Grid>
            <Grid
              item
              xs={8}
              spacing={2}
              style={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <TextField
                label="Movie"
                value={value}
                placeholde="Search movie"
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
              <select name="movie" id="movie" onChange={(e) => {console.log()}}>
                <option value="" disabled hidden>
                  Year
                </option>
                {years.map((year) => {
                  return <option value={year}>{year}</option>;
                })}
              </select>
              <Button
                variant="outlined"
                onClick={() => {
                  axios
                    .get(`https://www.omdbapi.com/?s=${value}&apikey=ea956f0f`)
                    .then((res) => {
                      setData(res.data);
                    });

                  setValue("");
                }}
              >
                SEARCH
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            style={{ margin: "auto", textAlign: "center" }}
          ></Grid>
        </Box>

        {data.Search && (
          <Box
            sx={{ flexGrow: 1 }}
            style={{ margin: "auto", marginTop: "60px" }}
          >
            <Grid
              container
              spacing={2}
              style={{ marginTop: "80px", margin: "auto" }}
            >
              {data.Search.map((movie, i) => {
                return (
                  <Grid key={i} item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="420"
                        image={movie.Poster}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {movie.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Year: {movie.Year}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">VIEW</Button>
                        <Button size="small">EDIT</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              lg={3}
              md={4}
              style={{
                margin: "0 auto",
                marginBottom: "50px",
                marginTop: "50px",
              }}
            >
              <h1
                style={{
                  fontWeight: "500",
                  fontSize: " 1.25rem",
                  textAlign: "center",
                }}
              >
                Footer
              </h1>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Something here to give the footer a purpose! Copyright © Your
                Website 2023.
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AlbumLayout;
