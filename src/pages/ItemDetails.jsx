import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import ProductDetails from "../components/ProductDetails";
import { productsAdapter } from '../adapters/products';
import { useParams } from 'react-router-dom';
import { initialState } from '../initialState';
import "../styles/Common.scss";

const ItemDetails = () => {
    /* const categories = ["Electrónica, Audio y Video", "Ipod", "Reproductores"];
    const product = {
        author: {
            name: "Sebastian",
            lastname: "Orozco"
        },
        item: {
            id: "SRSA_A12312S_123ASD",
            title: "Disco SSD Samsung EVO 3200",
            price: {
                currency: "$",
                amount: 19200,
                decimals: 2,
            },
            picture: "https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp",
            condition: "Nuevo",
            free_shipping: true,
            sold_quantity: 210,
            description: "Sellado de fábrica.",
        }
    }    */

    let { itemId } = useParams();

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(initialState.products[0]);
    const [categories/*, setCategories*/] = useState(initialState.categories);

    useEffect(() => {
        if (itemId) {
          setLoading(true);

          productsAdapter.getProductById(itemId)
            .then(({ item /*, cateogries*/ }) => {
              item !== undefined ? setProduct(item) : setProduct(initialState.products[0]);
              console.log(item)
              //categories.length > 0 && categories !== undefined ?  setCategories(categories[0]) :  setCategories(initialState.categories)
              setLoading(false);
            })
            .catch(err => {
              console.error(err);
              setLoading(false);
            });
        }
      }, [itemId]);


    return (
        <main className="view-wrapper">
            <div className="view-detail row">
                <Categories items={categories} />
                <ProductDetails product={product} loading={loading} />
            </div>
        </main>
    );
}

export default ItemDetails;