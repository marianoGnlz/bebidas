import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const CategoriaContext = createContext();

const CategoriasProvider = (props) => {
    const [categorias , setCategorias ] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await axios(url);
            setCategorias(categorias.data.drinks)
        }
        obtenerCategorias(); 
    }, []);
    return (
        <CategoriaContext.Provider
            value={{
                categorias,

            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriasProvider;