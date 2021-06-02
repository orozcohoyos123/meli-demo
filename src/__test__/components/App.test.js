import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'
import App from '../../components/App';

describe('<App />', () => {
    test('Debe renderizar el componente App correctamente.', () => {
        const app = mount(<App />);
        const header = app.find('.header');
        const home = app.find('.home');

        expect(app.length).toEqual(1);
        expect(header.length).toEqual(1);
        expect(home.length).toEqual(1);
    })
});

describe('App sanpshot', () => {
    test('Comprobar UI componente App', () => {
        const app = create(<App/>);
        expect(app.toJSON()).toMatchSnapshot();        
    })
});

//npm test -- --coverage