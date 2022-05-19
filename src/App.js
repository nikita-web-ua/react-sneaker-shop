import './App.css';
import Product from "./Components/Product/Product";
import Header from "./Components/Header";
import CartDrawer from "./Components/CartDrawer";
import {useEffect, useState} from "react";

function App() {

    // https://62867f02f0e8f0bb7c16f7e2.mockapi.io/:endpoint

    // const products = [
    //     {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 111, "img": "./img/products/1.png"},
    //     {"name": "Мужские Кроссовки Nike Air Max 270", "price": 115, "img": "./img/products/2.png"},
    //     {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 120, "img": "./img/products/3.png"},
    //     {"name": "Кроссовки Puma X Aka Boku Future Rider", "price": 150, "img": "./img/products/4.png"},
    //     {"name": "Мужские Кроссовки Under Armour Curry 8", "price": 112, "img": "./img/products/5.png"},
    //     {"name": "Мужские Кроссовки Nike Kyrie 7", "price": 99, "img": "./img/products/6.png"},
    //     {"name": "Мужские Кроссовки Jordan Air Jordan 11", "price": 125, "img": "./img/products/7.png"},
    //     {"name": "Мужские Кроссовки Nike LeBron XVIII", "price": 152, "img": "./img/products/8.png"},
    //     {"name": "Мужские Кроссовки Nike Lebron XVIII Low", "price": 85, "img": "./img/products/9.png"},
    //     {"name": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 100, "img": "./img/products/10.png"},
    //     {"name": "Кроссовки Puma X Aka Boku Future Rider", "price": 105, "img": "./img/products/11.png"},
    //     {"name": "Мужские Кроссовки Nike Kyrie Flytrap IV", "price": 155, "img": "./img/products/12.png"},
    // ]

    const [items, setItems] = useState([])
    const [showCart, setShowCart] = useState(false)


    useEffect(() => {
        fetch('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/items')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    return (
        <div className="App">
            {showCart && <CartDrawer onClickClose={() => setShowCart(false)}/>}
            <Header onClickCart={() => setShowCart(true)}/>
            <div className="content">
                <div className="contentTop">
                    <h1>All Sneakers</h1>
                    <div className="search">
                        <img width={15} height={15} src="./img/search.svg" alt="Search"/>
                        <input type="text" placeholder={'Search...'}/>
                    </div>
                </div>
                <div className="products">
                    {items.map(el => {
                        return <Product name={el.name} price={el.price} img={el.img}/>
                    })}
                </div>

            </div>

        </div>
    );
}

export default App;
