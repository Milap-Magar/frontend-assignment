import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import HomePage from "./page/HomePage";
import { Loader } from "./components";
import ProductPage from "./page/ProductPage";

const App = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isLoading) return <Loader />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage data={data} />} />
        <Route
          path={"/products/:id"}
          element={<ProductPage products={data} />}
        />
      </Routes>
    </Router>
  );
};
export default App;
