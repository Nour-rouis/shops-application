import React from "react";
import "./styles.css";

import Contact from "./Contact";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import Drawer from "./Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./home"; // Updated to lowercase filename

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Routes>
        <Route exact path="/" element={<Home />} />{" "}
        {/* Updated to use 'element' */}
        <Route exact path="/contact" element={<Contact />} />{" "}
        {/* Updated to use 'element' */}
        <Route exact path="/about" element={<About />} />{" "}
        {/* Updated to use 'element' */}
      </Routes>
    </div>
  );
}
