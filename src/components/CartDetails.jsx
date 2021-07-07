import { Button } from 'react-bootstrap';
import React from 'react'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux';
import { AddQuantity, RemoveQuantity, RemoveToCart } from '../redux/actions';

const CartDetails = () => {
    const Cart = useSelector(state => state.TestReducer.cart)
    const dispatch = useDispatch();
    return <div>
        {Cart.map((ele) => {
            return <Card key={ele.id} className="cart-detail-style" >
                <Card.Img variant="top" src={ele.image} className="card-image" />
                <Card.Body>
                    <Card.Title className="left-align">{ele.title}</Card.Title>
                    <Card.Text className="left-align">
                        {ele.description}
                    </Card.Text>
                    <Card.Text className="left-align">
                        ${(ele.price * ele.quantity).toFixed(2)}
                    </Card.Text>
                    <div className="flex-container">
                        <div className="input-group" style={{ width: 120 }}>
                            <span className="input-group-btn">
                                <button onClick={() => ele.quantity > 1 ? dispatch(RemoveQuantity(ele)) :
                                    dispatch(RemoveToCart(ele))} type="button" className="btn btn-danger btn-number" data-type="minus" data-field="quant[2]">
                                    -
                            </button>
                            </span>
                            <input type="text" name="quant[2]" className="form-control input-number" value={ele.quantity} min="1" max="99" />
                            <span className="input-group-btn">
                                <button onClick={() => dispatch(AddQuantity(ele))} type="button" className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                                    +
                            </button>
                            </span>
                        </div>
                        <Button onClick={() => dispatch(RemoveToCart(ele))}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        })}
    </div>
}

export default CartDetails;