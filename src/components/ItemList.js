import React from 'react';
import Item from '../components/Item';

const ItemList = ({ data }) => {
  return (
    <div className="row justify-content-center" id="itemlist">
      {data.map((item) => (
        <div className="col-md-3 mb-2" key={item.id}>
          <div className="item-container"> {/* Agrega un contenedor para el elemento */}
            <Item item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
