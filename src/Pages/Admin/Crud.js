import React, { Component } from "react";
import API from "../../modules/firestore-db";

class AdminCrud extends Component {
  state = {
    name: "",
    brand: "",
    price: "",
    image_url: "",
    category: ""
  };
  handleNewProduct = e => {
    e.preventDefault();
    const { name, brand, price, category, image_url } = this.state;
    API.addDocument({ name, brand, price, category, image_url });
  };
  handleName = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };
  handleBrand = e => {
    e.preventDefault();
    this.setState({ brand: e.target.value });
  };
  handlePrice = e => {
    e.preventDefault();
    this.setState({ price: e.target.value });
  };
  handleCategory = e => {
    e.preventDefault();
    this.setState({ category: e.target.value });
  };
  handleImage = e => {
    e.preventDefault();
    this.setState({ image_url: e.target.value });
  };
  render() {
    const { name, brand, price, image_url } = this.state;
    console.log(name, brand, price, image_url);

    return (
      <div>
        <form action="">
          <div className="formgroup">
            <label htmlFor="productName">Name</label>
            <input
              type="text"
              id="productName"
              value={name}
              onChange={this.handleName}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="productBrand">Brand</label>
            <input type="text" id="productBrand" onChange={this.handleBrand} />
          </div>
          <div className="formgroup">
            <label htmlFor="productPrice">Price</label>
            <input type="text" id="productPrice" onChange={this.handlePrice} />
          </div>
          <div className="formgroup">
            <label htmlFor="productPrice">Category</label>
            <input
              type="text"
              id="productCategory"
              onChange={this.handleCategory}
            />
          </div>
          <div className="formgroup">
            <label htmlFor="productImageUrl">ImageUrl</label>
            <input
              type="text"
              id="productImageUrl"
              onChange={this.handleImage}
            />
          </div>
          <button onClick={this.handleNewProduct}>add</button>
        </form>
      </div>
    );
  }
}

export default AdminCrud;
