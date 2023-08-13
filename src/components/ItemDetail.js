import React, { useContext } from 'react'
import ItemCount from '../components/ItemCount';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext)
    const handleOnAdd = (count) => {
        addItem({ id: item.id, price: item.price, name: item.title, img: item.pictureUrl }, count)
    };

    return (
        <div className='container detailsStyle'>
            <h1 className='text-center titleStyle' >{item.title}</h1>
            <div className='row'>
                <div className='col'>
                    <img src={item.pictureUrl} className='rounded mx-auto d-block img_med' alt={item.title} style={{ maxWidth: '350px', maxHeight: '600px' }}/>
                </div>
                <div className='col'>
                    <h3>DESCRIPCIÓN:</h3>
                    <p>{item.description}</p>
                    <br />
                    <h3>Precio: {item.price}</h3>
                    <h4>Stock: {item.stock}</h4>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail