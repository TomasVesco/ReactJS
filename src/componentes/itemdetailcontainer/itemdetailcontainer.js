import './styles.scss';
import ItemDetail from "../itemdetail/itemdetail";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { pid } = useParams();

    useEffect(() => {
        setCargando(true);
        getDoc(doc(db, 'productos', id)).then((querySnapshot) => {
            const productos = { id: querySnapshot.id, ...querySnapshot.data() }
            setProductos(productos);
        }).catch((error) => {
            console.log('Error al buscar los productos',error);
        }).finally(() => {
            setCargando(false);
        });
    }, [id]);

    return(
        <div className="itemDetailContainer">
            {cargando ? <div className='preloader'><div><FontAwesomeIcon icon={faPaw}/></div></div>:<ItemDetail productos={productos}/>}
        </div>
    );
}

export default ItemDetailContainer;