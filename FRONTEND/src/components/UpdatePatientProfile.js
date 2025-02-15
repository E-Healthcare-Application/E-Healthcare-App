import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientServiceMethods from '../service/PatientServiceMethods';

const UpdatePatientProfile = () => {
    const navigate = useNavigate(); //  For navigation

    //  State using useState (instead of this.state)
    const [patient, setPatient] = useState({
        id: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        bloodGroup: '',
        mobileNumber: '',
        area: '',
        city: '',
        state: '',
        message: null
    });

    //  Fetch patient details when component mounts
    useEffect(() => {
        loadPatient();
    }, []);

    const loadPatient = () => {
        let storedPatient = JSON.parse(sessionStorage.getItem("patient"));
        if (storedPatient) {
            PatientServiceMethods.getPatientById(storedPatient.userId)
                .then(res => {
                    setPatient(res.data); //  Update state with API response
                })
                .catch(err => console.error("Error loading patient data:", err));
        }
    };

    //  Handle input change
    const onChange = (e) => {
        setPatient({ ...patient, [e.target.name]: e.target.value });
    };

    //  Handle blood group change
    const handleBloodGroupChange = (e) => {
        setPatient({ ...patient, bloodGroup: e.target.value });
    };

    // Save updated patient details
    const savePatient = (e) => {
        e.preventDefault();
        PatientServiceMethods.updatePatientDetails(patient.id, patient)
            .then(() => {
                alert('Patient details updated successfully.');
                navigate('/patientDashboard'); // Navigate to Dashboard after update
            })
            .catch(err => console.error("Error updating patient data:", err));
    };

    return (
        <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
            <div className="row my-3">
                <div className="col-sm-8">
                    <h2 className="text-muted offset-8">Update Profile</h2>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-secondary text-uppercase offset-8" onClick={() => navigate('/patientDashboard')}>
                        Go Back
                    </button>
                </div>
            </div>

            {/* Form */}
            <form className="mb-4">
                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="username" className="col-2 col-form-label">Username</label>
                    <div className="col-5">
                        <input type="text" id="username" className="form-control" name="username" value={patient.username} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="firstName" className="col-2 col-form-label">First Name</label>
                    <div className="col-5">
                        <input type="text" id="firstName" className="form-control" name="firstName" value={patient.firstName} onChange={onChange} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
                    <div className="col-5">
                        <input type="text" id="lastName" className="form-control" name="lastName" value={patient.lastName} onChange={onChange} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="email" className="col-2 col-form-label">Email</label>
                    <div className="col-5">
                        <input type="email" id="email" className="form-control" name="email" value={patient.email} onChange={onChange} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="dob" className="col-2 col-form-label">Date of Birth</label>
                    <div className="col-5">
                        <input type="date" id="dob" className="form-control" name="dob" value={patient.dob} onChange={onChange} readOnly />
                    </div>
                </div>

                {/* Blood Group Dropdown */}
                <div className="form-group row my-3 justify-content-center">
                    <label className="col-2 col-form-label">Blood Group</label>
                    <div className="col-5">
                        <select value={patient.bloodGroup} onChange={handleBloodGroupChange} className="form-control" disabled>
                            <option value="" disabled>--select--</option>
                            <option value="A_POSITIVE">A+</option>
                            <option value="A_NEGATIVE">A-</option>
                            <option value="B_POSITIVE">B+</option>
                            <option value="B_NEGATIVE">B-</option>
                            <option value="O_POSITIVE">O+</option>
                            <option value="O_NEGATIVE">O-</option>
                            <option value="AB_POSITIVE">AB+</option>
                            <option value="AB_NEGATIVE">AB-</option>
                        </select>
                    </div>
                </div>

                {/* Mobile Number */}
                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="mobileNumber" className="col-2 col-form-label">Mobile</label>
                    <div className="col-5">
                        <input type="text" id="mobileNumber" className="form-control" name="mobileNumber" value={patient.mobileNumber} onChange={onChange} pattern="[0-9]{10}" />
                    </div>
                </div>

                {/* Address Fields */}
                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="area" className="col-2 col-form-label">Area</label>
                    <div className="col-5">
                        <input type="text" id="area" className="form-control" name="area" value={patient.area} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="city" className="col-2 col-form-label">City</label>
                    <div className="col-5">
                        <input type="text" id="city" className="form-control" name="city" value={patient.city} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="state" className="col-2 col-form-label">State</label>
                    <div className="col-5">
                        <input type="text" id="state" className="form-control" name="state" value={patient.state} onChange={onChange} />
                    </div>
                </div>

                {/* Update Button */}
                <button className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6" onClick={savePatient}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdatePatientProfile;
