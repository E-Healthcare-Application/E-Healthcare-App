import React, { useState } from 'react';
import UserLoginAPI from '../service/UserLoginAPI';
import { Form, Button, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const EmailForForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validateEmail = () => {
        let emailInput = document.getElementById("email1").value;
        let emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(emailInput) || emailInput === '') {
            return true;
        } else {
            document.getElementById("emailVR").innerHTML = "Email format should be abc@xyz.com";
            return false;
        }
    };

    const removeAlert = () => {
        document.getElementById("emailVR").innerHTML = "";
    };

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await UserLoginAPI.generateToken(email);
            Swal.fire({
                icon: 'success',
                title: 'Token Sent',
                text: 'Token has been sent to the registered email!',
            }).then(() => {
                navigate('/enter-token', { state: { email, token: response.data } });
            });
        } catch (error) {
            console.error('Error:', error.response?.data);
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center vh-50">
            <Card style={{ width: '30vw', backgroundColor: "antiquewhite" }}>
                <Card.Body>
                    <Card.Title className="text-center mt-3 mb-3">Forgot Password?</Card.Title>
                    <Form onSubmit={submit}>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                id="email1"
                                placeholder="Enter Registered Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={validateEmail}
                                onFocus={removeAlert}
                                required
                            />
                            <span id="emailVR" style={{ color: 'red' }}></span>
                        </Form.Group>
                        <Button className="my-3 offset-5" type="submit" disabled={loading}>
                            {loading ? (
                                <><i className="fas fa-spinner" style={{ marginRight: '5px' }} />Submitting</>
                            ) : (
                                <>Submit</>
                            )}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default EmailForForgotPassword;
