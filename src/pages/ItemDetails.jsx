import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import ProductDetails from "../components/ProductDetails";
import productsAdapter from '../adapters/products';
import { useParams } from 'react-router-dom';
import { initialState } from '../initialState';
import "../styles/Common.scss";

const ItemDetails = () => {
  let { itemId } = useParams();

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(initialState.products[0]);
  const [category, setCategories] = useState(initialState.categories);

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