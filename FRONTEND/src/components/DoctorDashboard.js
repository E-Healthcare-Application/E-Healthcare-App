import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorServiceMethods from '../service/DoctorServiceMethods';

const DoctorDashboard = () => {
    const [doctorId, setDoctorId] = useState('');
    const [firstName, setFirstName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        loadDoctor();
    }, []);

    const loadDoctor = () => {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));
        if (doctor) {
            setDoctorId(doctor.userId);
            setFirstName(doctor.userFirstName);
        }
    };

    const logout = () => {
        DoctorServiceMethods.doctorLogout();
        navigate('/userLogin'); // Redirect after logout
    };

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-sm-6">
                    <h2 className="text-capitalize">Hello, Dr. {firstName}</h2>
                </div>
                <div className="col-sm-6">
                    <button onClick={logout} className="btn btn-danger offset-10 text-uppercase">Logout</button>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Active Appointments</h5>
                            <p className="card-text">View all your active appointments at present.</p>
                            <button onClick={() => navigate('/doctor-current-app')} className="btn btn-primary">VIEW</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Appointment History</h5>
                            <p className="card-text">View your appointment history.</p>
                            <button onClick={() => navigate('/doctor-app-history')} className="btn btn-info">VIEW</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create Slots</h5>
                            <p className="card-text">Fill a form to create your slot time-table according to your convenience.</p>
                            <button onClick={() => navigate('/create-appointment-slots')} className="btn btn-success">CREATE</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Show Today's Slots</h5>
                            <p className="card-text">Display all slots available for today</p>
                            <button 
                                onClick={() => navigate('/show-appointment-slots-doctor', { state: { doctorId } })} 
                                className="btn btn-warning"
                            >
                                VIEW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Update Profile</h5>
                            <p className="card-text">Update your account details.</p>
                            <button onClick={() => navigate('/update-doctor-profile')} className="btn btn-danger">UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;
