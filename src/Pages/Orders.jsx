import Product from "../Components/Product/Product";
import {useEffect, useState} from "react";
import axios from 'axios'
import Info from "../Components/CartDrawer/Info";
import {useNavigate} from 'react-router-dom'



const Orders = (props) => {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {

            const loadOrders = async function () {
                try {
                    setIsLoading(true)
                    const orders = await axios.get('https://62867f02f0e8f0bb7c16f7e2.mockapi.io/orders')
                    setOrders(orders.data.reduce((prev, obj) => [...prev, ...obj.items], []))
                    console.log(orders.data)

                } catch (e) {
                    alert("Error occurred while fetching orders, check console for nor details! ")
                    console.error(e)
                }
                setIsLoading(false)
            }

            loadOrders()


        }, []
    )
    return (
        <div className="content">
            <div className="contentTop">
                <h1>Orders</h1>
            </div>

            {orders.length > 0
                ? <div className="products">
                    {
                        isLoading
                            ? [...Array(10)].map((el, index) => <Product key={index} loading={true}/>)
                            : orders.map((el, index) => {
                                return <Product name={el.name} price={el.price} img={el.img} id={el.id}
                                                favourite={false}
                                                loading={isLoading} key={index}/>
                            })}
                </div>
                : <div className={"info-block"}>
                    <Info img={'../img/sad-emoji.png'}
                          title={'You dont have any orders yet ;('}
                          text={'Go back to the store and order a pair of sneakers'}
                          onCloseCart={() => navigate('/')}/>
                  </div>
            }

        </div>
    )
}

export default Orders