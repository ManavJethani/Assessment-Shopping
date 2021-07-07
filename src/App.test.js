import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router,Route } from 'react-router-dom';
import { createStore } from 'redux';
import Header from './components/Header';
import {createMemoryHistory} from 'history'
import reducer from './redux/reducers'
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function customRender(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    route = '/',
    history = createMemoryHistory({initialEntries: [route]}),
  } = {},
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>,
    ),
    store,
    history,
  }
}

test('header is rendered on screen with title, all products link, go to cart link',()=>{
  const container = customRender(<Route path="/"><Header /></Route>)
  expect(container.getByText(/Assessment Shopping/i)).toBeInTheDocument();
  expect(container.getByText(/Go to Cart/i)).toBeInTheDocument();
  expect(container.getByText(/Go to Products/i)).toBeInTheDocument();
});

test('Cart page should be rendered with no items message',()=>{
  const container = customRender(<Route path="/cart"><Cart /></Route>)
  waitFor(()=>expect(container.getByText(/No Item Added to Cart/i)).toBeInTheDocument())
});

test('Checkout page should be rendered with no items message',()=>{
  const container = customRender(<Route path="/checkout"><Checkout /></Route>)
  waitFor(()=>expect(container.getByText(/No Item Added to Cart/i)).toBeInTheDocument())
});

test('Login page should be rendered when login link is clicked',()=>{
  const container = customRender(<Route path="/"><Header /></Route>)
  fireEvent.click(container.getByTestId("login"));
  waitFor(()=>expect(container.getByText(/Login to Assessment Shopping/i)).toBeInTheDocument())
});
