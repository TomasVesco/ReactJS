import './styles.scss';

import ItemList from '../itemList/itemList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemListContainer = () => {

    const [ products, setProducts ] = useState([]); 
    const [ loading, setLoading ] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        if(!categoryId) {
            setLoading(true);
            getDocs(collection(db, 'products')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                });
                setProducts(products);
            }).catch((error) => {
                console.log('Error buscando los items', error);
            }).finally(() => {
                setLoading(false);
            });
        } else {
            setLoading(true);
            getDocs(query(collection(db, 'products'), where('category', '==', categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                });
                setLoading(products);
            }).catch((error) => {
                console.log('Error al buscar los productos', error);
            }).finally(() => {
                setLoading(false);
            });
        }
        return(() => {
            setProducts([]);
        });
    }, [categoryId]);

    return (
        <>
            {loading ? <div className='preloaderL'><div><FontAwesomeIcon icon={faPaw}/></div></div>:
            <div className="itemListContainer">
                <div>
                    <div>
                        <Link to={'/category/cucha'}>Cucha</Link>
                        <Link to={'/category/comedero'}>Comedero</Link>
                        <Link to={'/category/herramienta'}>Herramienta</Link>
                    </div>
                </div>
                <ItemList products={products} />
            </div>}
        </>
    );
}

export default ItemListContainer;