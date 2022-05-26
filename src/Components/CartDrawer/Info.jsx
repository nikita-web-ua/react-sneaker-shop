import styles from './CartDrawer.module.scss'

const Info = ({title, text, img, onCloseCart}) => {

    return (
        <div className={styles.infoCart}>
            <img className={'main-img'} width={120}  src={img} alt="Info-cart"/>
            <h5>{title}</h5>
            <p>{text}</p>
            <button className={'btn-green'} onClick={onCloseCart}>
                <img width={13} height={13} src="./img/arrow-r.svg" alt=""/>
                Back to the shop
            </button>
        </div>
    )
}

export default Info