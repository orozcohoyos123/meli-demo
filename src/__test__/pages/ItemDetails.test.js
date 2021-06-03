import * as React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import productsAdapter  from '../../adapters/products';
import ItemDetails from '../../pages/ItemDetails';
import { act } from "@testing-library/react";

const mockProducts = {
    author: {
        name: "Sebastian",
        lastname: "Orozco"
    },
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
    test('Debe renderizar el componente.', () => {

        const useEffectspy = jest.spyOn(React, "useEffect").mockResolvedValue(mockProducts);

        // bug en jest spyON, no sobreescribe la funcion por lo que no puede espiarla => https://github.com/facebook/jest/issues/6972
        //const spy = jest.spyOn(productsAdapter, 'getProductById'); 
        
        const itemDetails = mount(
            <MemoryRouter>
                <ItemDetails />
            </MemoryRouter>
        );
        
        expect(useEffectspy).toHaveBeenCalled();
        //expect(spy).toHaveBeenCalled();
        expect(itemDetails.length).toEqual(1);
    })

/* 
    test("Debe renderizar el componente simulando useEffect con un mock de productos", async () => {
        await act(async () => {
            jest.spyOn(productsAdapter, 'getProductById').mockResolvedValue(mockProducts);

            const itemDetails = mount(
                <MemoryRouter>
                    <ItemDetails />
                </MemoryRouter>
            );
            
            expect(itemDetails).toMatchSnapshot();
        });
    });  */

    /* test('Debe renderizar el componente.', () => {
        const itemDetails = mount(
            <MemoryRouter>
                <ItemDetails />
            </MemoryRouter>
        );
        
        console.log(itemDetails.debug())
        expect(itemDetails.length).toEqual(1);
    }) */

    /*  test("Debe renderizar el componente", async () => {
         await act(async () => {
             jest.spyOn(ItemsServices, 'fetchItemById').mockResolvedValue(mockItemsDetail);
 
             const wrapper = mount(<ShowDetail history={mockProperties} />);
             expect(wrapper).toMatchSnapshot();
         });
     }); */
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
