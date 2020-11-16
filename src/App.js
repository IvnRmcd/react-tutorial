import React, { Component } from "react";
import BurgerBuilder from "./contaniers/BurgerBuilder/BurgerBuilder";
import Checkout from "./contaniers/Checkout/Checkout";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Layout>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
