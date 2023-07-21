import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import HomePage from "./page/HomePage";

const App = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Router>
      <HomePage data={data} />
    </Router>
  );
};
export default App;
