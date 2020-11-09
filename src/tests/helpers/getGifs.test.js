import {getGifs} from '../../helpers/getGifs';



describe('pruebas con getGifs Fetchs', () => {


    test('debe traer 48 elementos', async () => {


        const gifs = await getGifs('one punch');

        expect(gifs.length).toBe(48);
    })

    // test('debe traer 10 elementos', async () => {


    //     const gifs = await getGifs('');

    //     expect(gifs.length).toBe(0);
    // })
})