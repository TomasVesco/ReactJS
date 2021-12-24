import './styles.scss';

import React from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemCount = ({ stock, onConfirm }) => {

    let [ count, setCount ] = useState(0);
    const [ thereIsItem, setThereIsItem ] = useState(true);
    
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

    const updateComponent = () => {
        if(count !== 0){
            setThereIsItem(false);
        }
    }

    return (
        <>
        {!thereIsItem ?                     
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
                            updateComponent();
                        })}>Agregar al carrito</button>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default ItemCount;