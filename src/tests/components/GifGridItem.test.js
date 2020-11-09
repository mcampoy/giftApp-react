import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Se prueban el componente GifGridItem', () => {

    const title = 'Soy un párrafo';
    const url = 'https//urldeprueba.jpg';
    let wrapper = shallow( < GifGridItem  title={ title } url={url}/> );

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    // test('debe tener un párrafo con el título', () => {

    //     const p = wrapper.find('p');
    //     expect( p.text().trim() ).toBe( title );

    // });

    test('debe tener la imagen igual al url y alt de las props', () => {

        const img = wrapper.find('img');
        // console.log(img.props().src)
        // console.log(img.prop('src'))

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe tener la clase animate_fadeIn', () => {

        const div = wrapper.find('div');

        // expect(div.hasClass('animate__fadeIn')).toBeTruthy();

        const className = div.prop('className');

        expect( className.includes('animate__fadeIn')).toBe(true);


    })
    



})