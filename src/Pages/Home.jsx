import Product from "../Components/Product/Product";
import {useState} from "react";

const Home = (props) => {

    const [searchInput, setSearchInput] = useState('')

    const renderItems = () => {

        let filteredItems = props.items.filter(el => el.name.toLowerCase().includes(searchInput.toLowerCase()))
        return (
        props.isLoading
            ? [...Array(10)].map( (el, index) => <Product key={index} loading={props.isLoading} />)
            : filteredItems
            .map((el, index) => {
                return <Product key={index} name={el.name} price={el.price} id={el.id} loading={props.isLoading}
                                img={el.img} parentId={el.parentId} onAddToCart={(obj) => props.onAddToCart(obj)}
                                onAddToFavourite={(obj) => props.onAddToFavourite(obj)}/>
            })
    )
    }
    return (
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
                {renderItems()}
            </div>
        </div>
    )
}

export default Home