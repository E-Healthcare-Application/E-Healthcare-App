import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import moment from 'moment';
import AppointmentService from '../service/AppointmentService';

const DoctorAppointmentSlots = () => {
    const [slots, setSlots] = useState([]);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getSlots();
    }, []);

    // Fetch available slots for the doctor
    const getSlots = () => {
        if (!location.state?.doctor) {
            alert("Doctor details are missing!");
            navigate('/patientDashboard');
            return;
        }

        const doctor = location.state.doctor;
        sessionStorage.setItem("doctor", JSON.stringify(doctor));

        AppointmentService.getAllAppointmentSlots(doctor.id)
            .then(response => {
                console.log("Available Slots:", response.data);
                setSlots(response.data);  // Set slots received from API
            })
            .catch(error => {
                console.error("Error fetching slots:", error.response?.data || error.message);
                setMessage("Failed to retrieve slots.");
            });
    };

    // Navigate to confirmation page before booking
    const bookSlot = (slot) => {
        navigate('/book-slot-for-patient', {
            state: {
                doctor: doctor,
                time: slot
            }
        });
    };

    const doctor = JSON.parse(sessionStorage.getItem("doctor"));

    return (
        <div className="container my-4">
            <button 
                className="btn btn-secondary offset-11" 
                style={{ minWidth: "7vw" }} 
                onClick={() => navigate('/patientDashboard')}
            >
                Go Back
            </button>
            <h3 className="bg-dark text-light py-2 my-3 text-center">Today's Available Slots</h3>

            <div className="container d-flex justify-content-around">
                {slots.length === 0 ? (
                    <h3>No slots available right now</h3>
                ) : (
                    <div>
                        {slots
                            .sort((a, b) => Date.parse(a) - Date.parse(b))
                            .map(slot => (
                                <button
                                    key={slot}
                                    onClick={() => bookSlot(slot)}
                                    className="btn btn-success my-3 mx-3 text-light"
                                    style={{ minWidth: "12vw" }}
                                >
                                    {moment(Date.parse(slot)).format("LT")}
                                </button>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorAppointmentSlots;
