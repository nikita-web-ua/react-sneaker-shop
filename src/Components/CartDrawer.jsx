const CartDrawer = (props) => {

    return (
        <div style={{display: 'block'}} className="overlay">
            <div className="drawer">
                <div className="cart-top">
                    <h2>Your Cart 🛒</h2>
                    <img className={'btn-del'} width={32} height={32}
                         src="./img/btn-del.svg" alt="Delete" onClick={props.onClickClose}/>
                </div>
                <div className="cart-items">
                    <div className="cart-item">
                        <img width={70} height={70} src="./img/products/1.png" alt="sneakers"/>
                        <div className="cart-details">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>120$</b>
                        </div>
                        <img className={'btn-del'} width={32} height={32} src="./img/btn-del.svg" alt="Delete"/>
                    </div>
                    <div className="cart-item">
                        <img width={70} height={70} src="./img/products/1.png" alt="sneakers"/>
                        <div className="cart-details">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>120$</b>
                        </div>
                        <img className={'btn-del'} width={32} height={32} src="./img/btn-del.svg" alt="Delete"/>
                    </div>
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
        </div>
    )
}

export default CartDrawer