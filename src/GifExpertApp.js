import React, {useState} from 'react';
import AddCategory  from './components/AddCategory';
import Footer from './components/Footer';
import GifGrid from './components/GifGrid';


const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState([ 'cats' ]);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <h2>Buscá tus GIFs favoritos</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <div className="wrapper">
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={ category } /> 
                    ))
                }
            </div>
            <Footer />
        </>
    )

}

export default GifExpertApp;