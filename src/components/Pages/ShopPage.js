import React, { Component } from "react";
import ShopSidebar from "../Navigation/ShopSidebar";
import ProductsGrid from "../Products/ProductsGrid";
import Page from "./Page";
class ShopPage extends Component {
  render() {
    const { items } = this.props;
    return (
      <Page title="Shop Page 🛒" className="shop" data-namespace="shop">
        <div className="shop__container">
          <aside className="shop__sidebar">
            <ShopSidebar />
          </aside>
          <section className="shop__content catalog">
            <div className="shop__toolbar">
              <div className="sorter">Sort by</div>
              <div className="viewmodes">gridview listview</div>
            </div>
            <ProductsGrid items={items} className=" products" />
          </section>
        </div>
      </Page>
    );
  }
}

export default ShopPage;
