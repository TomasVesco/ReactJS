import './styles.scss';

import CartList from '../cartList/cartList';
import { useContext } from "react";
import CartContext from '../../context/cartContext';

const Cart = () => {

    const { productoAdd } = useContext(CartContext);
    const { item } = productoAdd;

    return(
        <div className='cartContainer'>
            {item.map((productos, index) => <CartList key={`${item.id}${index}`} productos={productos} />)}
        </div>
    )
}

export default Cart;