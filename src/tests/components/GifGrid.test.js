import React from 'react'
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifts } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {

    const category = 'cats';
    
    test('debe hacer match con el componente', () => {

        useFetchGifts.mockReturnValue({
            data:[],
            loading: true
        })

        const wrapper = shallow( <GifGrid category={category} /> )
        expect(wrapper).toMatchSnapshot(); 
    });
    
    test('debe mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/test/1.jpg',
            title: 'Test'
        },
        {
            id: '123',
            url: 'https://localhost/test/1.jpg',
            title: 'Test'
        }];


        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category} /> );
        
        // expect(wrapper).toMatchSnapshot(); 
        expect (wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length)

    })
    


})
