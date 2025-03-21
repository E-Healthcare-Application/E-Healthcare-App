import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useNavigate, useLocation } from 'react-router-dom';
import AppointmentService from '../service/AppointmentService';

const ShowAppointmentSlots = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [slots, setSlots] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        getSlots();
    }, []);

    const getSlots = () => {
        if (!location.state?.doctorId) {
            alert("Doctor ID is missing!");
            navigate('/doctorDashboard');
            return;
        }

        console.log("Doctor ID:", location.state.doctorId);
        AppointmentService.getAllAppointmentSlots(location.state.doctorId)
            .then(response => {
                console.log("Slots:", response.data);
                setSlots(response.data);
                setMessage("Slots retrieved successfully");
            })
            .catch(error => {
                console.error("Error fetching slots:", error.response?.data || error.message);
                alert(error.response?.data?.message || "Something went wrong!");
            });
    };

    return (
        <div className="container">
            <button 
                className="btn btn-secondary offset-11 mt-3" 
                style={{ minWidth: "7vw" }} 
                onClick={() => navigate('/doctorDashboard')}
            >
                Go Back
            </button>
            <h3 className="bg-dark text-light py-2 mt-3 text-center">Today's Available Slots</h3>

            {slots.length > 0 ? (
                <div className="container d-flex justify-content-around">
                    <div>
                        {slots
                            .sort((a, b) => Date.parse(a) - Date.parse(b))
                            .map(slot => (
                                <button 
                                    key={slot} 
                                    className="btn btn-success my-3 mx-3 btn-link text-decoration-none text-light" 
                                    style={{ minWidth: "7vw" }}
                                >
                                    {moment(Date.parse(slot)).format("LT")}
                                </button>
                            ))
                        }
                    </div>
                </div>
            ) : (
                <h5 className="text-center mt-3">No available slots today.</h5>
            )}
        </div>
    );
};

export default ShowAppointmentSlots;
