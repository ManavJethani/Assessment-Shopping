import { Col, Container, Row } from 'react-bootstrap';
import React from 'react'
import Summary from './Summary';
import CartDetails from './CartDetails';
import { useSelector } from 'react-redux';
import NoItem from './NoItemComponent';

const Cart = () => {
    const CartItems = useSelector(state => state.TestReducer.cart)
    return (<>{CartItems.length > 0  ? <Container style={{margin:0}}>
            <Row>
                <Col xs={12} lg={8} md={12}><CartDetails/></Col>
                <Col xs={12} lg={4} md={12}><Summary/></Col>
            </Row>
            </Container> : <NoItem/>}</>
    )
}


export default Cart;