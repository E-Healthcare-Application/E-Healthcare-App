import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentService from '../service/AppointmentService';
import Card from 'react-bootstrap/Card';

const SpecializationListByCity = () => {
    const navigate = useNavigate(); // Used for navigation

    // State management using useState
    const [specializations, setSpecializations] = useState([]);
    const [city, setCity] = useState('Pune');

    // Fetch specializations when component mounts
    useEffect(() => {
        searchSpecializations();
    }, []);

    // Fetch specialization list for the given city
    const searchSpecializations = () => {
        AppointmentService.getSpecializationListByCity(city)
            .then(response => {
                setSpecializations(response.data);
            })
            .catch(error => console.error("Error fetching specializations:", error));
    };

    // Handle form submission for city search
    const handleSearch = (e) => {
        e.preventDefault();
        searchSpecializations();
    };

    return (
        <div className="mx-4 mt-4">
            <Card style={{ backgroundColor: "aliceblue" }}>
                <Card.Body>
                    <div className="container overflow-hidden">
                        <div className="row my-3">
                            <div className="col-md-6 offset-md-3 text-center">
                                <h3 className="text-muted">Select Specialization</h3>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-secondary text-uppercase"
                                    onClick={() => navigate(-1)} // Navigate back
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <form onSubmit={handleSearch}>
                                    <div className="form-group">
                                        <label htmlFor="city" style={{ fontWeight: 'bold' }}>City:</label>
                                        <input
                                            type="text"
                                            id="city"
                                            className="form-control"
                                            name="city"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-primary mt-3" type="submit">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="row mt-3">
                            {specializations.length === 0 ? (
                                <h3 className="text-center col-12">We will be in your city soon</h3>
                            ) : (
                                specializations.map((specialization, index) => (
                                    <div className="col-md-4 mb-3" key={index}>
                                        <Card>
                                            <Card.Body className="text-center">
                                                <button
                                                    className="btn btn-lg btn-outline-secondary"
                                                    onClick={() => navigate('/doctor-list-patient', { state: { city, specialization } })}
                                                >
                                                    {specialization}
                                                </button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SpecializationListByCity;
