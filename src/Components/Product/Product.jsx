import styles from './Product.module.scss'
import {useState} from "react";

const Product = (props) => {

    const [isAdded, setIsAdded] = useState(false)

    return (
        <div className={styles.item} >
            <div className={styles.favourite}>
                <img src="./img/heart-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={props.img} alt="nike sneakers"/>
            <h5>{props.name}</h5>
            <div className={styles.itemBottom}>
                <div className={styles.itemPrice}>
                    <span>Price:</span>
                    <b>{props.price}$</b>
                </div>
                <img className={styles.addBtn} onClick={() => setIsAdded(!isAdded)}
                     src={isAdded ? './img/btn-checked.svg' : './img/btn-unchecked.svg'} alt="Add"/>
            </div>
        </div>
    )
}

export default Product