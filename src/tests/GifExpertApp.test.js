import React  from 'react';
import GifExpertApp from '../GifExpertApp';
const { shallow } = require("enzyme");


describe('Se realizan pruebas en <GifExpertApp />', () => {

    test('debe mostrar correctamente el comoponente', () => {

        const wrapper = shallow(<GifExpertApp/>);

        expect( wrapper ).toMatchSnapshot();

    })

    test('debe mostrar una lista de categorías', () => {
        
        const categories = [ 'cats', 'dogs' ];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )


    })



})