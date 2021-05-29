import React from 'react';
import "../styles/Common.scss";
import Categories from "../components/Categories";
import ProductDetails from "../components/ProductDetails";

const ItemDetails = () => {
    const categories = ["Electrónica, Audio y Video", "Ipod", "Reproductores"];
    
    return (
        <main className="view-wrapper">
            <div className="view-detail row">
                <Categories items={categories} />
                <ProductDetails/>
            </div>
        </main>
    );
}

export default ItemDetails;