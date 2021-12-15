import ItemD from "../itemD/itemD";
import ItemCount from '../itemcount/ItemCount';
import './styles.scss';

const Nothing = () => {
    return(
        <div></div>
    )
}

const ItemDetail = ({ productos }) => {

    const turnCount = 'on';

    const Count = turnCount === 'on' ? ItemCount : Nothing;

    const onAdd = (count) => {
        console.log(`${count} items agregados.`);
    }

    return(
        <div className="cardContainer">
            <ItemD key={productos.id} productos={productos}/>
            <Count stock={15} initial={1} onConfirm={onAdd}/>
        </div>
    );
}

export default ItemDetail;