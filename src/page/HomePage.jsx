import React from "react";
import { Navbar } from "../components/index";
import Query from "../components/Query";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div>
        <Query />
      </div>
    </>
  );
};

export default HomePage;
