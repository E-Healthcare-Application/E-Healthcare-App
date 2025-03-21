import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import img1 from "../assets/heart.png";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <main className="home">
        {/* Hero Section */}
        <section className="hero-section">
          <Container>
            <Row>
              <Col md={6} className="hero-text">
                <h1>Welcome to E-Healthcare Application</h1>
                <p>
                  This platform allows booking medical consultations with specialist doctors online.
                  Patients can book appointments by selecting available time slots provided by doctors.
                </p>
              </Col>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-start">
                <Link className="btn btn-success btn-lg text-uppercase mx-3" to="/patient-sign-up">
                  User Sign Up
                </Link>

                <Link className="btn btn-info btn-lg text-uppercase text-dark mx-3" to="/userLogin">
                  Login
                </Link>
              </div>
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <Container>
            <Row>
              <Col md={4}>
                <div className="feature-item">
                  <i className="fas fa-heart"></i>
                  <h3>Save Lives</h3>
                  <p>By donating blood, you can help save lives and support medical treatments.</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="feature-item">
                  <i className="fas fa-users"></i>
                  <h3>Community</h3>
                  <p>Join our blood donation community and make a positive impact in your area.</p>
                </div>
              </Col>

              <Col md={4}>
                <div className="feature-item">
                  <i className="fas fa-medkit"></i>
                  <h3>Health Benefits</h3>
                  <p>Regular blood donation has numerous health benefits for the donors.</p>
                </div>
              </Col>
            </Row>

            {/* Image */}
            <Row className="justify-content-center mt-4">
              <Col md={6}>
                <img src={img1} className="img-fluid" alt="Healthcare" />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Home;
