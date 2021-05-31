import React from 'react';
import "./styles/ProductDetails.scss";

const ProductDetails = ({product}) => {
    return (
        <section className="product-wrapper col-11">
            <div className="row">
                <div className="col-12 col-md-8">
                    <div>
                        <img className="product__image" src={product.picture} alt="" />
                    </div>
                </div>
                <div className="product-buy-info col-12 col-md-4">
                    <div className="product-sell-quantity">
                        <span>
                            {product.condition === "new" ? "Nuevo" : "Usado"} - {product.sold_quantity} vendido{(product.sold_quantity > 1 || product.sold_quantity === 0) ? 's' : ''}
                        </span>
                    </div>
                    <div className="product-name">
                        <span>
                            {product.title}
                        </span>
                    </div>
                    <div className="product-price">
                        <span>
                            {product.price && `${product.price.currency} ${new Intl.NumberFormat("de-DE").format(product.price.amount)}`}
                        </span>
                    </div>
                    <div>
                        <button className="ripple">
                            Comprar
                       </button>
                    </div>
                </div>
            </div>
            <div className="product-info-wrapper row">
                <div className="product-info-title col-12">
                    <span>
                        Descripción del producto
                    </span>
                </div>
                <div className="product-info-detail col-12 col-md-8">
                    <span >
                        {product.description}
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;