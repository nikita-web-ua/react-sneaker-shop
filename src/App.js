import './App.css';
import Header from "./Components/Header";
import CartDrawer from "./Components/CartDrawer/CartDrawer";
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes} from 'react-router-dom'
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import AppContext from "./context";
import Orders from "./Pages/Orders";

function App() {

    const [items, setItems] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [favourites, setFavourites] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function fetchData () {
            try {
                setIsLoading(true)

                const [items, cartItems, favourites] = await Promise.all([
                    axios.get('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/items'),
                    axios.get('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart'),
                    axios.get('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/favourites')
                ])

                setIsLoading(false)
                setCartItems(cartItems.data)
                setFavourites(favourites.data)
                setItems(items.data)
            } catch (e) {
                alert('Failed to load the data, check console for more details! ')
                console.error(e)
            }

        }

        fetchData()
    }, [])

    const onAddToCart = async (obj) => {
        try {
            const foundItem = cartItems.find( item => Number(item.parentId) === Number(obj.id))
            if (foundItem) {
                setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)))
                axios.delete(`https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart/${foundItem.id}`)
            } else {
                //firstly set fake id for faster ui
                setCartItems(prev => [...prev, obj])
                const {data} = await axios.post('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart', obj)
                //then change on real id
                setCartItems(prev => prev.map( item => {
                    if (item.parentId === data.parentId) {
                        return {
                            ...item,
                            id: data.id
                        }
                    }
                    return item;
                }))
            }
        } catch (error) {
            alert('Failed to add item, check console for details')
            console.log(error)
        }
    }

    const onAddToFavourite = async (obj) => {
        try {
            if (favourites.find(el => el.parentId === obj.id)) {
                axios.delete(`https://62867f02f0e8f0bb7c16f7e2.mockapi.io/favourites/${obj.id}`)
                setFavourites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
            } else {
                const {data} = await axios.post('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/favourites', obj)
                setFavourites(prev => [...prev, data])
                console.log(data)
            }
        } catch (error) {
            alert('Failed to add item, check console for details')
            console.log(error)
        }
    }

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://62867f02f0e8f0bb7c16f7e2.mockapi.io/cart/${id}`)
            setCartItems(cartItems.filter(el => Number(el.id) !== Number(id)))
        } catch (e) {
            alert('Failed to remove an item, check console for more details!')
            console.error(e)
        }
    }

    const isAddedToCart = (id) => {
        return cartItems.some( el => Number(el.parentId) === Number(id))
    }

    const onCloseCart = () => setShowCart(false)

    return (
        <AppContext.Provider value={{items, cartItems, setCartItems, favourites, isAddedToCart, onCloseCart}}>
            <div className="App">
                <CartDrawer cartItems={cartItems} onRemoveItem={onRemoveItem} onCloseCart={onCloseCart} opened={showCart}/>
                <Header onClickCart={() => setShowCart(true)}/>
                <Routes>
                    <Route path='/' exact
                           element={<Home items={items} cartItems={cartItems} onAddToFavourite={onAddToFavourite}
                                          onAddToCart={onAddToCart} isLoading={isLoading}/>}/>
                    <Route path='/favourites'
                           element={<Favourites onAddToCart={onAddToCart} onAddToFavourite={onAddToFavourite}/>}/>
                    <Route path={'/orders'} element={<Orders/>} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
