import React, { createContext, useEffect, useState, useRef } from 'react';


export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const initialized = useRef(false);

    useEffect(() => {
        const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cartFromStorage);
    }, []);

    useEffect(() => {
        if (initialized.current) {
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log("se ejecuta esto");
        } else {
            initialized.current = true;
        }
    }, [cart]);

    const addItem = (item, cant) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);
            if (existingItem) {
                const updatedCart = prevCart.map((prevItem) =>
                    prevItem.id === item.id
                        ? { ...prevItem, cant: prevItem.cant + cant }
                        : prevItem
                );
                return updatedCart;
            } else {
                return [...prevCart, { ...item, cant }];
            }
        });
    };

    const removeItem = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
        console.log("entro en remove");
    };

    const clearCart = () => {
        setCart([]);
        console.log("entro en Clear");
    };

    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cant, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cant, 0);
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, getQuantity, getCartTotal }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;