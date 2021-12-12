import './styles.scss';
import ItemDetail from "../itemdetail/itemdetail";
import { useEffect, useState } from "react";
import { getProductById } from '../../products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setCargando(true);
        getProductById(id).then(product => {
            setProductos(product);
            setCargando(false);
        });
        return(() => {
            setProductos([]);
        });
    }, [id]);

    return(
        <div className="itemDetailContainer">
            {!cargando&&<ItemDetail productos={productos}/>}
        </div>
    );
}

export default ItemDetailContainer;