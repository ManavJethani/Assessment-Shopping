import React from 'react'
import { useSelector} from 'react-redux'
import { Link,withRouter } from 'react-router-dom'
import { redirectLogin } from '../constants'

const Header = (props) => {
    const Cart = useSelector(state => state.TestReducer.cart)
    const isAuthenticated = useSelector(state => state.TestReducer.isUserAuthenticated)

    const handleLogin = () => {
        alert(redirectLogin) 
        sessionStorage.clear()
    }
    if(props.location.pathname !== "/login"){
        return <div className="header-style">
            <span className="link-style">
                Assessment Shopping
                </span>
            <span>
                <Link to="/products" className="link-style">Go to products</Link>
                <span className="link-style">Cart Items : {Cart.length}</span>
                <Link to="/cart" className="link-style">Go to Cart</Link>
                <Link to="/login" data-testid="login" onClick={handleLogin} className="link-style" variant="dark">{isAuthenticated ? "Logout" : "Login"}</Link>
            </span>
        </div>
    }else{
        return null;
    }
}

export default withRouter(Header)