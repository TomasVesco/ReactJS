import './styles.scss';
// import CartList from '../cartList/cartList';

import { useContext } from "react";
import CartContext from '../../context/cartContext';
// import { useEffect, useState } from 'react';

const Cart = () => {

    const { productoAdd } = useContext(CartContext);
    const { imagen, nombre, precio, id, count } = productoAdd;

    return(
        <div className='cartContainer'>
            <img src={imagen} alt=""/>
            <p>{nombre}</p>
            <p>{precio}</p>
            <p>{id}</p>
            <p>{count}</p>
        </div>
    )
}

export default Cart;