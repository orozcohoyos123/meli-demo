import React from "react";
import Categories from "../components/Categories";
import DetailContainer from "../components/DetailContainer";
import "./styles/ItemsResult.scss";
//import queryString from 'query-string';

const ItemsResult = (props) => {
  //const queryParams = queryString.parse(props.location.search);
  const categories = ["Electrónica, Audio y Video", "Ipod", "Reproductores"];
  const products = [
    {
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
        id: "SRSA_A12312S_123ASDs",
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
        id: "SRSA_A12312S_123ASDa",
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
        free_shipping: true,
        sold_quantity: 210,
        description: "Sellado de fábrica.",
        location: "Distrito Federal"
      }
   }
  ]
   
  return (
    <div className="itemsResult">
      <div className="itemsResult__wrapper row">
        <Categories items={categories} />
        <DetailContainer products={products}/>
      </div>
    </div>
  );
};

export default ItemsResult;
