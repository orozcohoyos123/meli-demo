import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom';
import Products from '../../components/Products';

const mockProducts = [
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
    }
]

describe('<Products />', () => {
    test('Debe renderizar los skeleton items del componente Products sin mock de productos y con parametro cargando en true.', () => {
        const products = shallow(<Products loading={true}/>);
        const skeleton_items = products.find('.items-skeleton__img');
        const items = products.find('img');

        expect(products.length).toEqual(1);
        expect(skeleton_items.length).toEqual(4);
        expect(items.length).toEqual(0);
    }) 

    test('No debe renderizar items del componente Products sin mock de productos y con parametro cargando en false.', () => {
        const products = shallow(<Products loading={false}/>);
        const items = products.find('items-wrapper');

        expect(products.length).toEqual(1);
        expect(items.length).toEqual(0);
    }) 

    test('Debe renderizar items del componente Products con mock de productos y con parametro cargando en false.', () => {
        const products = mount(
            <MemoryRouter>
                <Products products={mockProducts} loading={false}/>
            </MemoryRouter>
        );
        const skeleton_items = products.find('.items-skeleton__img');
        const items = products.find('img').filter('.items__image');

        expect(products.length).toEqual(1);
        expect(skeleton_items.length).toEqual(0);
        expect(items.length).toEqual(mockProducts.length);
    }) 

    test('No debe renderizar items del componente Products con mock de productos y con parametro cargando en true.', () => {
        const products = shallow(<Products loading={true}/>);
        const skeleton_items = products.find('.items-skeleton__img');
        const items = products.find('img');

        expect(products.length).toEqual(1);
        expect(skeleton_items.length).toEqual(4);
        expect(items.length).toEqual(0);
    })  
});

describe('Products sanpshot', () => { 
    test('Comprobar UI componente Products', () => {
        const products = create(
            <MemoryRouter>
                <Products products={mockProducts} loading={false}/>
            </MemoryRouter>
        );
        
        expect(products.toJSON()).toMatchSnapshot();
    })
});
