import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import productsAdapter from '../adapters/products';
import { initialState } from '../initialState';
import "./styles/ItemList.scss";
import "../styles/Common.scss";

const ItemList = (props) => {
  const query = new URLSearchParams(props.location.search);
  const params = query.get('search');

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(initialState.products);
  const [categories, setCategories] = useState(initialState.categories);

  useEffect(() => {
    if (params) {
      setLoading(true);

      productsAdapter.getFilteredProducts(params)
        .then(({ items, categories }) => {
          items !== undefined ? setProducts(items) : setProducts(initialState.products);
          categories.length > 0 && categories !== undefined ? setCategories(categories[0]) : setCategories(initialState.categories)
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [params]);

  return (
    <main className="view-wrapper">
      <div className="view-detail row">
        {params &&
          <>
            <Categories items={categories} />
            <Products products={products} loading={loading} />
          </>
        }
      </div>
    </main>
  );
};

export default ItemList;
