const EmptyCart = (props) => {
    return (
        <div className="empty-cart">
            <img width={120} height={120} src="./img/empty-cart.png" alt="Empty-cart"/>
            <h5>Your cart is empty</h5>
            <p>Add something to the cart to complete an order.</p>
            <button className={'btn-green'} onClick={props.onClickClose}>
                <img width={13} height={13} src="./img/arrow-r.svg" alt=""/>
                Back to the shop
            </button>
        </div>
    )
}

export default EmptyCart