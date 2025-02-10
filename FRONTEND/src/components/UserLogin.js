import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import UserLoginAPI from '../service/UserLoginAPI';

const UserLogin = () => {
    const navigate = useNavigate(); 

    const login = async (values) => {
        if (values.password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Password Error',
                text: 'Password cannot be empty',
            });
            return;
        }

        try {
            const response = await UserLoginAPI.userLogin(values);
            const userType = response.data.userType;

            sessionStorage.setItem(userType, JSON.stringify(response.data));

            let redirectPath = '';
            switch (userType) {
                case 'patient':
                    redirectPath = '/patientDashboard';
                    break;
                case 'doctor':
                    redirectPath = '/doctorDashboard';
                    break;
                default:
                    redirectPath = '/adminDashboard';
                    break;
            }

            navigate(redirectPath);

            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'You have successfully logged in.',
            });
        } catch (error) {
            console.error("Login Error:", error.response?.data);
            const errorMessage = error.response?.data?.message || 'An error occurred while logging in';

            Swal.fire({
                icon: 'error',
                title: 'Login Error',
                text: errorMessage,
            });
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card style={{ width: '35rem' }}>
                <Card.Body className="text-center">
                    <Card.Title className="mb-4">Login Form</Card.Title>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email').required('Email is required'),
                            password: Yup.string().required('Password is required'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            login(values);
                            setSubmitting(false);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={touched.email && errors.email ? 'mb-4 is-invalid' : 'mb-4'}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-danger" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={touched.password && errors.password ? 'mb-4 is-invalid' : 'mb-4'}
                                    />
                                    <ErrorMessage name="password" component="div" className="text-danger" />
                                </Form.Group>
                                <Row>
                                    <Col xs={7}>
                                        <Button
                                            type="submit"
                                            variant="success"
                                            className="text-uppercase mb-3 offset-8"
                                            disabled={isSubmitting}
                                        >
                                            LOGIN
                                        </Button>
                                    </Col>
                                    <Col xs={5} className="mt-1">
                                        <Button
                                            variant="link"
                                            className="text-dark"
                                            onClick={() => navigate('/email-for-forgot-password')}
                                        >
                                            Forgot Password?
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserLogin;
