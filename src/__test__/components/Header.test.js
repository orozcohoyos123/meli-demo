import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import {BrowserRouter} from 'react-router-dom';

describe('<Header />', () => {
    test('Render del componente Header', () => {
        const header = mount(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const logo = header.find('.header__wrapper');
        const searchBox = header.find('.searchBox');
        
        expect(header.length).toEqual(1);
        expect(logo.length).toEqual(1);
        expect(searchBox.length).toEqual(1);
    })
});

describe('Header sanpshot', () => {
    test('Comprobar UI componente Header', () => {
        const header = create(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(header.toJSON()).toMatchSnapshot();        
    })
});
