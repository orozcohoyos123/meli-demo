import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import  productsAdapter  from '../adapters/products';
import { initialState } from '../initialState';
import "./styles/ItemList.scss";
import "../styles/Common.scss";

const ItemList = (props) => {
  //const queryParams = queryString.parse(props.location.search);
  /* const categories = ["Electrónica, Audio y Video", "Ipod", "Reproductores"];
  
  const products = [
    {
      id: "MLA920543431",
      condition: "new",
      free_shipping: true,
      location: "Monte Chingolo",
      picture: "http://http2.mlstatic.com/D_810459-MLA44182891230_112020-I.jpg",
      price:{
        currency: "ARS",
        decimals: 0,
        amount: 74999
      },
      title: "Sony Playstation 4 Slim 1tb Marvel's Spider-man/horizon Zero Dawn Complete Edition/ratchet & Clank  Color Negro"
    },
   {
      author: {
        name: "Sebastian",
        lastname: "Orozco"
      },
      item: {
        id: "SRSA_A12312S_123ASDs",
        title: "Disco SSD Samsung EVO 3200",
        price: {
          currency: "$",
          amount: 19200,
          decimals: 2,
        },
        picture: "https://http2.mlstatic.com/D_NQ_NP_845292-MLA45260349985_032021-V.webp",
        condition: "Nuevo",
        free_shipping: false,
        sold_quantity: 210,
        description: "Sellado de fábrica.",
        location: "Distrito Federal"
      }
   },
   {
      author: {
        name: "Sebastian",
        lastname: "Orozco"
      },
      item: {
        id: "SRSA_A12312S_123ASDa",
        title: "Disco SSD Samsung EVO 3200",
        price: {
          currency: "$",
          amount: 19200,
          decimals: 2,
        },
        picture: "https://http2.mlstatic.com/D_NQ_NP_845292-MLA45260349985_032021-V.webp",
        condition: "Nuevo",
        free_shipping: false,
        sold_quantity: 210,
        description: "Sellado de fábrica.",
        location: "Distrito Federal"
      }
   },
   {
      author: {
        name: "Sebastian",
        lastname: "Orozco"
      },
      item: {
        id: "SRSA_A12312S_123ASD2a",
        title: "Disco SSD Samsung EVO 3200",
        price: {
          currency: "$",
          amount: 19200,
          decimals: 2,
        },
        picture: "https://http2.mlstatic.com/D_NQ_NP_845292-MLA45260349985_032021-V.webp",
        condition: "Nuevo",
        free_shipping: true,
        sold_quantity: 210,
        description: "Sellado de fábrica.",
        location: "Distrito Federal"
      }
   },
   {
      author: {
        name: "Sebastian",
        lastname: "Orozco"
      },
      item: {
        id: "SRSA_A12312S_123ASDw",
        title: "Disco SSD Samsung EVO 3200",
        price: {
          currency: "$",
          amount: 19200,
          decimals: 2,
        },
        picture: "https://http2.mlstatic.com/D_NQ_NP_845292-MLA45260349985_032021-V.webp",
        condition: "Nuevo",
        free_shipping: false,
        sold_quantity: 210,
        description: "Sellado de fábrica.",
        location: "Distrito Federal"
      }
   }
  ] */

  const query = new URLSearchParams(props.location.search);
  const params = query.get('search');
  
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(initialState.products);
  const [categories, setCategories] = useState(initialState.categories);

  useEffect(() => {
    if (params) {
      setLoading(true);

      productsAdapter.getFilteredProducts(params)
        .then(({ author, items, categories }) => {
          console.log(items)
          items !== undefined ? setProducts(items.slice(0, 4)) : setProducts(initialState.products);
          categories.length > 0 && categories !== undefined ?  setCategories(categories[0]) :  setCategories(initialState.categories)
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
        <Categories items={categories} />
        <Products products={products} loading={loading}/>
      </div>
    </main>
  );
};

export default ItemList;
