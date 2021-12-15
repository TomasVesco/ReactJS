import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const CartWidget = () => {
    return (
        <div className="cart">  
            <a href="#/"><FontAwesomeIcon icon={faShoppingCart}/>
                <p>
                    0
                </p>
            </a>
        </div>
    );
}

export default CartWidget;