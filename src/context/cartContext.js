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

    const totalCount = () => {
        let count = 0;
        item.forEach(prod => {
            count += prod.count;
        });
        return count;
    }

    const totalPrice = () => {
        let precio = 0;
        item.forEach(prod => {
            precio += prod.precio * prod.count;
        });
        return precio;
    }

    const eliminarProd = ( nombre ) => {
        const index = item.findIndex(elemento => elemento.nombre === nombre);
        const temItem = [...item];
        temItem.splice(index, 1);
        setItem(temItem);
    }

    return(
        <Context.Provider value={{
            productoAdd: {
                item,
            },
            setProductoAgregado,
            totalCount,
            totalPrice,
            eliminarProd
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;