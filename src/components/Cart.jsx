import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {delItem, addItem, delProduct} from '../redux/actions/index'
import { Link } from 'react-router-dom'


const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const dispatch = useDispatch()

    const handleDecrement = (item) => {
        dispatch(delItem(item))
    }

    const handleIncrement = (item) => {
        dispatch(addItem(item))
    }

    const handleProduct= (item) => {
        dispatch(delProduct(item))
    }

    const cartItems = (cartItem) => {

        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                <button onClick={()=>handleProduct(cartItem)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <button onClick={()=>handleIncrement(cartItem)} className="btn btn-outline-dark mt-3 mb-2" aria-label="Add">
                                <i className='fa fa-plus'></i>
                            </button>
                            <p className="lead fw-bold">{cartItem.qty} x PKR {Math.round(cartItem.price) * 100}
                            = PKR {cartItem.qty * Math.round(cartItem.price) * 100}
                            </p>
                            <button onClick={()=>handleDecrement(cartItem)} className="btn btn-outline-dark" aria-label="Close">
                            <i className='fa fa-minus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                    </div>
                </div>
        );
    }

    const button = () => {
        return(
            <div className="container">
                <div className="row">
                    <Link to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart
