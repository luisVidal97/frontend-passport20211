import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { Navbar } from "../components/Navbar";
import { Product } from "../components/Product";
import { Products } from "../components/Products";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/category/:id" component={Products}/>
          <Route exact path="/category/:idCategory/product/:idProduct" component={Product}/>
          <Redirect to="/" />
        </Switch>

      </div>
      <Footer />

    </Router>
  );
}