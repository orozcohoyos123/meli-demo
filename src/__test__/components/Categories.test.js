import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'
import Categories from '../../components/Categories';
import { MemoryRouter } from 'react-router-dom';

const mockCategories = [
    {id: "MLA1144", name: "Consolas y Videojuegos"},
    {id: "MLA438566", name: "Consolas"}
]

describe('<Categories />', () => {
    test('Debe renderizar el componente Categories con mock de categorias', () => {
        const categories = mount(
            <MemoryRouter>
                <Categories items={mockCategories} />
            </MemoryRouter>
        );

        const items = categories.find('.categories__item');
        expect(categories.length).toEqual(1);
        expect(items.length).toEqual(mockCategories.length);
    })

    test('Deben haber cero items si no se envía el mock de categorias', () => {
        const categories = mount(
            <MemoryRouter>
                <Categories />
            </MemoryRouter>
        );

        const items = categories.find('.categories__item');
        expect(items.length).toEqual(0);
    })
});

describe('Categories sanpshot', () => {
    test('Comprobar UI componente Categories', () => {
        const categories = 
            create(
                <MemoryRouter>
                    <Categories items={mockCategories} />
                </MemoryRouter>
            );
        
        expect(categories.toJSON()).toMatchSnapshot();
    })
});
