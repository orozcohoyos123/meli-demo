import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'
import Categories from '../../../components/Categories';
import BrowserRouterMock from '../../../__mocks__/BrowserRouterMock';

const mockCategories = [
    {id: "MLA1144", name: "Consolas y Videojuegos"},
    {id: "MLA438566", name: "Consolas"}
]

describe('<Categories />', () => {
    test('Debe renderizar el componente Categories con mock de categorias', () => {
        const categories = mount(
            <BrowserRouterMock>
                <Categories items={mockCategories} />
            </BrowserRouterMock>
        );
        
        expect(categories.length).toEqual(1);
    })

    test('Debe fallar el render del componente Categories sin mock de categorias', () => {
        try {
            const categories = mount(
                <BrowserRouterMock>
                    <Categories />
                </BrowserRouterMock>
            );
    
            expect(true).toBe(false);
        } 
        catch (e) {
            expect(e).toEqual(new Error("Cannot read property 'map' of undefined"));
        }
    })
});

describe('Categories sanpshot', () => {
    test('Comprobar UI componente Categories', () => {
        const categories = 
            create(
                <BrowserRouterMock>
                    <Categories items={mockCategories} />
                </BrowserRouterMock>
            );
        
        expect(categories.toJSON()).toMatchSnapshot();
    })
});
