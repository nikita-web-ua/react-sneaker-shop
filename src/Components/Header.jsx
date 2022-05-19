const Header = (props) => {

    return (
        <header>
            <div className="leftHeader">
                <img width={40} height={40} src={'./img/logo.png'} alt="logo"/>
                <div className="headerInfo">
                    <h2>React Sneaker Shop</h2>
                    <p>Best sneaker shop</p>
                </div>
            </div>
            <ul className={'rightHeader'} style={{cursor: 'pointer'}}>
                <li onClick={props.onClickCart}>
                    <img src="./img/cart.svg" alt={'cart-logo'}/>
                    <p>120 usd</p>
                </li>
                <li>
                    <img src="./img/user.svg" alt={'user-logo'}/>
                </li>
            </ul>
        </header>
    )
}

export default Header