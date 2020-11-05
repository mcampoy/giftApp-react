import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import Footer from './Footer';

const GifGrid = ( {category} ) => {

    const {data:gifs, loading} = useFetchGifts( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p className=" loading animate__animated animate__flash" >loading...</p> }

            <div  className="card-grid animate__animated">

                {
                gifs.map(  gif => (
                    <GifGridItem 
                    key={gif.id}
                    { ...gif }
                    />
                    ))
                }
            </div>
            <Footer />
        </>
    )
}

export default GifGrid;