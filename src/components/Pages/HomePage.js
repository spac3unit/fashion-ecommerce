import React from "react";
import Page from "./Page";

const HomePage = () => {
  return (
    <Page title="Home Page" className="home">
      <section>
        <Content />
        <PopularProducts />
        <SalesBanner />
      </section>
    </Page>
  );
};

export default HomePage;

const SalesBanner = () => (
  <section className="sales-banner">
    <h4 className="sales-banner__title">-10% For All Russian Students</h4>
    <p className="sales-banner__title">New on Bootwear.com</p>
  </section>
);

const PopularProducts = () => (
  <section className="popular">
    <h4>ПОПУЛЯРНЫЕ ТОВАРЫ</h4>
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </section>
);
const Content = () => {
  return (
    <div className="custom-grid--thirds">
      <div className="element">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa adipisci
        obcaecati, dolorem dicta voluptas, aliquam magnam ducimus vero, culpa
        suscipit atque quasi reprehenderit dolores quaerat eaque. Accusantium
        harum neque impedit.
      </div>
      <div className="element">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa adipisci
        obcaecati, dolorem dicta voluptas, aliquam magnam ducimus vero, culpa
        suscipit atque quasi reprehenderit dolores quaerat eaque. Accusantium
        harum neque impedit.
      </div>
      <div className="element">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa adipisci
        obcaecati, dolorem dicta voluptas, aliquam magnam ducimus vero, culpa
        suscipit atque quasi reprehenderit dolores quaerat eaque. Accusantium
        harum neque impedit.
      </div>
    </div>
  );
};
