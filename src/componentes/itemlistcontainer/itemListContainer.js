import './styles.scss';

import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]); 
    const [cargando, setCargando] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        if(!categoryId) {
            setCargando(true);
            getDocs(collection(db, 'productos')).then((querySnapshot) => {
                const productos = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                });
                setProductos(productos);
            }).catch((error) => {
                console.log('Error buscando los items', error);
            }).finally(() => {
                setCargando(false);
            });
        } else {
            setCargando(true);
            getDocs(query(collection(db, 'productos'), where('categoria', '==', categoryId))).then((querySnapshot) => {
                const productos = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                });
                setProductos(productos);
            }).catch((error) => {
                console.log('Error al buscar los productos', error);
            }).finally(() => {
                setCargando(false);
            });
        }
        return(() => {
            setProductos([]);
        });
    }, [categoryId]);

    return (
        <>
            {cargando ? <div className='preloaderL'><div><FontAwesomeIcon icon={faPaw}/></div></div>:
            <div className="itemListContainer">
                <div>
                    <div>
                        <Link to={'/category/cucha'}>Cucha</Link>
                        <Link to={'/category/comedero'}>Comedero</Link>
                        <Link to={'/category/herramienta'}>Herramienta</Link>
                    </div>
                </div>
                <ItemList productos={productos} />
            </div>}
        </>
    );
}

export default ItemListContainer;