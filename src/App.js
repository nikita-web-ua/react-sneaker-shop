import './App.css';

function App() {
    return (
        <div className="App">
            <div style={{display: 'none'}} className="overlay">
                <div className="drawer">
                    <div className="cart-top">
                        <h2>Your Cart 🛒</h2>
                        <img className={'btn-del'} width={32} height={32} src="./img/btn-del.svg" alt="Delete"/>
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
            <header>
                <div className="leftHeader">
                    <img width={40} height={40} src={'./img/logo.png'} alt="logo"/>
                    <div className="headerInfo">
                        <h2>React Sneaker Shop</h2>
                        <p>Best sneaker shop</p>
                    </div>
                </div>
                <ul className={'rightHeader'}>
                    <li>
                        <img src="./img/cart.svg" alt={'cart-logo'}/>
                        <p>120 usd</p>
                    </li>
                    <li>
                        <img src="./img/user.svg" alt={'user-logo'}/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <div className="contentTop">
                    <h1>All Sneakers</h1>
                    <div className="search">
                        <img width={15} height={15} src="./img/search.svg" alt="Search"/>
                        <input type="text" placeholder={'Search...'}/>
                    </div>
                </div>
                <div className="products">
                    <div className="item">
                        <div className={'favourite'}>
                            <img src="./img/heart-unliked.svg" alt="Unliked"/>
                        </div>
                        <img width={133} height={112} src="./img/products/1.png" alt="nike sneakers"/>
                        <h5>Nike Blazer Mid Suede</h5>
                        <div className={'item-bottom'}>
                            <div className={'item-price'}>
                                <span>Price:</span>
                                <b>120$</b>
                            </div>
                            <button className={'add-btn'}>
                                <img width={11} height={11} src="./img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className={'favourite'}>
                            <img src="./img/heart-unliked.svg" alt="Unliked"/>
                        </div>
                        <img width={133} height={112} src="./img/products/1.png" alt="nike sneakers"/>
                        <h5>Nike Blazer Mid Suede</h5>
                        <div className={'item-bottom'}>
                            <div className={'item-price'}>
                                <span>Price:</span>
                                <b>120$</b>
                            </div>
                            <button className={'add-btn'}>
                                <img width={11} height={11} src="./img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className={'favourite'}>
                            <img src="./img/heart-unliked.svg" alt="Unliked"/>
                        </div>
                        <img width={133} height={112} src="./img/products/1.png" alt="nike sneakers"/>
                        <h5>Nike Blazer Mid Suede</h5>
                        <div className={'item-bottom'}>
                            <div className={'item-price'}>
                                <span>Price:</span>
                                <b>120$</b>
                            </div>
                            <button className={'add-btn'}>
                                <img width={11} height={11} src="./img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className={'favourite'}>
                            <img src="./img/heart-unliked.svg" alt="Unliked"/>
                        </div>
                        <img width={133} height={112} src="./img/products/1.png" alt="nike sneakers"/>
                        <h5>Nike Blazer Mid Suede</h5>
                        <div className={'item-bottom'}>
                            <div className={'item-price'}>
                                <span>Price:</span>
                                <b>120$</b>
                            </div>
                            <button className={'add-btn'}>
                                <img width={11} height={11} src="./img/plus.svg" alt="Plus"/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
