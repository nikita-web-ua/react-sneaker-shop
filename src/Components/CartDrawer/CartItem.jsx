import styles from './CartDrawer.module.scss'

const CartItem = (props) => {
    return (
        <div className={styles.cartItem}>
            <img width={70} height={70} src={props.item.img} alt="sneakers"/>
            <div className={styles.cartDetails}>
                <p>{props.item.name}</p>
                <b>{props.item.price}$</b>
            </div>
            <img onClick={() => props.onRemoveItem(props.item.id)} className={styles.brnDel} width={32} height={32} src="./img/btn-del.svg" alt="Delete"/>
        </div>
    )
}

export default CartItem
