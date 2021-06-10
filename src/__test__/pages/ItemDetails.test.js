import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import productsAdapter from '../../adapters/products';
import ItemDetails from '../../pages/ItemDetails';
import { act } from "@testing-library/react";

const mockProducts = {
    author: {
        name: "Sebastian",
        lastname: "Orozco"
    },
    categories: [
        {
            id: "MLA1144",
            name: "Consolas y Videojuegos"
        },
        {
            id: "MLA438566",
            name: "Consolas"
        }
    ],
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
};

describe('<ItemDetails />', () => {
    test("Debe renderizar el componente sin datos", async () => {
        jest.spyOn(productsAdapter, 'getProductById').mockResolvedValue({});

        await act(async () => {
            const itemDetails = mount(
                <MemoryRouter>
                    <ItemDetails />
                </MemoryRouter>
            );

            expect(itemDetails.length).toEqual(1); 
        });
    });

    test("Debe renderizar el componente con datos completos", async () => {
        jest.spyOn(productsAdapter, 'getProductById').mockResolvedValue(mockProducts);

        await act(async () => {
            const itemDetails = mount(
                <MemoryRouter>
                    <ItemDetails />
                </MemoryRouter>
            );

            expect(itemDetails.length).toEqual(1); 
        });
    });

    test("Debe renderizar el componente sin items", async () => {
        mockProducts.item = undefined;
        jest.spyOn(productsAdapter, 'getProductById').mockResolvedValue(mockProducts);

        await act(async () => {
            const itemDetails = mount(
                <MemoryRouter>
                    <ItemDetails />
                </MemoryRouter>
            );

            expect(itemDetails.length).toEqual(1); 
        });
    });

    test("Debe renderizar el componente sin categorias", async () => {
        mockProducts.categories = [];
        jest.spyOn(productsAdapter, 'getProductById').mockResolvedValue(mockProducts);

        await act(async () => {
            const itemDetails = mount(
                <MemoryRouter>
                    <ItemDetails />
                </MemoryRouter>
            );

            expect(itemDetails.length).toEqual(1); 
        });
    });
});

describe('ItemDetails sanpshot', () => {
    test('Comprobar UI componente ItemDetails', () => {
        const itemDetails = create(
            <MemoryRouter>
                <ItemDetails />
            </MemoryRouter>
        );
        expect(itemDetails.toJSON()).toMatchSnapshot();
    })
});
