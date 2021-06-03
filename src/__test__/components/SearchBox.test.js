import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import ReactRouterDOM, {Router} from 'react-router-dom';
import SearchBox from '../../components/SearchBox';

import {createMemoryHistory} from 'history'

describe('<SearchBox />', () => {
    test('Debe renderizar el componente SearchBox.', () => {
        const searchBox = mount(<SearchBox />);
        const input = searchBox.find('.searchBox__input');
        const button = searchBox.find('.searchBox__button');

        expect(searchBox.length).toEqual(1);
        expect(input.length).toEqual(1);
        expect(button.length).toEqual(1);
    }) 

    test('No debe realizar el evento submit si no llena el input.', () => {
        const handleSubmit = jest.fn();
        const wrapper = mount(<SearchBox onSubmit={handleSubmit}/>);
        const form = wrapper.find('form');

        form.simulate('submit')
        expect(handleSubmit).toHaveBeenCalledTimes(0); 
    })   

    test('Debe realizar el evento submit si llena el input.', () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push') 

        const wrapper = mount(
            <Router history={history}>
                <SearchBox/>
            </Router>
        );
        const form = wrapper.find('form');

        wrapper.find('input').simulate('change', { target: { value: 'Ps4' } });
        form.simulate('submit')
        expect(pushSpy).toHaveBeenCalledWith({"pathname": "/items", "search": "?search=Ps4"})
    }) 
});

describe('SearchBox sanpshot', () => { 
    test('Comprobar UI componente SearchBox', () => {
        const searchBox = create(<SearchBox />);
        expect(searchBox.toJSON()).toMatchSnapshot();
    })
});
