import React from "react";
import shipLogo from '../assets/ic_shipping.png';
import { Link } from "react-router-dom";
import "./styles/Products.scss";

const Products = (props) => {
  return (
    <section className="detail-wrapper col-11">
      <ol className="detail-list">
        {props.products.map((product, index) => {
          return (
            <li key={`${product.id}_${index}`} >
              <div className="items-wrapper">
                <div className="items-image-wrapper">
                  <Link to={`/items/${product.id}`}>
                    <img className="items__image" src={product.picture} alt="" />
                  </Link>
                </div>
                <div className="items-content-wrapper">
                  <div className="items-information row">
                    <Link to={`/items/${product.id}`} className="items-information-price col">
                        {product.price && `${product.price.currency} ${new Intl.NumberFormat("de-DE").format(product.price.amount)}`}
                        {product.free_shipping && (
                          <img className="items-ship-logo" src={shipLogo} alt="" />
                        )}
                    </Link>
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
