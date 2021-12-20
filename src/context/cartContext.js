import React, { useState } from 'react';

const Context = React.createContext([]);

export const CartContextProvider = ({children}) => {

    const [ imagen, setImagen ] = useState('');
    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState(0);
    const [ id, setId ] = useState(0);
    const [ count, setCount ] = useState(0);

    const setProductoAgregado = (imagen, nombre, precio, id, count) => {
        setImagen(imagen);
        setNombre(nombre);
        setPrecio(precio);
        setId(id);
        setCount(count);
    }

    return(
        <Context.Provider value={{
            productoAdd: {
                imagen,
                nombre,
                precio,
                id,
                count
            },
            setProductoAgregado
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;