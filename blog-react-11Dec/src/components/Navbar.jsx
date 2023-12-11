import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            height: "50px",
            backgroundColor: "lightseagreen",
          }}
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",

              margin: "13px auto",
            }}
          >
            <li style={{ listStyle: "none", textDecoration: "none" }}>
              <NavLink
                to="/home"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Home
              </NavLink>
            </li>
            <li style={{ listStyle: "none" }}>
              {" "}
              <NavLink
                to="/add"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Add Blog
              </NavLink>
            </li>
          </ul>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
