import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Navbar, SearchResults } from "../components/index";

const HomePage = ({ data }) => {
  const [results, setResults] = useState([]);

  return (
    <>
      <Link to={"/"}>
        <Navbar data={data} setResults={setResults} />
        <SearchResults results={results} />
        <h2 className="bg-cyan-200 flex justify-center font-mono text-2xl text-cyan-600" >You May like</h2>
        <Card data={data} />
      </Link>
    </>
  );
};

export default HomePage;
