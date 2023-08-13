import { addDoc, doc, getDoc, updateDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

export const Checkout = () => {
  const cartContext = useContext(CartContext);
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    ConfirmarEmail: "",
    Telefono: "",
    Domicilio: ""
  });

  const { Nombre, Apellido, Email, ConfirmarEmail, Telefono, Domicilio } = buyer;
  const { cart } = useContext(CartContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "Nombre" || name === "Apellido") {
      if (/^[A-Za-z]+$/.test(value) || value === "") {
        setBuyer({
          ...buyer,
          [name]: value,
        });
      }
    } 

    else if (name === "Telefono") {
      if (/^[0-9]*$/.test(value) || value === "") {
        setBuyer({
          ...buyer,
          [name]: value,
        });
      }
    } 
    else {
      setBuyer({
        ...buyer,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Email !== ConfirmarEmail) {
      alert("Los correos no coinciden");
      return;
    }

    const isStockSufficient = await checkStockSufficient();
    if (!isStockSufficient) {
      alert("No hay suficiente stock para completar la compra.");
      return;
    }

    const total = cart.reduce((acum, unItem) => acum + unItem.price * unItem.cant, 0);
    const dia = new Date();
    const data = { buyer, cart, total, dia };
    await generateOrder(data);
    await updateProductStock();
  };

  const updateProductStock = async () => {
    const querydb = getFirestore();
    for (const product of cart) {
      const itemDoc = doc(querydb, "products", product.id);
      const itemSnapshot = await getDoc(itemDoc);
      if (itemSnapshot.exists()) {
        const stockNuevo = itemSnapshot.data().stock - product.cant;
        await updateDoc(itemDoc, { stock: stockNuevo });
      }
    }
  };

  const checkStockSufficient = async () => {
    const querydb = getFirestore();
    for (const product of cart) {
      const itemDoc = doc(querydb, "products", product.id);
      const itemSnapshot = await getDoc(itemDoc);
      if (itemSnapshot.exists()) {
        const stockReal = itemSnapshot.data().stock;
        if (stockReal < product.cant) {
          return false;
        }
      }
    }
    return true;
  };

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Orders');
    localStorage.clear();

    const order = await addDoc(queryCollection, data);
    setOrderId(order.id);
    cartContext.clearCart();
  };

  return (
    <div className="checkout-container">
      <hr />
      {!orderId && (
        <form onSubmit={handleSubmit} className="checkout-form">
          <h1>Ingresa tus Datos:</h1>
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre"
            value={Nombre}
            onChange={handleInputChange}
            required
          />

          <label className="form-label">Apellido:</label>
          <input
            type="text"
            name="Apellido"
            placeholder="Apellido"
            value={Apellido}
            onChange={handleInputChange}
            required
          />

          <label className="form-label">Email:</label>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={Email}
            onChange={handleInputChange}
            required
          />

          <label className="form-label">Confirmar Email:</label>
          <input
            type="email"
            name="ConfirmarEmail"
            placeholder="Confirmar Email"
            value={ConfirmarEmail}
            onChange={handleInputChange}
            required
          />

          <label className="form-label">Teléfono:</label>
          <input
            type="tel"
            name="Telefono"
            placeholder="Teléfono"
            value={Telefono}
            onChange={handleInputChange}
            required
          />

          <label className="form-label">Domicilio:</label>
          <input
            type="text"
            name="Domicilio"
            placeholder="Domicilio"
            value={Domicilio}
            onChange={handleInputChange}
            required
          />

          <input type="submit" value="Confirmar Compra" className="submit-button" />
        </form>
      )}
      {orderId && (
        <div className="order-success">
          <h1>Felicitaciones tu compra se realizo con exito!</h1> 
          <br />
          <h2>Tu ticket de compra es:</h2>
          <h2>{orderId}</h2>
          <br />
          <br />
          <p>  A la brevedad nos estaremos comunicandonos!</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;