import './styles.scss';
import React from 'react';
import '../itemcount/ItemCount';
import ItemCount from '../itemcount/ItemCount';

const ItemListContainer = () => {
    return (
        <div className="itemListContainer">
            <ItemCount stock="15" initial="1"/>
        </div>
    );
}

export default ItemListContainer;