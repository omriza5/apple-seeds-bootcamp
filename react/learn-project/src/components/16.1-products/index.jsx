import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import Products from "./products";
import ProductPage from "./productPage";

const RouterExercise = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route path="/products/:id">
            <ProductPage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default RouterExercise;
