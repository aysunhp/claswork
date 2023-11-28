import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            {" "}
            <Link
              to="/"
              style={{
                color: "white",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </Button>
          <Button color="inherit">
            {" "}
            <Link
              to="categories"
              style={{
                color: "white",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Categories
            </Link>
          </Button>
          <Button color="inherit">
            {" "}
            <Link
              to="add"
              style={{
                color: "white",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Add Category
            </Link>
          </Button>
          <Button color="inherit">
            {" "}
            <Link
              to="about"
              style={{
                color: "white",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="contact"
              style={{
                color: "white",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
