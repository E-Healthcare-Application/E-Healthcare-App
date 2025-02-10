import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminServiceMethods from '../service/AdminServiceMethods';
import Swal from 'sweetalert2';

const PatientList = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const patientsPerPage = 5;

    useEffect(() => {
        reloadPatientList();
    }, []);

    const reloadPatientList = () => {
        AdminServiceMethods.fetchAllPatients()
            .then((resp) => {
                setPatients(resp.data);
                console.log("Patient list rendered successfully");
            })
            .catch((error) => {
                console.error("Error fetching patients:", error);
            });
    };

    const deletePatient = (patientId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this patient!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                AdminServiceMethods.deletePatient(patientId)
                    .then(() => {
                        setPatients(patients.filter((patient) => patient.id !== patientId));
                        Swal.fire('Deleted!', 'The patient has been deleted.', 'success');
                    })
                    .catch((error) => {
                        console.error("Error deleting patient:", error);
                        Swal.fire('Error!', 'An error occurred while deleting the patient.', 'error');
                    });
            }
        });
    };

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

    const totalPages = Math.ceil(patients.length / patientsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="container my-4">
            <button className="btn btn-secondary offset-11" onClick={() => navigate('/adminDashboard')}>
                Go Back
            </button>
            {patients.length === 0 ? (
                <h3>No patients in database</h3>
            ) : (
                <div>
                    <h3>Patient List</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th className="visually-hidden">Id</th>
                                <th>Name</th>
                                <th>D.O.B.</th>
                                <th>City</th>
                                <th>Gender</th>
                                <th>Blood Group</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPatients.map((patient) => (
                                <tr key={patient.id}>
                                    <td className="visually-hidden">{patient.id}</td>
                                    <td>{`${patient.firstName} ${patient.lastName}`}</td>
                                    <td>{patient.dob}</td>
                                    <td>{patient.city}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.bloodGroup}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.mobileNumber}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deletePatient(patient.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination justify-content-center">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                                    Previous
                                </button>
                            </li>
                            {pageNumbers.map((number) => (
                                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => setCurrentPage(number)}>
                                        {number}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PatientList;
