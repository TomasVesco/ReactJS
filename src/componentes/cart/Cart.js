import './styles.scss';

import { useContext } from "react";
import CartContext from '../../context/cartContext';

const Cart = () => {

    const { notification, setNotification } = useContext(CartContext);

    return(
        <div className='cartContainer' onClick={() => setNotification('success', '')}>
            {notification.message}
            <p>Próximamente...</p>
        </div>
    )
}

export default Cart;