import React from 'react';
import PropTypes from "prop-types";
import "./styles/ProductDetails.scss";
import "./styles/ProductDetailsSkeleton.scss"

const ProductDetails = ({ product, loading }) => {
    return (
        <section className="product-wrapper col-11">
            {loading ? (
                <>
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div>
                                <div className="product__image product-skeleton__image"></div>
                            </div>
                        </div>
                        <div className="product-buy-info col-12 col-md-4">
                            <div className="product-sell-quantity product-sell-quantity-skeleton"></div>
                            <div className="product-name product-name-skeleton"></div>
                            <div className="product-price product-price-skeleton"></div>
                            <div className="product-price product-price-skeleton"></div>
                        </div>
                    </div>
                    <div className="product-info-wrapper row">
                        <div className="product-info-title col-12">
                            <div className="product-info-title-skeleton"></div>
                        </div>
                        <div className="product-info-detail product-info-detail-skeleton col-12 col-md-8"></div>
                        <div className="product-info-detail product-info-detail-skeleton col-12 col-md-8"></div>
                        <div className="product-info-detail product-info-detail-skeleton col-12 col-md-8"></div>
                        <div className="product-info-detail product-info-detail-skeleton col-12 col-md-8"></div>
                        <div className="product-info-detail product-info-detail-skeleton col-12 col-md-8"></div>
                    </div>
                </>
            ) : (
                <>
                    {product &&
                        <>
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <div>
                                        <img className="product__image" src={product.picture} alt="" />
                                    </div>
                                </div>
                                <div className="product-buy-info col-12 col-md-4">
                                    <div className="product-sell-quantity">
                                        <span>
                                            { product.condition } 
                                        </span>
                                        <span>
                                            &nbsp; - &nbsp; {product.sold_quantity} &nbsp;
                                        </span>
                                        <span>
                                            vendido{(product.sold_quantity > 1 || product.sold_quantity === 0) ? 's' : ''}
                                        </span>
                                    </div>
                                    <div className="product-name">
                                        <span>
                                            {product.title}
                                        </span>
                                    </div>
                                        {product.price && 
                                            <div className="product-price">
                                                {product.price.currency} {new Intl.NumberFormat("de-DE").format(product.price.amount)}
                                            </div>
                                        }
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
                        </>
                    }
                </>
            )}
        </section>
    );
}

ProductDetails.propTypes = {
    product: PropTypes.object,
    loading: PropTypes.bool
};

export default ProductDetails;