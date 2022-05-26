import ContentLoader from "react-content-loader"
import styles from './Product.module.scss'
import {useContext, useState} from "react";
import AppContext from "../../context";

const Product = (props) => {
    const {isAddedToCart} = useContext(AppContext)
    const [isFavourite, setIsFavourite] = useState(props.favourite)
    const itemObj = { id: props.id, parentId: props.id, name: props.name, img: props.img, price: props.price}

    const addToCartHandler = () => {
        props.onAddToCart(itemObj)
    }

    const addFavourite = () => {
        setIsFavourite(prev => !prev)
        props.onAddToFavourite(itemObj)
    }

    return (
        <div className={styles.item}>
            {
                props.loading
                    ? <ContentLoader
                        speed={2}
                        width={160}
                        height={200}
                        viewBox="0 0 160 200"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        {...props}
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="91"/>
                        <rect x="0" y="110" rx="3" ry="3" width="150" height="15"/>
                        <rect x="0" y="132" rx="3" ry="3" width="90" height="15"/>
                        <rect x="0" y="170" rx="8" ry="8" width="80" height="24"/>
                        <rect x="115" y="162" rx="8" ry="8" width="32" height="32"/>
                    </ContentLoader>
                    : <>
                        {
                            props.onAddToFavourite && (
                            <div className={styles.favourite}>
                                <img src={isFavourite ? './img/heart-liked.svg' : './img/heart-unliked.svg'} alt="Unliked"
                                 onClick={addFavourite}/>
                            </div>)
                        }
                        <img width={133} height={112} src={props.img} alt="Sneakers"/>
                        <h5>{props.name}</h5>
                        <div className={styles.itemBottom}>
                            <div className={styles.itemPrice}>
                                <span>Price:</span>
                                <b>{props.price}$</b>
                            </div>
                            {props.onAddToCart && <img className={styles.addBtn} onClick={addToCartHandler} alt="Add"
                                                       src={isAddedToCart(props.id)
                                                           ? './img/btn-checked.svg'
                                                           : './img/btn-unchecked.svg'}/>}
                        </div>
                    </>
            }

        </div>
    )
}

export default Product