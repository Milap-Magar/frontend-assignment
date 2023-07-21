import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import HomePage from "./page/HomePage";
import { ProductDetails } from "./components";

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
      <Routes>
        <Route path={"/"} element={<HomePage data={data} />} />
        <Route path={"/products/:id"} element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};
export default App;
