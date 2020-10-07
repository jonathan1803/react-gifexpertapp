import React, {useState}  from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   
    

    //hook para agregar  a arreglo
    
    const [categories, setCategories] = useState(['One Punch']);

    const handleaAdd = () =>{

        //setCategories = ( ['HunterXHunter', ...categories] ); 
       //setCategories(cats => [...cats, 'hunterXhunter'])//este funciona para enviar otro elemento al arreglo mediante el evento OnClick
    }


        return (
            <>
               

               <h2>GifExpertApp</h2>
               <AddCategory setCategories={setCategories} />

                <hr />

                

                <ol>
           
           {
               categories.map(category => (       
               
              < GifGrid 
              key= {category}
              category={category} 
              
              />


               ))
           }

                </ol>
            </>
        )
    }

export default GifExpertApp