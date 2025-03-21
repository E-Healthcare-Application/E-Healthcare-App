

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import "./ContactUs.css";
import img1 from "../assets/email.png";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function ContactUs() {
  const handleSubmit = (values, { resetForm }) => {
    // Perform your submission logic here
    // For demonstration purposes, I'm just showing a success alert
    Swal.fire("Success!", "Your message has been sent.", "success");
    resetForm();
  };

  return (
    <div>
      <main className="contact-us">
        <section className="contact-section">
          <Container>
            <Row>
              <Col md={6}>
                <h2>Contact Us</h2>
                <Formik
                  initialValues={{ name: "", email: "", message: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label>Your Name</Form.Label>
                        <Field
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error-message text-danger"
                        />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email address"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error-message text-danger"
                        />
                      </Form.Group>
                      <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Field
                          className="form-control mb-3"
                          as="textarea"
                          rows={5}
                          name="message"
                          placeholder="Enter your message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error-message text-danger"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Send Message
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Col>
              <Col md={6}>
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <p>
                    <strong>Address:</strong> E-Healthcare, 203, Anuda Chambers, Shaniwar Peth, near Gujar Hospital, Karad, Maharashtra 415110
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 8007592194
                  </p>
                  <p>
                    <strong>Email:</strong> E-healthcare@gmail.com
                  </p>
                  <p>
                    <img src={img1} className="img-fluid" alt="Email" />
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer>{/* Insert your footer code here */}</footer>
    </div>
  );
}

export default ContactUs;


