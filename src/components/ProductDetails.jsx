import React from 'react';
import "./styles/ProductDetails.scss";

const ProductDetails = () => {
    return (
        <section className="product-wrapper col-11">
            <div className="row">
                <div className="col-12 col-md-8">
                    <div>
                        <img className="product__image" src="https://http2.mlstatic.com/D_NQ_NP_2X_874785-MCO44525297153_012021-F.webp" alt="" />
                    </div>
                </div>
                <div className="product-buy-info col-12 col-md-4">
                    <div className="product-sell-quantity">
                        <span>
                            Nuevo - 234 vendidos
                        </span>
                    </div>
                    <div className="product-name">
                        <span>
                        Disco SSD Samsung EVO 3200
                        </span>
                    </div>
                    <div className="product-price">
                        <span>
                            $19.200
                        </span>
                    </div>
                    <div>
                        <button>
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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, cum laudantium illum ad aliquid neque quo natus placeat, beatae architecto ipsam minima quae aliquam molestias aperiam blanditiis? Accusamus, dolorem eum.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia alias excepturi eaque? Nulla, accusamus. Natus et quas ipsa, recusandae repudiandae ab, quidem quo minus laudantium rem facere quod nesciunt enim?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptates dolore eligendi vitae obcaecati, dicta praesentium? Omnis fugiat iusto nulla autem rerum esse quaerat! Ullam ab necessitatibus tempora eum voluptas.
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;