import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const CartWidget = () => {
    return (
        <div className="cartWidgetContainer">  
            <div className='cartWidget'>
                <FontAwesomeIcon icon={faShoppingCart}/>
                <p>
                    0
                </p>
            </div>
        </div>
    );
}

export default CartWidget;