import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { hardcodedCred, token, invalidUser } from '../constants';
import { setAuthenticated } from '../redux/actions';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        if ((email === hardcodedCred.email) && (password === hardcodedCred.password)) {
            sessionStorage.setItem('auth-token', token);
            dispatch(setAuthenticated(true))
            history.goBack();
        } else {
            setError(true)
        }
    }

    return <div className="login-card-style"><Card style={{ width: '30rem' }}>
        <Card.Body>
            <Card.Title className="center-align">Login to Assessment Shopping</Card.Title>
            <Form onSubmit={handleClick}>
                {error && <Form.Text className="error-text">{invalidUser}</Form.Text>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="left-align">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="left-align">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login In
                </Button>
            </Form>
        </Card.Body>
    </Card>
    </div>
}

export default Login;