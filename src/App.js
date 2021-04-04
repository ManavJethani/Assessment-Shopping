import './App.css';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import React, { Suspense, useEffect } from 'react';
import Header from './components/Header';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from './redux/actions';
import { token } from './constants';

const Cart = React.lazy(()=>import('./components/Cart'))
const Login = React.lazy(()=>import('./components/Login'))
const Checkout = React.lazy(()=>import('./components/Checkout'))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem('auth-token') === token) {
      dispatch(setAuthenticated(true))
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Products/></Route>
          <Route exact path="/products"><Products/></Route>
          
          <Route exact path="/cart">
            <Suspense fallback={<div>Loading...</div>}>
              <Cart/>
            </Suspense></Route>
          <Route exact path="/login">
          <Suspense fallback={<div>Loading...</div>}>
              <Login/>
            </Suspense>
          </Route>
          <Route exact path="/checkout">
          <Suspense fallback={<div>Loading...</div>}>
              <Checkout/>
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withRouter(App);
