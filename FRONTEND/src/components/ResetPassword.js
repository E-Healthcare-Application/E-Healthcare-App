import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import UserLoginAPI from '../service/UserLoginAPI';
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = location.state?.email;

        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No email found for password reset.',
            });
            return;
        }

        if (password === confirmPassword) {
            UserLoginAPI.resetPassword(email, password)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Password Changed',
                        text: 'Password changed successfully!',
                    }).then(() => {
                        navigate('/userLogin');
                    });
                })
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Same Password',
                        text: 'Password is same as the previous password.',
                    }).then(() => {
                        navigate('/userLogin');
                    });
                });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Password Mismatch',
                text: 'Passwords do not match. Please try again.',
            }).then(() => {
                navigate('/reset-password', { state: { email } });
            });
        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center vh-50">
            <Card className="w-50" style={{ backgroundColor: "bisque" }}>
                <Card.Body>
                    <h2 className="text-center mt-3">Reset Password</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                className="text-center mt-3"
                                placeholder="New Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Control
                                type="password"
                                className="text-center"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="my-3 offset-5">
                            SUBMIT
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ResetPassword;
