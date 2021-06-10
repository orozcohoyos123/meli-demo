import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'
import Layout from '../../components/Layout';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../pages/Home';

describe('<Layout />', () => {
    test('Debe renderizar el componente Layout sin hijos.', () => {
        const layout = mount(
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
        );
        
        expect(layout.length).toEqual(1);
    })
 
    test('Debe renderizar el componente Layout con un hijo.', () => {
        const layout = mount(
            <MemoryRouter>
                <Layout>
                    <Home></Home>
                </Layout>
            </MemoryRouter>
        );
        
        const home = layout.find('.home');

        expect(layout.length).toEqual(1);
        expect(home.length).toEqual(1);
    })
});

describe('Layout sanpshot', () => {
    test('Comprobar UI componente Layout', () => {
        const layout = 
            create(
                <MemoryRouter>
                    <Layout />
                </MemoryRouter>
            );
        
        expect(layout.toJSON()).toMatchSnapshot();
    })
});
