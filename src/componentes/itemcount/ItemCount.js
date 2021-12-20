import './styles.scss';
import React, {useState} from 'react';

const ItemCount = ({stock, initial, onConfirm}) => {

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
                    <div>
                        <button onClick={removeFromCart}>-</button> 
                    </div>
                    <div>
                        <span>{count}</span>
                    </div>
                    <div>
                        <button onClick={addToCart}>+</button>
                    </div>
                </div>
                <div>
                    <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;