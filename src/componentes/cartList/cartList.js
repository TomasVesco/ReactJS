import './styles.scss';

import { useContext } from "react";
import CartContext from "../../context/cartContext";

const CartList = () => {
    
    const { productoAdd } = useContext(CartContext); 
    const { imagen, nombre, precio, id, count } = productoAdd;

    return(
        <div className='cardCart'>
            <img src={imagen} alt=""/>
            <p>{nombre}</p>
            <p>{precio}</p>
            <p>{id}</p>
            <p>{count}</p>
        </div>
    )
}

export default CartList;