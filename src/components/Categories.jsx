import React from "react";
import "./styles/Categories.scss";
import NextLogo from "../assets/ic_next.png";
import { Link } from "react-router-dom";

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

export default Categories;
