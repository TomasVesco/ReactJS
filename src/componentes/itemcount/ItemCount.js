import './styles.scss';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, initial}) => {

    let [count, setCount] = useState(initial);

    const addToCart = () => {
        if(count < stock){
            setCount(count += 1);
        }
    }

    const removeFromCart = () => {
        if(count > 0){
            setCount(count -= 1);
        }
    }

    return (
        <div className="countContainer">
            <div>
                <div>
                    <a href="#/"><FontAwesomeIcon icon={faShoppingCart}/></a>
                    <span>{count}</span>
                </div>
            </div>
            <div>
                <div>
                    <button onClick={addToCart}>+</button>
                </div>
                <div>
                    <button onClick={removeFromCart}>-</button> 
                </div>
            </div>
        </div>
    );
}

export default ItemCount;