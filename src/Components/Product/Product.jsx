import styles from './Product.module.scss'
import {useState} from "react";

const Product = (props) => {

    const [isAdded, setIsAdded] = useState(false)
    const [isFavourite, setIsFavourite] = useState(false)

    const addToCartHandler = () => {

        if (isAdded === false){
            setIsAdded(true)
            props.onAddToCart({name: props.name, img: props.img, price: props.price})
            console.log('added')
        }
    }

    const addFavourite = () => {
        setIsFavourite(prev => !prev)
        props.onAddToFavourite({name: props.name, img: props.img, price: props.price})
    }

    return (
        <div className={styles.item} >
            <div className={styles.favourite}>
                <img src={ isFavourite ? './img/heart-liked.svg' : './img/heart-unliked.svg'} alt="Unliked"
                     onClick={addFavourite}/>
            </div>
            <img width={133} height={112} src={props.img} alt="nike sneakers"/>
            <h5>{props.name}</h5>
            <div className={styles.itemBottom}>
                <div className={styles.itemPrice}>
                    <span>Price:</span>
                    <b>{props.price}$</b>
                </div>
                <img className={styles.addBtn} onClick={addToCartHandler}
                     src={isAdded ? './img/btn-checked.svg' : './img/btn-unchecked.svg'} alt="Add"/>
            </div>
        </div>
    )
}

export default Product