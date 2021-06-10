import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import ProductDetails from "../components/ProductDetails";
import productsAdapter from '../adapters/products';
import { useParams } from 'react-router-dom';
import { initialState } from '../initialState';
import "../styles/Common.scss";

/**
 * Component for showing the product details, render the products and categories components
 * 
 * @component
 * @example
 * return (<ItemDetails />)
 */
const ItemDetails = () => {
  /**
  * Hook useParams to get the product id from the url 
  */
  let { itemId } = useParams();

  /**
   * Hook useState loading, set a flag to indicate a loading state
   * @example setQuery(true)
   */
  const [loading, setLoading] = useState(false);

  /**
  * Hook useState product, set the product information to render in a child component
  * @example setProduct({...productDetails})
  */
  const [product, setProduct] = useState(initialState.products[0]);
  
  /**
  * Hook useState category, set the categories array information to render in a child component
  * @example setCategories([{...category}, {...category}])
  */
  const [category, setCategories] = useState(initialState.categories);

   /**
   * Hook useEffect to call the function getProductById from the adapter,
   * it's activated when product id const change 
   */
  useEffect(() => {
    setLoading(true);

    productsAdapter.getProductById(itemId)
      .then(({ item, categories }) => {
        item !== undefined ? setProduct(item) : setProduct(initialState.products[0]);
        categories.length > 0 ? setCategories(categories) : setCategories(initialState.categories);
        setLoading(false);
      })
      .catch(err => {
        //console.error(err);
        setLoading(false);
      });
  }, [itemId]);


  return (
    <main className="view-wrapper">
      <div className="view-detail row">
        <Categories items={category} />
        <ProductDetails product={product} loading={loading} />
      </div>
    </main>
  );
}

export default ItemDetails;