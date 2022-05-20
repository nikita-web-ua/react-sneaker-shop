import './App.css';
import Product from "./Components/Product/Product";
import Header from "./Components/Header";
import CartDrawer from "./Components/CartDrawer/CartDrawer";
import {useEffect, useState} from "react";
import axios from "axios";

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
    const [cartItems, setCartItems] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [favourites, setFavourites] = useState([])


    useEffect(() => {
        axios.get('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/items')
            .then(res => setItems(res.data))

        axios.get('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart')
            .then(res => setCartItems(res.data))
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
        axios.post('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart', obj)
        console.log(obj)
    }

    const onAddToFavourite = (obj) => {
        axios.post('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/favourites', obj)
        setFavourites(prev => [...prev, obj])
        console.log(obj)
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart/${id}`)
        setCartItems(cartItems.filter(el => el.id !== id))
        console.log(`remove item ${id}`)
    }



    return (
        <div className="App">
            {showCart && <CartDrawer cartItems={cartItems} onRemoveItem={onRemoveItem} onClickClose={() => setShowCart(false)}/>}
            <Header onClickCart={() => setShowCart(true)}/>
            <div className="content">
                <div className="contentTop">
                    {searchInput ? <h1>Search for '{searchInput}'</h1> : <h1>All Sneakers</h1>}
                    <div className="search">
                        <img width={15} height={15} src="./img/search.svg" alt="Search"/>
                        <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder={'Search...'}
                               value={searchInput}/>
                        {searchInput && <img width={20} height={20} src="./img/btn-del.svg" alt="Search"
                                             onClick={() => setSearchInput('')}/>}
                    </div>
                </div>
                <div className="products">
                    {items.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase()))
                        .map((el, index) => {
                            return <Product key={index} name={el.name} price={el.price} onAddToFavourite={(obj) => onAddToFavourite(obj)}
                                            img={el.img} onAddToCart={(obj) => onAddToCart(obj)}/>
                        })}
                </div>

            </div>

        </div>
    );
}

export default App;
