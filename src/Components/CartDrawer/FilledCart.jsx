import CartItem from "./CartItem";
import styles from './CartDrawer.module.scss'

const FilledCart = (props) => {
    return (
        <div className={styles.filledCart}>
            <div className={styles.cartItems}>
                {props.cartItems.map((el, index) => <CartItem key={index} onRemoveItem={props.onRemoveItem} item={el}/>)}
            </div>
            <div className={styles.cartBottom}>
                <ul className={styles.orderDetails}>
                    <li>
                        <span>Total: </span>
                        <div className={styles.filler}/>
                        <b>{props.total}$</b>
                    </li>
                    <li>
                        <span>Tax 5%: </span>
                        <div className={styles.filler}/>
                        <b>{(props.total * 0.05).toFixed(2)}$</b>
                    </li>
                </ul>
                <button disabled={props.isLoading} className={`btn-green ${styles.btnGreen}`} onClick={props.onCompleteOrder}>
                    Complete Order
                    <img src="img/arrow-r.svg" alt="Arrow"/>
                </button>
            </div>
        </div>
    )
}

export default FilledCart