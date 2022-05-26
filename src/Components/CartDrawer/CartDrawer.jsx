import FilledCart from "./FilledCart";
import Info from "./Info";
import {useState} from "react";
import axios from 'axios'
import {useCart} from "../../hooks/useCart";
import styles from './CartDrawer.module.scss'

const CartDrawer = (props) => {

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const [isOrderCompleted, setIsOrderCompleted] = useState(false)
    const [orderId, setOrderId] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {setCartItems, cartItems, total} = useCart()

    const onCompleteOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/orders', {items: cartItems})
            setOrderId(data.id)
            setIsOrderCompleted(true)
            setCartItems([])

            //deleting from cart, can only be performed like this, because of MockApi limited functionality
            for (let i = 0; i < cartItems.length; i++) {
                let item = cartItems[i]
                await axios.delete(`https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart/${item.id}`)
                delay(1000)
            }

        } catch (error) {
            alert('Error occurred while completing and order =( Check console for more details!')
            console.error(error)
        }
        setIsLoading(false)


    }

    return (
        <div style={{display: 'block'}} className={`${styles.overlay} ${props.opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <div className={styles.cartTop}>
                    <h2>Your Cart 🛒</h2>
                    <img className={styles.btnDel} width={32} height={32}
                         src="./img/btn-del.svg" alt="Delete" onClick={props.onCloseCart}/>
                </div>
                {props.cartItems.length > 0
                    ? <FilledCart onRemoveItem={props.onRemoveItem} cartItems={props.cartItems} total={total}
                                  onCompleteOrder={onCompleteOrder} isLoading={isLoading}/>
                    : <Info title={isOrderCompleted ? 'Order is processed!' : 'Your cart is empty'}
                            onCloseCart={props.onCloseCart}
                            img={isOrderCompleted ? './img/completed-order.png' : './img/empty-cart.png'}
                            text={isOrderCompleted ? `Your order #${orderId} will be delivered to courier soon` : 'Add something to the cart to complete an order.'}/>}
            </div>
        </div>
    )
}

export default CartDrawer