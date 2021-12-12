import ItemD from "../itemD/itemD";

const ItemDetail = ({productos}) => {
    return(
        <div>
            <ItemD key={productos.id} productos={productos}/>
        </div>
    );
}

export default ItemDetail;