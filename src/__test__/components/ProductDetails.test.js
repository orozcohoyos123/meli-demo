import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ProductDetails from '../../components/ProductDetails';

let mockProductDetail = {
    condition: "new",
    description: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \n\nLa nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.\n\nAdaptada a tus necesidades\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. \nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.\n\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.",
    free_shipping: true,
    id: "MLA921510488",
    picture: "http://http2.mlstatic.com/D_963862-MLA45041918050_032021-I.jpg",
    price: { currency: "ARS", amount: 264999, decimals: 0 },
    sold_quantity: 0,
    title: "Microsoft Xbox Series X 1tb  Color Negro"
}

describe('<ProductDetails />', () => {
    test('Debe renderizar los skeleton items del componente ProductDetails sin mock de producto y con parametro cargando en true.', () => {
        const productDetails = shallow(<ProductDetails loading={true} />);
        const skeleton_items = productDetails.find('.product-skeleton__image');
        const img = productDetails.find('img');

        expect(productDetails.length).toEqual(1);
        expect(skeleton_items.length).toEqual(1);
        expect(img.length).toEqual(0);
    })

    test('no debe renderizar los skeleton items del componente ProductDetails sin mock de producto y con parametro cargando en false.', () => {
        mockProductDetail = {}
        const productDetails = shallow(<ProductDetails loading={false} />);
        const skeleton_items = productDetails.find('.product-skeleton__image');
        const img = productDetails.find('.product__image');

        expect(productDetails.length).toEqual(1);
        expect(skeleton_items.length).toEqual(0);
        expect(img.length).toEqual(0);
    })

    test('Debe renderizar los items del componente ProductDetails con mock de producto y con parametro cargando en false.', () => {
        const productDetails = shallow(<ProductDetails product={mockProductDetail} loading={false} />);
        const skeleton_items = productDetails.find('.product-skeleton__image');
        const img = productDetails.find('img');

        expect(productDetails.length).toEqual(1);
        expect(skeleton_items.length).toEqual(0);
        expect(img.length).toEqual(1);
    })

    test('Debe renderizar los skeleton items del componente ProductDetails con mock de producto y con parametro cargando en true.', () => {
        const productDetails = shallow(<ProductDetails product={mockProductDetail} loading={true} />);
        const skeleton_items = productDetails.find('.product-skeleton__image');
        const img = productDetails.find('img');

        expect(productDetails.length).toEqual(1);
        expect(skeleton_items.length).toEqual(1);
        expect(img.length).toEqual(0);
    })

    test('Debe renderizar la palabra "vendidos" si la cantidad vendida del producto es igual mayor a uno.', () => {
        mockProductDetail.sold_quantity = 2;
        const productDetails = shallow(<ProductDetails product={mockProductDetail} loading={false} />);
        const sold_quantity = productDetails.find('.product-sell-quantity').children().last().text();

        expect(productDetails.length).toEqual(1);
        expect(sold_quantity).toEqual("vendidos");
    })

    test('Debe renderizar el precio si la propiedad de precio no es null.', () => {
        mockProductDetail.price = undefined;
        const productDetails = mount(<ProductDetails product={mockProductDetail} loading={false} />);
        const priceText = productDetails.find('.product-price');

        //console.log(productDetails.debug());
        expect(productDetails.length).toEqual(1);
        expect(priceText.length).toEqual(0);
    }) 

    test('Debe renderizar el precio si la propiedad de precio no es null.', () => {
        mockProductDetail.price = { currency: "ARS", amount: 264999, decimals: 0 };
        const productDetails = mount(<ProductDetails product={mockProductDetail} loading={false} />);
        const priceText = productDetails.find('.product-price');

        expect(productDetails.length).toEqual(1);
        expect(priceText.length).toEqual(1);
    }) 

    /*  test('No debe renderizar el precio si la propiedad de precio es null.', () => {
         mockProductDetail = {
             condition: "new",
             description: "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \n\nLa nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te divertís con jugadores de todo el mundo.\n\nAdaptada a tus necesidades\nGuardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 1 TB. \nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.\n\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables.",
             free_shipping: true,
             id: "MLA921510488",
             picture: "http://http2.mlstatic.com/D_963862-MLA45041918050_032021-I.jpg",
             sold_quantity: 0,
             title: "Microsoft Xbox Series X 1tb  Color Negro"
         }
 
         const productDetails = shallow(<ProductDetails product={mockProductDetail} loading={false}/>);
         const priceText = productDetails.find('.product-price');
         
         expect(productDetails.length).toEqual(1);
         expect(priceText.length).toEqual(0);
     }) 
 
     test('Debe renderizar el precio si la propiedad de precio no es null.', () => {
         const productDetails = shallow(<ProductDetails product={mockProductDetail} loading={false}/>);
         const priceText = productDetails.find('.product-price');
         
         console.log(productDetails.debug());
         expect(productDetails.length).toEqual(1);
         expect(priceText.length).toEqual(1);
     }) 
     */
})

describe('ProductDetails sanpshot', () => {
    test('Comprobar UI componente ProductDetails', () => {
        const productDetails = create(<ProductDetails loading={false} />);

        expect(productDetails.toJSON()).toMatchSnapshot();
    })
});
