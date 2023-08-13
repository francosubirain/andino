//ItemCount.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <button onClick={() => decrementar()} className='btn btn_item_count'>-</button>
        </div>
        <div className='col'>
          <h3 >{count}</h3>
        </div>
        <div className='col'>
          <button onClick={() => incrementar()} className='btn btn_item_count'>+</button>
        </div>
      </div>
      <div className='row'>
        <button className='btn btn_item_count' onClick={() => onAdd(count)}>Agregar al Carrito</button>
      </div>
      <div className='row'>
        <div style={{ marginTop: '10px' }}>
          <Link to="/cart">
            <button className='btn btn_fin'>Finalizar Compra!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;