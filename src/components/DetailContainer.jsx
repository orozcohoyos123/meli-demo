import React from "react";
import "./styles/DetailContainer.scss";

const DetailContainer = (props) => {
  return (
    <main className="detail__wrapper col-11">
      <section >
        <ol className="detail__item">
        {props.products.map((item) => {
          const product = item.item;
          return (
            <li key={product.id} className="detail__list">
              <div className="items__wrapper">
                <div className="items-image__wrapper">
                  <img className="items-image__image" src={product.picture} alt="" />
                </div>
                <div className="items-content__wrapper">
                  <div className="items-information row">
                    <span className="items-information-price col">
                      {`${product.price.currency} ${product.price.amount}`}
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
    </main>
  );
};

export default DetailContainer;
