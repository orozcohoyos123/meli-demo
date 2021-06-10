import React from "react";
import PropTypes from "prop-types";
import "./styles/Categories.scss";
import NextLogo from "../assets/ic_next.png";
import { Link } from "react-router-dom";

/**
 * Component for showing the categories from the products
 * 
 * @component
 
 * @prop {Object[]} items - Categories' list
 * @prop {string} items[].id -  Category's id
 * @prop {string} items[].name - Category's name
 * @example
 *  const items = 
 * [
 *  {id: "MLA1144", name: "Consolas y Videojuegos"},
 *  {id: "MLA438566", name: "Consolas"}
 * ]
 * return (<Categories items={items} />)
 */
const Categories = (props) => {
   return (
    <div className="categories col-11">
      <div className="categories__container">
        {props.items && props.items.map((item, index) => {
          const lastItem = props.items.length - 1 === index;
          return (
            <React.Fragment key={`${item.id}_${index}`}>
              <Link to={`/items?search=${item.name}`}>
                <span
                  className={`categories__item ${lastItem ? "bold" : ""}`}
                >
                  {item.name}
                </span>
              </Link>
              {!lastItem && (
                <img 
                  src={NextLogo}
                  className="categories__separator"
                  alt="Next"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

Categories.propTypes = {
  /**
   * Categories' array
   */
  categories: PropTypes.array
};


export default Categories;
