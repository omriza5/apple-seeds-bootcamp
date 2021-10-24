import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import Products from "./products";
import ProductDetail from "./productDetail";
import NotFound from "./notFound";

const RouterExercise = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default RouterExercise;
