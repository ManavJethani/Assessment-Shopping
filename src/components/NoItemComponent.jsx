import React from 'react'
import { Link } from 'react-router-dom'

const NoItem = () => {
    return <div className="login-card-style">
        <div style={{margin : 10}}>No Item Added to Cart</div>
        <Link to="/products"> Go To Products Page</Link>
    </div>
}

export default NoItem;