import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
const [inputValue, setInputValue] = useState('');

const handleImputChange = (e) => { //actualiza el estado del input
setInputValue(e.target.value);

}

const handleSubmit = (e) => {  
    e.preventDefault(); //prevenir el comportamiento por defecto del form, y no hacer refresh completo del navegador
     
    if (inputValue.trim().length > 2){

  setCategories(cats => [inputValue, ...cats] );// evia el dato que ingresamos al input, a el comonente principal GifExpert
   setInputValue('');
    }
    
}


    return (
        
        <form onSubmit={handleSubmit}>

            <h2>Add Category</h2>
   
              
                 <input  
                 type="text"
                 value={inputValue}
                 onChange= {handleImputChange} //
                 />
                 
        </form>
                
        
    )
}

AddCategory.prototype = {

    setCategories: PropTypes.func.isRequired

}