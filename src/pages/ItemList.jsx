import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import productsAdapter from '../adapters/products';
import { initialState } from '../initialState';
import "./styles/ItemList.scss";
import "../styles/Common.scss";

/**
 * Component for showing the products list, render the products list and categories components
 * 
 * @component
 * @example
 * return (<ItemList />)
 */
const ItemList = (props) => {
  
  /**
  * function URLSearchParams to get the query string from the url
  */
  const query = new URLSearchParams(props.location.search);
  const params = query.get('search') || props.queryMock;

  /**
   * Hook useState loading, set a flag to indicate a loading state
   * @example setQuery(true)
   */
  const [loading, setLoading] = useState(false);

   /**
  * Hook useState products, set the products list to render in a child component
  * @example setProduct({...productsObject})
  */
  const [products, setProducts] = useState(initialState.products);
  
  /**
  * Hook useState category, set the categories array information to render in a child component
  * @example setCategories([{...category}, {...category}])
  */
  const [categories, setCategories] = useState(initialState.categories);

  /**
   * Hook useEffect to call the function getFilteredProducts from the adapter,
   * it's activated when query string changes const change 
   */
  useEffect(() => {
    setLoading(true);

    productsAdapter.getFilteredProducts(params)
      .then(({ items, categories }) => {
        items !== undefined ? setProducts(items) : setProducts(initialState.products);
        categories.length > 0 && categories !== undefined ? setCategories(categories[0]) : setCategories(initialState.categories)
        setLoading(false);
      })
      .catch(err => {
        //console.error(err);
        setLoading(false);
      });
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
