import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";

const Header = (props) => {

    const {total} = useCart()

    return (
        <header>
            <Link to={'/'}>
                <div className="leftHeader">
                    <img width={40} height={40} src={'./img/logo.png'} alt="logo"/>
                    <div className="headerInfo">
                        <h2>React Sneaker Shop</h2>
                        <p>Best sneaker shop</p>
                    </div>
                </div>
            </Link>
            <ul className={'rightHeader'} style={{cursor: 'pointer'}}>
                <li onClick={props.onClickCart}>
                    <img src="./img/cart.svg" alt={'cart-logo'}/>
                    <p>{total} usd</p>
                </li>
                <li>
                    <Link to={'/favourites'}>
                        <img src="./img/heart.svg" alt="Favourite"/>
                    </Link>
                </li>
                <li>
                    <Link to={'/orders'}>
                        <img src="./img/user.svg" alt={'user-logo'}/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header