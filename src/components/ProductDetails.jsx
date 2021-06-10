import React from 'react';
import PropTypes from "prop-types";
import "./styles/ProductDetails.scss";
import "./styles/ProductDetailsSkeleton.scss"

/**
 * Component for showing the product detail
 * 
 * @component
 * @prop {Object} product - Product details object
 * @prop {String} product.id - Product's id
 * @prop {String} product.title - Product's title
 * @prop {String} product.condition - Product's condition
 * @prop {String} product.description - Product's description
 * @prop {Boolean} product.free_shipping - Product's free ship indicator
 * @prop {String} product.picture - Product's image url
 * @prop {{currency: string, amount: float, decimals: int}} product.price - Product's price object
 * @prop {String} product.sold_quantity - Product's sold quantity
 * @prop {Boolean} loading - Loading property to show skeleton loading animation
 * @example
 * const product = 
 * {
 *  id: "MLA921510488",
 *  title: "Microsoft Xbox Series X 1tb  Color Negro"
 *  condition: "new",
 *  description: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \n\nLa nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.\n\nAdaptada a tus necesidades\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. \nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.\n\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.",
 *  free_shipping: true,
 *  picture: "http://http2.mlstatic.com/D_963862-MLA45041918050_032021-I.jpg",
 *  price: { currency: "ARS", amount: 264999, decimals: 0 },
 *  sold_quantity: 0,
 * }
 * 
 * const loading = false
 * 
 * return (<ProductDetails product={product} loading{loading} />)
 */
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
    /**
    * product detail information 
    */
    product: PropTypes.object,
    /**
    * loading flag to show animation
    */
    loading: PropTypes.bool
};

export default ProductDetails;