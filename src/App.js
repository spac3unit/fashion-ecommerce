import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";

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
    products: [],
    currentItem: [],
    cart: []
  };
  componentDidMount() {
    Api.getList().then(items =>
      this.setState({
        products: items
      })
    );
  }
  toggleBurger = () => {};
  render() {
    const { products } = this.state;
    return (
      <Router>
        <div className="app">
          <div className="overmenu" id="overmenu">
            overmenu test
          </div>
          <Header />
          <Navigation />
          <main>
            <FadeRoutesWrapper>
              <Switch location={this.props.location}>
                <Route path="/" exact component={() => <HomePage />} />
                <Route
                  path="/shop"
                  component={() => <ShopPage items={products} />}
                />
                <Route path="/products/:id" component={ProductPage} />
              </Switch>
            </FadeRoutesWrapper>
          </main>
          <footer>Footer</footer>
        </div>
      </Router>
    );
  }
}

export default App;
const FadeRoutesWrapper = withRouter(({ children, location, items }) => (
  <div className="fade-wrapper">
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  </div>
));
