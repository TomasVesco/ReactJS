import React, { useState } from 'react';

const Context = React.createContext([]);

export const CartContextProvider = ({children}) => {

    const [ item, setItem ] = useState([]);
    const [ count, setCount] = useState(0);

    const setProductoAgregado = ( item, count ) => {
        setItem(item);
        setCount(count);
    }

    return(
        <Context.Provider value={{
            productoAdd: {
                item,
                count
            },
            setProductoAgregado
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;