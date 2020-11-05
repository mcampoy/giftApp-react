import React,  {useState} from 'react';
import PropTypes from 'prop-types';


const AddCategory = ( { setCategories } ) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories])
            setInputValue('');
        }
        // console.log('Submit hecho')
    }

    return (
        <form className="form" onSubmit={ handleSubmit }>
            <input
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
                // autoFocus
                placeholder="Escribí aquí tu búsqueda y presioná enter"
                />
                {/* <p>{ inputValue }</p> */}
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
