import React, { useState } from 'react';

const Context = React.createContext([]);

export const CartContextProvider = ({ children }) => {

    const [ item, setItem ] = useState([]);

    const setProductAdd = ( itemToAdd, count ) => {
        if(item.some(items => items.id === itemToAdd.id)){
            const index = item.findIndex(element => element.id === itemToAdd.id);
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

        let price = 0;

        item.forEach(prod => {
            price += prod.price * prod.count;
        });
        return price;
    }

    const clearCart = () => {
        setItem([]);
    }

    const deleteProd = ( name ) => {
        const index = item.findIndex(element => element.nombre === name);
        const temItem = [...item];
        temItem.splice(index, 1);
        setItem(temItem);
    }

    return(
        <Context.Provider value={{
            productAdd: {
                item,
            },
            setProductAdd,
            totalCount,
            totalPrice,
            deleteProd,
            clearCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;