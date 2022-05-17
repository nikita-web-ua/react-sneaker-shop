import './App.css';

function App() {
    return (
        <div className="App">
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
                    <input type="text" placeholder={'Search'}/>
                </div>
                <div className="products">
                    <div className="item">
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
