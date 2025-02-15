import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import AppointmentService from '../service/AppointmentService';

const DoctorListForPatient = () => {
    const [doctors, setDoctors] = useState([]);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getDoctorList();
    }, []);

    const getDoctorList = () => {
        if (!location.state?.city || !location.state?.specialization) {
            alert("City or Specialization missing!");
            navigate('/specialization-list-by-city');
            return;
        }

        console.log("City:", location.state.city);
        console.log("Specialization:", location.state.specialization);

        AppointmentService.getDoctorsBySpecializationAndCity(location.state.specialization, location.state.city)
            .then(response => {
                console.log("Doctor List:", response.data);
                setDoctors(response.data);
                setMessage("Doctor list rendered successfully");
            })
            .catch(error => {
                console.error("Error:", error.response?.data || error.message);
                alert(error.response?.data?.message || "Something went wrong!");
            });
    };

    return (
        <div className="container my-4">
            <button className="btn btn-secondary offset-11" onClick={() => navigate('/specialization-list-by-city')}>
                Go Back
            </button>
            <h3>Available {location.state?.specialization}s in {location.state?.city}</h3>
            <table className="table table-bordered">
                <thead className="bg-dark text-light">
                    <tr>
                        <th className="visually-hidden">Id</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>Consultation Fee</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                        <th>Area</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.length > 0 ? (
                        doctors.map(doctor => (
                            <tr key={doctor.id}>
                                <td className="visually-hidden">{doctor.id}</td>
                                <td>{`Dr. ${doctor.firstName} ${doctor.lastName}`}</td>
                                <td>{doctor.qualification}</td>
                                <td>{doctor.fees}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.mobileNumber}</td>
                                <td>{doctor.area}</td>
                                <td>
                                    <NavLink className="btn btn-success text-decoration-none text-light"
                                        to="/doctor-appointment-slots"
                                        state={{ doctor }}
                                    >
                                        Book Appointment
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">No doctors available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DoctorListForPatient;
