import React from "react";
import "./styles/Categories.scss";
import NextLogo from "../assets/ic_next.png";

const Categories = (props) => {
  return (
    <div className="categories col-11">
      <div className="categories__container">
        {props.items.map((item, index) => {
          const lastItem = props.items.length - 1 === index;

          return (
            <React.Fragment key={index}>
              <span
                className={`categories__item ${lastItem ? "bold" : ""}`}
              >
                {item}
              </span>
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
