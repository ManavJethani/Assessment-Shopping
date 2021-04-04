# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `project information`

Please find user credentials for login : 
    email: 'email@email.com',
    password: 'password123'
    
1. Implemented token based authentication where user information is hardcoded on front end in a constants file with auth-token instead of server and database. Used session storage for saving the token.
2. Product Screen - Shows the list of products available, product information is fetched from dummy json file. Also implemented filter by category dropdown. Design is       responsive.
3. Cart Screen - Displays added products and summary on the right side, if no products are available, it displays a common message of 'no items added to cart' and link to product screen. User can increase or decrease the quantity and remove product from the cart. Same will be reflected to order summary.
4. Order summary displays the total products and their details with hardcoded discount of 20% applied and proceed to checkout button.
5. Checkout Screen - Displays user hardcoded delivery address and contact with link to order details also confirm order button which saves the order to redux.
6. Header shows app title, go to products, go to cart and login screen link with cart item count.
7. Test cases are written with react-testing-library with basic tests, should have added more where i can test redux store.
8. Added separate constant file for messages and hardcoded strings.
