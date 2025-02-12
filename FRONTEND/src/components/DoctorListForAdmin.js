import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminServiceMethods from '../service/AdminServiceMethods';
import Swal from 'sweetalert2';

const DoctorListForAdmin = () => {
    const [doctors, setDoctors] = useState([]);
    const [message, setMessage] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 5;

    const navigate = useNavigate();

    useEffect(() => {
        reloadDoctorList();
    }, []);

    const reloadDoctorList = () => {
        AdminServiceMethods.fetchAllDoctors()
            .then((resp) => {
                setDoctors(resp.data);
                setMessage("Doctor list rendered successfully");
                console.log("Doctor list rendered successfully");
            })
            .catch(error => {
                console.error("Error fetching doctors:", error.response?.data || error.message);
            });
    };

    const deleteDoctor = (doctorId) => {
        Swal.fire({
            title: 'Confirm Deletion',
            text: 'Are you sure you want to delete this doctor?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                AdminServiceMethods.deleteDoctor(doctorId)
                    .then(() => {
                        setDoctors(doctors.filter(doctor => doctor.id !== doctorId));
                        Swal.fire({
                            icon: 'success',
                            title: 'Deleted!',
                            text: 'Doctor has been deleted successfully.'
                        });
                    })
                    .catch(error => {
                        console.error('Error deleting doctor:', error.response?.data || error.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'An error occurred while deleting the doctor.'
                        });
                    });
            }
        });
    };

    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
    const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);
    const totalPages = Math.ceil(doctors.length / doctorsPerPage);

    return (
        <div className="container my-4">
            <button className="btn btn-secondary offset-11" onClick={() => navigate('/adminDashboard')}>
                Go Back
            </button>
            
            {doctors.length === 0 ? (
                <h3>No doctors in the database</h3>
            ) : (
                <div>
                    <h3>Doctor List</h3>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th className="visually-hidden">Id</th>
                                <th>Name</th>
                                <th>Qualification</th>
                                <th>Specialization</th>
                                <th>City</th>
                                <th>Consultation Fee</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentDoctors.map(doctor => (
                                <tr key={doctor.id}>
                                    <td className="visually-hidden">{doctor.id}</td>
                                    <td>{`${doctor.firstName} ${doctor.lastName}`}</td>
                                    <td>{doctor.qualification}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.city}</td>
                                    <td>{doctor.fees}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.mobileNumber}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteDoctor(doctor.id)}> 
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
                            {[...Array(totalPages).keys()].map(number => (
                                <li key={number + 1} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => setCurrentPage(number + 1)}>
                                        {number + 1}
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

export default DoctorListForAdmin;
