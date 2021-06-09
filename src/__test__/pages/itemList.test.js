import * as React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import productsAdapter from '../../adapters/products';
import BrowserRouterMock from '../../__mocks__/BrowserRouterMock';
import ItemList from '../../pages/ItemList';
import { act } from "@testing-library/react";

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
    test("Debe renderizar el componente sin datos", async () => {
        jest.spyOn(productsAdapter, 'getFilteredProducts').mockResolvedValue({});

        await act(async () => {
            const itemList = mount(
                <BrowserRouterMock>
                    <ItemList />
                </BrowserRouterMock>
            );

            expect(itemList.length).toEqual(1); 
        });
    });

    test("Debe renderizar el componente con datos completos", async () => {
        jest.spyOn(productsAdapter, 'getFilteredProducts').mockResolvedValue(mockProducts);

        await act(async () => {
            const itemList = mount(
                <BrowserRouterMock>
                    <ItemList />
                </BrowserRouterMock>
            );

            expect(itemList.length).toEqual(1); 
        });
    });

    test("Debe renderizar el componente sin items", async () => {
        mockProducts.items = undefined;
        jest.spyOn(productsAdapter, 'getFilteredProducts').mockResolvedValue(mockProducts);

        await act(async () => {
            const itemList = mount(
                <BrowserRouterMock>
                    <ItemList />
                </BrowserRouterMock>
            );

            expect(itemList.length).toEqual(1); 
        });
    });

    test("Debe renderizar el componente sin categorias", async () => {
        mockProducts.categories = [];
        jest.spyOn(productsAdapter, 'getFilteredProducts').mockResolvedValue(mockProducts);

        await act(async () => {
            const itemList = mount(
                <BrowserRouterMock>
                    <ItemList />
                </BrowserRouterMock>
            );

            expect(itemList.length).toEqual(1); 
        });
    });

    /* test("Debe renderizar el componente sobreescribiendo URLSearchParams", async () => {
        jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue("search");
        
        await act(async () => {
            const itemList = mount(
                <BrowserRouterMock>
                    <ItemList />
                </BrowserRouterMock>
            );

            expect(itemList.length).toEqual(1); 
        });
    });  */
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
