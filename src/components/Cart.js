import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const totalAmount = cart.reduce((total, product) => total + product.price * product.cant, 0);

  return (
    <>
      <h1> REVISA TU PEDIDO!</h1>
      <hr />
      <div className="cart-table">
        <div className="cart-header">
          <div className="cart-header-item">Imagen</div>
          <div className="cart-header-item">Nombre</div>
          <div className="cart-header-item">Precio unitario</div>
          <div className="cart-header-item">Cantidad</div>
          <div className="cart-header-item">Precio total</div>
          <div className="cart-header-item">Acciones</div>
        </div>
        {cart.map((product) => (
          <div key={product.id} className="cart-row">
            <div className="cart-item">
              <img
                src={product.img}
                alt={product.name}
                className="cart-thumbnail"
              />
            </div>
            <div className="cart-details">{product.name}</div>
            <div className="cart-details">{product.price}</div>
            <div className="cart-details">{product.cant}</div>
            <div className="cart-details">{product.price * product.cant}</div>
            <div className="cart-details">
              <button onClick={() => removeItem(product.id)}>
                Eliminar Producto
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length === 0 ? (
      <h1>El carrito de compras esta vacio.</h1>
      ) : (
        <div>
          <div className="cart-total">
            <h3>Total a pagar: ${totalAmount}</h3>
          </div>
          <Link to="/checkout">
            <button>Finaliza tu Compra</button>
          </Link>
        </div>
      )}
    </>
  );
};