import './styles.scss';
import ItemList from '../itemList/itemList';
import { useEffect, useState } from 'react';
import { getItemByCategory } from '../../products';
import { getProducts } from '../../products';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]); 
    const [cargando, setCargando] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {

        ( async () => {
            if(categoryId !== undefined){
                const categoria = await getItemByCategory(categoryId);
                setProductos(categoria);
                setCargando(false);
            } else {
                const categoria = await getProducts();
                setProductos(categoria);
                setCargando(false);
            }
        })();
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