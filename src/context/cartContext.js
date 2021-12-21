import React, { useState } from 'react';

const Context = React.createContext([]);

export const CartContextProvider = ({children}) => {

    const [ item, setItem ] = useState([]);

    const setProductoAgregado = ( itemToAdd, count ) => {
        if(item.some(items => items.id === itemToAdd.id)){
            const index = item.findIndex(elemento => elemento.id === itemToAdd.id);
            const temItem = [...item];
            temItem[index].count += count;
            setItem(temItem);
        }else{
            setItem((state) => [...state, itemToAdd]);
        }
    }

    return(
        <Context.Provider value={{
            productoAdd: {
                item
            },
            setProductoAgregado
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;