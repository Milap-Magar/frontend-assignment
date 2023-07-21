import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Navbar, SearchResults } from "../components/index";

const HomePage = ({ data }) => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(false);

  return (
    <>
      <Link to={"/"}>
        <Navbar data={data} setResults={setResults} />
        <SearchResults results={results} />
        <Card data={data} />
      </Link>
    </>
  );
};

export default HomePage;
