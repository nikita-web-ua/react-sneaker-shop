const CartItem = (props) => {
    return (
        <div className="cart-item">
            <img width={70} height={70} src={props.item.img} alt="sneakers"/>
            <div className="cart-details">
                <p>{props.item.name}</p>
                <b>{props.item.price}$</b>
            </div>
            <img onClick={() => props.onRemoveItem(props.item.id)} className={'btn-del'} width={32} height={32} src="./img/btn-del.svg" alt="Delete"/>
        </div>
    )
}

export default CartItem
