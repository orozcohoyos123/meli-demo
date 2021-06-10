import React from "react";
import PropTypes from "prop-types";
import shipLogo from '../assets/ic_shipping.png';
import { Link } from "react-router-dom";
import "./styles/Products.scss";
import "./styles/ProductsSkeleton.scss"

/**
 * Component for showing the products list
 * 
 * @component
 * @prop {Object[]} products[] - Products array
 * @prop {String} products[].id - Product's id
 * @prop {String} products[].title - Product's title
 * @prop {String} products[].condition - Product's condition
 * @prop {Boolean} products[].free_shipping - Product's free ship indicator
 * @prop {String} products[].picture - Product's image url
 * @prop {{currency: string, amount: float, decimals: int}} products[].price - Product's price object
 * @prop {Boolean} loading - Loading property to show skeleton loading animation
 * @example
 * const products = [
 *  {
 *    id: "MLA920543431",
 *    title: "Sony Playstation 4 Slim 1tb Marvel's Spider-man/horizon Zero Dawn Complete Edition/ratchet & Clank  Color Negro"
 *    condition: "new",
 *    free_shipping: true,
 *    location: "Monte Chingolo",
 *    picture: "http://http2.mlstatic.com/D_810459-MLA44182891230_112020-I.jpg",
 *    price:{
 *      currency: "ARS",
 *      decimals: 0,
 *      amount: 74999
 *    },
 *  }
 * ]
 * 
 * const loading = false
 * 
 * return (<Products products={products} loading{loading} />)
 */
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
  /**
  * products array
  */
  products: PropTypes.array,
  /**
    * loading flag to show animation
    */
  loading: PropTypes.bool
};

export default Products;
