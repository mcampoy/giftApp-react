const { renderHook } = require("@testing-library/react-hooks")
const { useFetchGifts } = require("../../hooks/useFetchGifs")


describe('Pruebas en el hook useFetchGifts', () => {

    test('debe retornar el estado inicial', async () => {
    
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts( 'cats' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
    })
    
    test('debe retornar un arreglo de imgs y el loading en false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifts( 'cats' ) );
        
        await waitForNextUpdate();

        const { data, loading } = result.current;
    
        expect( data.length ).toBe(48);
        expect( loading ).toBe(false);


    })
    
    

})