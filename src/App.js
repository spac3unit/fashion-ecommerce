import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { withRouter } from "react-router-dom";

// modules
import API from "./modules/firestore-db";
//components
import OverlayMenu from "./components/OverlayMenu/OverlayMenu";
import LinearProgress from "./components/Preloader/LinearProgress";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CRUD from "./Pages/Admin/Crud";
// Pages
import ShopPage from "./Pages/ShopPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
//styles
import "./styles/App.scss";

export default class App extends Component {
  state = {
    cart: null,
    currentItem: null,
    error: null,
    isOverlayMenuOpen: false,
    loading: false,
    products: null
  };
  componentDidMount() {
    this.setState({ loading: true }, () => {
      API.getList()
        .then(items => this.setState({ products: items, loading: false }))
        .catch(error => this.setState({ error, loading: false }));
    });
  }
  toggleOverlayMenu = () => {
    this.setState({
      isOverlayMenuOpen: !this.state.isOverlayMenuOpen
    });
  };
  render() {
    const { loading, products, error } = this.state;
    return (
      <Router>
        <div className="app">
          <RootStuff
            {...this.state}
            toggleOverlayMenu={this.toggleOverlayMenu}
          />
          <Header />
          <Navigation />
          <main>
            <FadeRoutesWrapper>
              <Switch>
                <Route path="/" exact component={() => <HomePage />} />
                <Route
                  path="/shop"
                  component={() => <ShopPage items={products} />}
                />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/admin/add-product" component={CRUD} />
              </Switch>
            </FadeRoutesWrapper>
          </main>
          <footer>Footer</footer>
        </div>
      </Router>
    );
  }
}

const FadeRoutesWrapper = withRouter(({ children, location, items }) => (
  <div className="fade-routes__wrapper">
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

const RootStuff = ({ isOverlayMenuOpen, toggleOverlayMenu }) => {
  return (
    <React.Fragment>
      <button type="button" onClick={toggleOverlayMenu}>
        Open OverlayMenu
      </button>
      <div className="burgerMenu" id="burgerMenu">
        burgerMenu Overlay test
      </div>
      <OverlayMenu open={isOverlayMenuOpen} onClose={toggleOverlayMenu}>
        <div>burgerMenu test</div>
      </OverlayMenu>
    </React.Fragment>
  );
};
