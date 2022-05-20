import CartItem from "./CartItem";

const FilledCart = (props) => {
    return (
        <div className={'filled-cart'}>
            <div className="cart-items">
                {props.cartItems.map((el, index) => <CartItem key={index} onRemoveItem={props.onRemoveItem} item={el}/>)}
            </div>
            <div className="cart-bottom">
                <ul className="order-details">
                    <li>
                        <span>Total: </span>
                        <div className="filler"/>
                        <b>120$</b>
                    </li>
                    <li>
                        <span>Tax 5%: </span>
                        <div className="filler"/>
                        <b>7$</b>
                    </li>
                </ul>
                <button className="btn-green">
                    Complete Order
                    <img src="./img/arrow-r.svg" alt="Arrow"/>
                </button>
            </div>
        </div>
    )
}

export default FilledCart