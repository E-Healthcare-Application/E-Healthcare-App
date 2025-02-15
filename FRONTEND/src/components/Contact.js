// // import React from 'react'

// // const Contact = () => {
// //     return (
// //         <>
// //             <div className="container">
// //                 <h2 className="py-3 text-center">Contact</h2>
// //                 <h3>
// //                     Start working with us today. To get added as a doctor please email your details to any of the given admin below :
// //                 </h3>
// //                 <ul style={{color : "blue"}}>
// //                     <li>
// //                         <h4> 
                                          
// //                         </h4>
// //                     </li>
// //                     <li>
// //                         <h4>
                        
// //                         </h4>
// //                     </li>
// //                 </ul>
            
                
// //                 </div>
// //         </>
// //     )
// // }

// // export default Contact

// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import "./ContactUs.css";
// import img1 from "../assets/email.png"
// function ContactUs() {
//   return (
//     <div>
//       <main className="contact-us">
//         <section className="contact-section">
//           <Container>
//             <Row>
//               <Col md={6}>
//                 <h2>Contact Us</h2>
//                 <Form>
//                   <Form.Group controlId="name">
//                     <Form.Label>Your Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your name"
                      
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="email">
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter your email address"
                      
//                     />
//                   </Form.Group>
//                   <Form.Group controlId="message">
//                     <Form.Label>Message</Form.Label>
//                     <Form.Control
//                     className="mb-3"
//                       as="textarea"
//                       rows={5}
//                       placeholder="Enter your message"
                      
//                     />
//                   </Form.Group>
//                   <Button variant="primary" type="submit">
//                     Send Message
//                   </Button>
//                 </Form>
//               </Col>
//               <Col md={6}>
//                 <div className="contact-info">
//                   <h3>Contact Information</h3>
//                   <p>
//                     <strong>Address:</strong>AIIMS Hospital Ansari Nagar East, Gautam Nagar, Ansari Nagar East, New Delhi, 110029
//                     Code
//                   </p>
//                   <p>
//                     <strong>Phone:</strong> +91 8007592194
//                   </p>
//                   <p>
//                     <strong>Email:</strong> freelance_project@hospital.com
//                   </p>
//                   <p>
//                     <img src={img1} className="img-fluid" />
//                   </p>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>
//       </main>

//       <footer>{/* Insert your footer code here */}</footer>
//     </div>
//   );
// }

// export default ContactUs;

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
                    <strong>Address:</strong> AIIMS Hospital Ansari Nagar East, Gautam Nagar, Ansari Nagar East, New Delhi, 110029 Code
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 8007592194
                  </p>
                  <p>
                    <strong>Email:</strong> freelance_project@hospital.com
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


