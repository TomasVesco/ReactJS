import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/cartContext';
import { useContext } from 'react';

const CartWidget = () => {

    const { totalCount } = useContext(CartContext);

    const count = totalCount();

    return (
        <div className="cartWidgetContainer">  
            <div className='cartWidget'>
                <FontAwesomeIcon icon={faShoppingCart}/>
                <p>
                    {count}
                </p>
            </div>
        </div>
    );
}

export default CartWidget;