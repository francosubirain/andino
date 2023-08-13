import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";
import { CartContext } from './CartContext';
//BsShop

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)
    return(
        <Link to="/cart">
        <div className="cart-widget">
            <h4><BsFillCartPlusFill/><button style={{ backgroundColor: 'brown', color: 'grey', border: 'none' }}>{getQuantity()}</button></h4>
        </div>
        </Link>
    )
    
}
export default CartWidget

