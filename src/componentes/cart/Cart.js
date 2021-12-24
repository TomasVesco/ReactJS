import './styles.scss';

import CartList from '../cartList/cartList';
import CartContext from '../../context/cartContext';

import { useContext, useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import { db } from '../../services/firebase/firebase';
import { collection, addDoc, doc, writeBatch, getDoc } from 'firebase/firestore';

const Cart = () => {

    const { productAdd, totalPrice, clearCart } = useContext(CartContext);
    const { item } = productAdd;

    const [ thereAreItems, setThereAreItems ] = useState(false);

    const formName = useRef('');
    const formPhone = useRef('');
    const formEmail = useRef('');

    const confirmOrder = () => {

        const objOrder = {
            buyer: {
                name: formName.current.value,
                phone: formPhone.current.value,
                email: formEmail.current.value
            },
            items: item,
            total: totalPrice()
        }

        const batch = writeBatch(db);
        const outOfStock = [];

        objOrder.items.forEach((prod) => {
            getDoc(doc(db, 'products', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.count) {
                    batch.update(doc(db, 'products', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.count
                    });
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() });
                }
            });
        });

        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
                batch.commit().then(() => {
                    console.log(id); //Pasarle el ID de la compra al usuario-
                });
            });
        }

        setTimeout(() => {
            clearCart();
        }, 1000);
    }

    useEffect(() => {
        setThereAreItems(false);
        if(item.length === 0){
            setThereAreItems(false);
        } else {
            setThereAreItems(true);
        }
    }, [item]);

    return(
        <>
            {thereAreItems ? 
            <div className='cartContainer'>
                <div>
                    <div>
                        {item.map((products, index) => <CartList key={`${item.id}${index}`} products={products} />)}
                    </div>
                    <div className='cartFormContainer'>
                        <div>
                            <p>
                                Informacion de contacto.
                            </p>
                        </div>
                        <form>
                            <input type='text' ref={formName} placeholder='Nombre'/>
                            <input type='text' ref={formPhone} placeholder='Teléfono'/>
                            <input type='text' ref={formEmail} placeholder='Mail'/>
                        </form>
                    </div>
                    <div className='cartPaymentContainer'>
                        <div>
                            <p>
                                Total: $ {totalPrice()}
                            </p>
                            <Link to={'/ReactJS'}>Seguir comprando</Link>
                            <button onClick={(() => confirmOrder())}>Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
            : 
            <div className='cartContainerNull'>
                <div>
                    <div>
                        <p>
                            No hay items en el carrito.
                        </p>
                    </div>
                    <div>
                        <Link to={'/ReactJS'}>Volver a la tienda</Link>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Cart;