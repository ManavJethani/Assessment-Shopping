import React from 'react'
import ProductJson from '../products.json'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { AddToCart, getAllProducts, RemoveToCart } from '../redux/actions';


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.TestReducer.products)
    const Cart = useSelector(state => state.TestReducer.cart)
    const SavedOrder = useSelector(state => state.TestReducer.savedOrder)
    const [category, setCategory] = React.useState([])
    const [filteredProducts, setFilteredProducts] = React.useState([])

    const handleDropDownChange = e => {
        if (e.target.value === "all") {
            setFilteredProducts(products)
        } else {
            const filtered = products.filter(ele => ele.category === e.target.value)
            setFilteredProducts(filtered)
        }
    }

    React.useEffect(() => {
        setCategory([...new Set(ProductJson.map(ele => ele.category))])
        setFilteredProducts(ProductJson)
        dispatch(getAllProducts(ProductJson));
    }, [])

    const handleCart = (e, item) => {
        e.target.innerHTML === 'Add to Cart' ? dispatch(AddToCart(item)) : dispatch(RemoveToCart(item))
    }
    return <div style={{margin:14}}>
        <div>
            <span className="left-align"><b>Filter by category :</b></span> <select className="select-style" name="cars" id="cars" onChange={(e) => handleDropDownChange(e)}>
                <option value="all">All</option>
                {category.map(ele => <option key={ele} value={ele}>{ele}</option>)}
            </select>
        </div>
        <div className="grid-container">
            {filteredProducts.map((ele) => {
                return <Card key={ele.id} className="card-style" >
                    <Card.Img variant="top" src={ele.image} className="card-image" />
                    <Card.Body>
                        <Card.Title className="title-style">{ele.title}</Card.Title>
                        <Card.Text className="text-style">${ele.price}</Card.Text>
                        <Button variant="primary" onClick={(e) => handleCart(e, ele)}>
                            {Cart.find(item => item.id === ele.id) ? 'Remove from Cart' : 'Add to Cart'}
                        </Button>
                    </Card.Body>
                </Card>
            })}
        </div></div>
}

export default Products;