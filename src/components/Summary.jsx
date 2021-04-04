import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Summary = () => {
    const Cart = useSelector(state => state.TestReducer.cart);
    const history = useHistory();

    const handleCheckout = () => {
        history.push("/checkout")
    }

    const calcTotal = () => {
        return Cart.map((ele) => ele.price * ele.quantity).reduce((a, b) => a + b, 0).toFixed(2);
    }

    const discountedTotal = (discount,total) => {
        return (total - (discount/100 * total)).toFixed(2);
    }

    return <Card className="summary-style">
        <Card.Body>
            <Card.Title className="left-align">Order Summary</Card.Title>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th className="left-align">Item</th>
                        <th>Quantity</th>
                        <th className="left-align">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {Cart.map((item) => {
                        return <tr key={item.id}>
                            <td className="left-align">{item.title}</td>
                            <td>{item.quantity}</td>
                            <td className="left-align">${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
            <Card.Text className="right-align">
                20% discount applied!
            </Card.Text>
            <Card.Text className="right-align">
                <b>Total: ${discountedTotal(20,calcTotal())}</b>
            </Card.Text>
            <Button onClick={() => handleCheckout()}>Proceed to Checkout</Button>
        </Card.Body>
    </Card>
}

export default Summary