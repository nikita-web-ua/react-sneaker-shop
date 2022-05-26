import Product from "../Components/Product/Product";
import {useContext} from "react";
import AppContext from "../context";
import Info from "../Components/CartDrawer/Info";
import {useNavigate} from "react-router-dom";

const Favourites = (props) => {

    const {favourites} = useContext(AppContext)
    const navigate = useNavigate()

    return (
        <div className="content">
            <div className="contentTop">
                <h1>Favourites</h1>
            </div>
            {
                favourites.length > 0
                    ? <div className="products">
                        {favourites.map((el, index) => <Product name={el.name} price={el.price} img={el.img}
                                                                favourite={true} onAddToCart={props.onAddToCart} id={el.id}
                                                                key={index} onAddT
                                                                onAddToFavourite={props.onAddToFavourite}/>)}
                    </div>
                    : <div className={"info-block"}>
                        <Info img={'../img/miserable-emoji.png'}
                              title={'Wishlist is empty ;('}
                              text={'Go back to the store and choose a pair of sneakers'}
                              onCloseCart={() => navigate('/')}/>
                    </div>
            }
        </div>
    )
}

export default Favourites