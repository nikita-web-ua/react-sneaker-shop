import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import CartItem from "./CartItem";

const CartDrawer = (props) => {

    return (
        <div style={{display: 'block'}} className="overlay">
            <div className="drawer">
                <div className="cart-top">
                    <h2>Your Cart 🛒</h2>
                    <img className={'btn-del'} width={32} height={32}
                         src="./img/btn-del.svg" alt="Delete" onClick={props.onClickClose}/>
                </div>
                {props.cartItems.length > 0
                    ? <FilledCart onRemoveItem={props.onRemoveItem} cartItems={props.cartItems} />
                    : <EmptyCart onClickClose={props.onClickClose}/>}
            </div>
        </div>
    )
}

export default CartDrawer