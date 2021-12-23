import './styles.scss';

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, initial, onConfirm}) => {

    let [count, setCount] = useState(initial);
    const [hayItem, setHayItem ] = useState(true);

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

    const actualizarComponente = () => {
        if(count !== 0){
            setHayItem(false);
        }
    }

    return (
        <>
        {!hayItem ?                     
            <div>
                <Link to='/Cart' className='finCompra'>Terminar la compra</Link>
            </div>
            : 
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
                        <button onClick={(() => {
                            onConfirm(count);
                            actualizarComponente();
                        })}>Agregar al carrito</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default ItemCount;