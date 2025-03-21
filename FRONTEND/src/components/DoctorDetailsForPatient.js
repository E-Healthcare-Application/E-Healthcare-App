import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppointmentService from '../service/AppointmentService';

const DoctorDetailsForPatient = () => {
    const [doctor, setDoctor] = useState({});
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getDoctor();
    }, []);

    const getDoctor = () => {
        if (!location.state?.appointmentId) {
            alert("Appointment ID is missing!");
            navigate(-1); // Go back to previous page
            return;
        }

        console.log("Fetching doctor details for appointment ID:", location.state.appointmentId);

        AppointmentService.getDoctorByAppointmentId(location.state.appointmentId)
            .then(response => {
                console.log("Doctor Data:", response.data);
                setDoctor(response.data);
                setMessage("Doctor retrieved successfully");
            })
            .catch(error => {
                console.error("Error fetching doctor:", error.response?.data || error.message);
                alert(error.response?.data?.message || "Something went wrong!");
            });
    };

    return (
        <div className="container my-4">
            <button className="btn btn-secondary my-3 offset-10" onClick={() => navigate(-1)}>Go Back</button>
            <h3 className="text-center">Doctor Details</h3>
            <div className="d-flex justify-content-center">
                <table className="table table-striped table-sm table-bordered w-50">
                    <tbody>
                        <tr>
                            <td><b>First Name:</b></td>
                            <td>{doctor.firstName}</td>
                        </tr>
                        <tr>
                            <td><b>Last Name:</b></td>
                            <td>{doctor.lastName}</td>
                        </tr>
                        <tr>
                            <td><b>Mobile No:</b></td>
                            <td>{doctor.mobileNumber}</td>
                        </tr>
                        <tr>
                            <td><b>Email:</b></td>
                            <td>{doctor.email}</td>
                        </tr>
                        <tr>
                            <td><b>State:</b></td>
                            <td>{doctor.state}</td>
                        </tr>
                        <tr>
                            <td><b>Area:</b></td>
                            <td>{doctor.area}</td>
                        </tr>
                        <tr>
                            <td><b>City:</b></td>
                            <td>{doctor.city}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorDetailsForPatient;
