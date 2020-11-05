import React, {useState} from 'react';
import AddCategory  from './components/AddCategory';
import Footer from './components/Footer';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'cats' ]);

    return (
        <>
            <h2>Buscá tus gifs favoritos</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <div className="wrapper">
                {
                    categories.map(cat => (
                        <GifGrid 
                        key={cat}
                        category={ cat } /> 
                    ))
                }
            </div>
            <Footer />
        </>
    )

}


export default GifExpertApp;