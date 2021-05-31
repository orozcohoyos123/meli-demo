import React from 'react';
import "../styles/Common.scss";
import Categories from "../components/Categories";
import ProductDetails from "../components/ProductDetails";

const ItemDetails = () => {
    const categories = ["Electrónica, Audio y Video", "Ipod", "Reproductores"];
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
    }

    return (
        <main className="view-wrapper">
            <div className="view-detail row">
                <Categories items={categories} />
                <ProductDetails product={product.item}/>
            </div>
        </main>
    );
}

export default ItemDetails;