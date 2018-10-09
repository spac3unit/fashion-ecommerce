import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Api from "./modules/firestore-db";
import LinearProgress from "./components/Preloader/LinearProgress";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ShopPage from "./components/Pages/ShopPage";
import HomePage from "./components/Pages/HomePage";
import ProductPage from "./components/Pages/ProductPage";
import "./styles/App.scss";

class App extends Component {
  state = {
    items: [],
    currentItem: [],
    cart: []
  };
  componentDidMount() {
    Api.getList().then(items =>
      this.setState({
        items
      })
    );
  }
  toggleBurger = () => {};
  render() {
    return (
      <Router>
        <div className="app">
          <div className="overmenu" id="overmenu">
            overmenu test
          </div>
          <Header />
          <Navigation />
          <main>
            <Switch>
              <Route path="/" exact component={() => <HomePage />} />
              <Route
                path="/shop"
                component={() => <ShopPage items={this.state.items} />}
              />
              <Route path="/products/:id" component={ProductPage} />
              {/* <Route path="/admin/new-product" component={NewProduct} />  */}
            </Switch>
          </main>
          <footer>Footer</footer>
        </div>
      </Router>
    );
  }
}

export default App;
