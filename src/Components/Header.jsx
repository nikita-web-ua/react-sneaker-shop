import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";

const Header = (props) => {

    const {total} = useCart()

    return (
        <header>
            <Link to={process.env.PUBLIC_URL + '/'}>
                <div className="leftHeader">
                    <img width={40} height={40} src={'img/logo.png'} alt="logo"/>
                    <div className="headerInfo">
                        <h2>React Sneaker Shop</h2>
                        <p>Best sneaker shop</p>
                    </div>
                </div>
            </Link>
            <ul className={'rightHeader'} style={{cursor: 'pointer'}}>
                <li onClick={props.onClickCart}>
                    <img src="img/cart.svg" alt={'Cart'}/>
                    <p>{total} usd</p>
                </li>
                <li>
                    <Link to={process.env.PUBLIC_URL + '/favourites'}>
                        <img src="img/heart.svg" alt="Favourite"/>
                    </Link>
                </li>
                <li>
                    <Link to={process.env.PUBLIC_URL + '/orders'}>
                        <img src="img/user.svg" alt={'User'}/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header