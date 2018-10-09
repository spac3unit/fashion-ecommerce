import React, { Component } from "react";
import Api from "../../modules/firestore-db";
import Page from "./Page";

class ProductPage extends Component {
  state = {
    currentItem: null
  };

  componentWillMount = async () => {
    const { id } = this.props.match.params;
    Api.getDocument(id)
      .then(item =>
        this.setState({
          currentItem: {
            id,
            ...item
          }
        })
      )
      .catch(error => console.log("Error getting document:", error));
  };

  render() {
    const { currentItem } = this.state;
    return (
      <Page title="Product Page" className="product">
        <Product {...currentItem} />
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
