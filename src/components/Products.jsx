import React from "react";
import "./styles/Products.scss";

const Products = (props) => {
  return (
    <section className="detail-wrapper col-11">
      <ol className="detail-list">
        {props.products.map((p) => {
          const product = p.item;
          return (
            <li key={product.id} >
              <div className="items-wrapper">
                <div className="items-image-wrapper">
                  <img className="items__image" src={product.picture} alt="" />
                </div>
                <div className="items-content-wrapper">
                  <div className="items-information row">
                    <span className="items-information-price col">
                      {`${product.price.currency}${new Intl.NumberFormat("de-DE").format(product.price.amount)}`}
                    </span>
                    <span className="items-information-location col-sm-auto">
                      {product.location}
                    </span>
                    <div className="col col-sm-1"></div>
                  </div>
                  <div className="items-description">{product.title}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Products;
