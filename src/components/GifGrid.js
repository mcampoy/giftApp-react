import React from 'react';
import { useFetchGifts } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ( {category} ) => {

    const {data:gifs, loading} = useFetchGifts( category );

    return (
        <>
            <h6 className="animate__animated animate__fadeIn"> Estos son los resultados sobre "{category}" </h6>

            { loading && <p className=" loading animate__animated animate__flash" >cargando...</p> }

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
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;