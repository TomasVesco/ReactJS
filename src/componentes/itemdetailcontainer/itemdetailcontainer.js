import './styles.scss';

import ItemDetail from "../itemdetail/itemdetail";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase';

const ItemDetailContainer = () => {

    const [ products, setProducts ] = useState([]);
    const [ loading, setloading ] = useState(true);

    const { paramId } = useParams();

    useEffect(() => {
        setloading(true);
        getDoc(doc(db, 'products', paramId)).then((querySnapshot) => {
            const products = { id: querySnapshot.id, ...querySnapshot.data() }
            setProducts(products);
        }).finally(() => {
            setloading(false);
        });
    }, [paramId]);

    return(
        <div className="itemDetailContainer">
            {loading ? <div className='preloader'><div><FontAwesomeIcon icon={faPaw}/></div></div>:<ItemDetail products={products}/>}
        </div>
    );
}

export default ItemDetailContainer;