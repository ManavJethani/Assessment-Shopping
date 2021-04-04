import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { hardCodedAddress, hardcodedNumber, orderSavedMessage, token, userNotLoggedIn } from '../constants'
import { saveOrder } from '../redux/actions'
import NoItem from './NoItemComponent'

const Checkout = () => {
    const isAuthenticated = useSelector(state => state.TestReducer.isUserAuthenticated);
    const Cart = useSelector(state => state.TestReducer.cart)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCheckout = () => {
        const orderDetails = {
            orderNumber: Math.floor(Math.random() * 100000),
            orderItem: Cart,
            modeOfPayment: 'Cash',
            discount: '20%',
            totalBill: Cart.map((ele) => ele.price * ele.quantity).reduce((a, b) => a + b, 0).toFixed(2)
        }
        alert(orderSavedMessage)
        dispatch(saveOrder(orderDetails))
        history.push("/")
    }

    if (isAuthenticated || sessionStorage.getItem('auth-token') === token) {
        if (Cart.length > 0) {
            return <div className="login-card-style"><Card>
                <Card.Body>
                    <Card.Title className="center-align">Checkout</Card.Title>
                    <Card.Text className="left-align">Address: {hardCodedAddress}</Card.Text>
                    <Card.Text className="left-align">Contact Number: {hardcodedNumber}</Card.Text>
                    <Card.Text className="left-align">Mode of Payment: Cash</Card.Text>
                    <Card.Text className="left-align">Delivered By: 10th April 2021</Card.Text>
                    <Card.Text className="left-align"><Link to="/cart">View order details</Link></Card.Text>
                    <Button onClick={() => handleCheckout()}>Confirm Order</Button>
                </Card.Body>
            </Card>
            </div >
        } else {
            return <NoItem />
        }
    } else {
        return <>
            {alert(userNotLoggedIn)}
            <Redirect to="/login" />
        </>
    }
}

export default Checkout