import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppointmentService from '../service/AppointmentService';

const PatientDetailsForDoctor = () => {
    const [patient, setPatient] = useState({});
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getPatient();
    }, []);

    const getPatient = () => {
        console.log(location.state?.appointmentId);
        AppointmentService.getPatientByAppointmentId(location.state?.appointmentId)
            .then(response => {
                console.log(response.data);
                setPatient(response.data);
                setMessage("Patient retrieved successfully");
            })
            .catch(error => {
                console.error("Error:", error.response?.data);
                alert(error.response?.data?.message || "Error fetching patient details");
            });
    };

    return (
        <div className="container my-4">
            <button className="btn btn-secondary my-3 offset-10" onClick={() => navigate(-1)}>Go Back</button>
            <h3 className="text-center">Patient Details</h3>
            <div className="mx-auto" style={{ width: "700px" }}>
                <table className="table table-striped table-sm table-bordered">
                    <tbody>
                        <tr><td> First Name :</td><td> {patient.firstName}</td></tr>
                        <tr><td> Last Name :</td><td> {patient.lastName}</td></tr>
                        <tr><td> Mobile No :</td><td> {patient.mobileNumber}</td></tr>
                        <tr><td> Date Of Birth :</td><td> {patient.dob}</td></tr>
                        <tr><td> Gender :</td><td> {patient.gender}</td></tr>
                        <tr><td> Blood Group :</td><td> {patient.bloodGroup}</td></tr>
                        <tr><td> Email :</td><td> {patient.email}</td></tr>
                        <tr><td> State :</td><td> {patient.state}</td></tr>
                        <tr><td> Area :</td><td> {patient.area}</td></tr>
                        <tr><td> City :</td><td> {patient.city}</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientDetailsForDoctor;
