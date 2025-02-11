import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentService from '../service/AppointmentService';
import moment from 'moment';

const DoctorCurrentAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getCurrentAppointments();
    }, []);

    const getCurrentAppointments = () => {
        let doctor = JSON.parse(sessionStorage.getItem("doctor"));
        if (!doctor?.userId) {
            alert("Doctor is not logged in!");
            navigate('/userLogin');
            return;
        }

        AppointmentService.getCurrentAppointmentsForDoctor(doctor.userId)
            .then(response => {
                console.log("Appointments:", response.data);
                setAppointments(response.data);
                setMessage("Appointment list rendered successfully");
            })
            .catch(error => {
                console.error("Error fetching appointments:", error.response?.data || error.message);
                alert(error.response?.data?.message || "Something went wrong!");
            });
    };

    const cancelAppointment = (appointmentId) => {
        if (window.confirm("Are you sure you want to cancel this appointment?")) {
            AppointmentService.cancelAppointment(appointmentId)
                .then(() => {
                    setMessage('Appointment cancelled!!!');
                    setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== appointmentId));
                })
                .catch(error => {
                    console.error("Error canceling appointment:", error.response?.data || error.message);
                    alert(error.response?.data?.message || "Failed to cancel appointment.");
                });
        }
    };

    return (
        <div className="container my-4">
            <button className="btn btn-secondary offset-11" onClick={() => navigate('/doctorDashboard')}>Go Back</button>
            {appointments.length === 0 ? (
                <h3>You have no active appointments</h3>
            ) : (
                <div>
                    <h3>Your Active Appointments</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th>S. No.</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Appointment Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment, index) => (
                                <tr key={appointment.id}>
                                    <td>{index + 1}</td>
                                    <td>{moment(Date.parse(appointment.appointmentTime)).format("D MMMM, YYYY")}</td>
                                    <td>{moment(Date.parse(appointment.appointmentTime)).format("LT")}</td>
                                    <td>{appointment.appointmentType}</td>
                                    <td>
                                        <button 
                                            className="btn btn-info mx-1"
                                            onClick={() => navigate('/patient-details-for-doctor', { state: { appointmentId: appointment.id } })}
                                        >
                                            Patient Details
                                        </button>
                                        <button className="btn btn-danger mx-1" onClick={() => cancelAppointment(appointment.id)}>
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default DoctorCurrentAppointments;
