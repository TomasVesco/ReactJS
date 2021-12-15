import ItemD from "../itemD/itemD";
import ItemCount from '../itemcount/ItemCount';
import './styles.scss';
import { useState } from "react";

const Nothing = () => {
    return(
        <div></div>
    )
}

const ItemDetail = ({ productos }) => {

    const [turnCount, setTurnCount] = useState('on');
    
    const Count = turnCount === 'on' ? ItemCount : Nothing;

    const onAdd = (count) => {
        console.log(`${count} items agregados.`);
        console.log('Desmontando ItemCount');
        setTurnCount('off');
        setTimeout(() => {
            console.log('Montando ItemCount');
            setTurnCount('on');
        }, 1000);
    }

    return(
        <div className="cardContainer">
            <ItemD key={productos.id} productos={productos}/>
            <Count stock={15} initial={1} onConfirm={onAdd}/>
        </div>
    );
}

export default ItemDetail;