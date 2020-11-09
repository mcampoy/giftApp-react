import React from 'react'
import { shallow } from "enzyme";
import AddCategory  from "../../components/AddCategory";


describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    })



    test('debe mostrarse correcatamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'hola';

        input.simulate('change', { target: { value } });

        // expect( wrapper.find('p').text().trim() ).toBe( value )
    })

    test('NO debe postear la info on submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'hola';
        const input = wrapper.find('input');

        input.simulate('change', { target: {value} });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        
        // expect(input.text()).toBe('')
        expect(input.prop('value')).toBe('')



    })
    


})