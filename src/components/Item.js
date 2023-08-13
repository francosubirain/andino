import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className='text-decoration-none'>
            <div className="card"
                style={{ width: '18rem', height: '28rem', margin: '.5rem', alignSelf: 'center' }} >
                <div class="card-body item">
                    <h2 class="card-title">{item.title}</h2>
                    <img src={item.pictureUrl} alt={item.description} class="size2 card-img-top" />
                    <h3><p class="card-text red">${item.price}</p></h3>
                    <p class="card-text negrita">stock: {item.stock}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;