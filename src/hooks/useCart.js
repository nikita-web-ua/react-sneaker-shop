import AppContext from "../context";
import {useContext} from 'react';


export const useCart = () => {

    const {cartItems, setCartItems} = useContext(AppContext)
    const total = cartItems.reduce((sum, item) => sum + item.price, 0)

    return {cartItems, setCartItems, total}
}