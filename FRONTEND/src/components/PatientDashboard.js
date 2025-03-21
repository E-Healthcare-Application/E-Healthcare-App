import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import PatientServiceMethods from '../service/PatientServiceMethods';
import EmailForForgotPassword from './EmailForForgotPassword';
import img1 from "../assets/medical-appointment.png";
import img2 from "../assets/calendar.png";
import img3 from "../assets/online.png";
import img4 from "../assets/profile.png";

const PatientDashboard = () => {
    const [patientId, setPatientId] = useState('');
    const [firstName, setFirstName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        loadPatient();
    }, []);

    const loadPatient = () => {
        let patient = JSON.parse(sessionStorage.getItem('patient'));
        if (patient) {
            setPatientId(patient.userId);
            setFirstName(patient.userFirstName);
        }
    };

    const updatePatient = () => {
        navigate('/update-profile');
    };

    const logoutPatient = () => {
        PatientServiceMethods.logoutPatient();
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-sm-6">
                    <h2 className="text-capitalize">Hello, {firstName}</h2>
                </div>
                <div className="col-sm-6">
                    <NavLink
                        onClick={logoutPatient}
                        className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none"
                        to="/"
                    >
                        Logout
                    </NavLink>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="Book Appointment" style={{ width: "80%", height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Book Appointment</h5>
                            <p className="card-text">Book appointments with the best doctors in the city.</p>
                            <button onClick={() => navigate('/specialization-list-by-city')} className="btn btn-primary">
                                Book
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="Show Current Appointment" style={{ width: "80%", height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Show Current Appointment</h5>
                            <p className="card-text">View your current appointment.</p>
                            <button onClick={() => navigate('/current-app')} className="btn btn-warning">
                                View
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="View Appointment History" style={{ width: "80%", height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title">View Appointment History</h5>
                            <p className="card-text">Click to view your till date appointment history.</p>
                            <button onClick={() => navigate('/app-history')} className="btn btn-info">
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-sm-4">
                    <div className="card">
                        <img src={img4} className="card-img-top" alt="Update Profile" style={{ width: "80%", height: "250px" }} />
                        <div className="card-body">
                            <h5 className="card-title">Update Profile</h5>
                            <p className="card-text">Edit your account details.</p>
                            <button className="btn btn-success" onClick={updatePatient}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
