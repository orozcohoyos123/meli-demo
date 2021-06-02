import React from "react";
import PropTypes from "prop-types";
import shipLogo from '../assets/ic_shipping.png';
import { Link } from "react-router-dom";
import "./styles/Products.scss";
import "./styles/ProductsSkeleton.scss"

const Products = ({ products, loading }) => {
  return (
    <section className="detail-wrapper col-11">
      {loading ? (
        <ol className="detail-list">
          {[1, 1, 1, 1].map((number, index) => (
            <li key={index}>
              <div className="items-wrapper">
                <div className="items-image-wrapper">
                  <div className="items-skeleton__img items__image"></div>
                </div>
                <div className="items-content-wrapper">
                  <div className="items-information row">
                    <div className="col">
                      <div className="items-information-price items-information-price-skeleton"></div>
                    </div>
                    <span className="items-information-location items-information-location-skeleton col-sm-auto"></span>
                    <div className="col col-sm-1"></div>
                  </div>
                  <div className="items-description items-description-skeleton"></div>
                  <div className="items-description items-description-skeleton"></div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <ol className="detail-list">
          {products && products.map((product, index) => {
            return (
              <li key={`${product.id}_${index}`} >
                <div className="items-wrapper">
                  <div className="items-image-wrapper">
                    <Link to={`/items/${product.id}`}>
                      <img className="items__image" src={product.picture} alt={product.id} />
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
      )
      }
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool
};

export default Products;
