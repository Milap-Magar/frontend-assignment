import React from "react";
import { Link } from "react-router-dom";
import { Card, Navbar } from "../components/index";

const HomePage = ({ data }) => {
  return (
    <Link to={'/'}>
      <Navbar />
      <Card data={data} />
    </Link>
  );
};

export default HomePage;
