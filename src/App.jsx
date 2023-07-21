import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Card, Navbar } from "./components";
import { useQuery } from "@tanstack/react-query";

const App = () => {
    const { isLoading, error, data } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://fakestoreapi.com/products').then(
          (res) => res.json(),
        ), 
    })
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (  
    <Router>
      <Navbar />
      <Card data={data} />
    </Router>
  );
};
export default App;
