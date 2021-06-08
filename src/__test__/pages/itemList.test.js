import * as React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import BrowserRouterMock from '../../__mocks__/BrowserRouterMock'
import productsAdapter from '../../adapters/products';
import ItemList from '../../pages/ItemList';

const mockProducts = {
    author: {
        name: "Sebastián",
        lastname: "Orozco Hoyos"
    },
    categories: [
        [
            {
                id: "MLA1144",
                name: "Consolas y Videojuegos"
            },
            {
                id: "MLA438566",
                name: "Consolas"
            }
        ]
    ],
    items: [
        {
            id: "MLA920543431",
            title: "Sony Playstation 4 Slim 1tb Marvel's Spider-man/horizon Zero Dawn Complete Edition/ratchet & Clank  Color Negro",
            price: {
                currency: "ARS",
                amount: 74999,
                decimals: null
            },
            picture: "http://http2.mlstatic.com/D_810459-MLA44182891230_112020-I.jpg",
            condition: "new",
            free_shipping: true,
            location: "Monte Chingolo"
        },
        {
            id: "MLA879214753",
            title: "Sony Playstation 4 Slim 1tb Standard  Color Jet Black",
            price: {
                currency: "ARS",
                amount: 64999,
                decimals: null
            },
            picture: "http://http2.mlstatic.com/D_752561-MLA32731813778_112019-I.jpg",
            condition: "new",
            free_shipping: true,
            location: "CABA"
        },
        {
            id: "MLA883576177",
            title: "Sony Playstation 4 1tb Standard  Color Jet Black",
            price: {
                currency: "ARS",
                amount: 67999,
                decimals: null
            },
            picture: "http://http2.mlstatic.com/D_781463-MLA40671062654_022020-I.jpg",
            condition: "new",
            free_shipping: true,
            location: "Ramos Mejía"
        }
    ]
}

describe('<ItemList />', () => {
    test('Debe renderizar el componente.', () => {

        const useEffectspy = jest.spyOn(React, "useEffect").mockResolvedValue(mockProducts);

        // bug en jest spyON, no sobreescribe la funcion por lo que no puede espiarla => https://github.com/facebook/jest/issues/6972
        //const spy = jest.spyOn(productsAdapter, 'getFilteredProducts'); 
        
        const itemList = mount(
            <BrowserRouterMock>
                <ItemList />
            </BrowserRouterMock>
        );
        
        expect(useEffectspy).toHaveBeenCalled();
        //expect(spy).toHaveBeenCalled();
        expect(itemList.length).toEqual(1);
    });
});
    
describe('ItemList sanpshot', () => {
    test('Comprobar UI componente ItemList', () => {
        const itemList = create(
            <BrowserRouterMock>
                <ItemList />
            </BrowserRouterMock>
        );
        expect(itemList.toJSON()).toMatchSnapshot();
    })
});
