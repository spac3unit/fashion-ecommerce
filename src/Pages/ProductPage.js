import React, { Component } from "react";
import API from "../modules/firestore-db";
import Page from "./Page";
import Preloader from "../components/Preloader/LinearProgress";

class ProductPage extends Component {
  state = {
    loading: false,
    currentItem: null,
    error: null
  };

  componentWillMount = () => {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, () => {
      API.getDocument(id)
        .then(item =>
          this.setState({ currentItem: { id, ...item }, loading: false })
        )
        .catch(error => this.setState({ error, loading: false }));
    });
  };

  render() {
    const { currentItem } = this.state;
    return (
      <Page title="Product Page 👟" className="product">
        {currentItem ? <Product {...currentItem} /> : <Preloader />}
      </Page>
    );
  }
}

export default ProductPage;

const Product = ({
  id,
  name,
  title,
  price,
  brand,
  color,
  description,
  image_url
}) => (
  <div className="product__container">
    <div className="product__gallery">
      <img
        src={image_url}
        className="product__image product__image--big"
        alt=""
      />

      <div className="product__thumbs">
        <img src="" className="product__image--thumb" alt="" />
      </div>
    </div>
    <div className="product__details">
      <p>{name}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  </div>
);
