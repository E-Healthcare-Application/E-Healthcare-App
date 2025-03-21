import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorServiceMethods from '../service/DoctorServiceMethods';

const UpdateDoctorProfile = () => {
    const navigate = useNavigate(); // ✅ For navigation

    // ✅ State using useState (instead of this.state)
    const [doctor, setDoctor] = useState({
        id: '',
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        mobileNumber: '',
        beganPractice: '',
        area: '',
        city: '',
        state: '',
        languages: '',
        fees: '',
        qualification: '',
        specialization: '',
        message: null
    });

    // ✅ Fetch doctor details when component mounts
    useEffect(() => {
        loadDoctor();
    }, []);

    const loadDoctor = () => {
        let storedDoctor = JSON.parse(sessionStorage.getItem("doctor"));
        if (storedDoctor) {
            DoctorServiceMethods.getDoctorById(storedDoctor.userId)
                .then(response => {
                    setDoctor(response.data); //  Update state with API response
                })
                .catch(err => console.error("Error loading doctor data:", err));
        }
    };

    //  Handle input change
    const onChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };

    //  Save updated doctor details
    const saveDoctor = (e) => {
        e.preventDefault();
        DoctorServiceMethods.updateDoctorDetails(doctor.id, doctor)
            .then(() => {
                alert('Doctor details updated successfully.');
                navigate('/doctorDashboard'); // ✅ Navigate to Dashboard after update
            })
            .catch(err => console.error("Error updating doctor data:", err));
    };

    return (
        <div className="container overflow-hidden" style={{ minHeight: "100vh" }}>
            <div className="row my-3">
                <div className="col-sm-8">
                    <h2 className="text-muted offset-8">Update Profile</h2>
                </div>
                <div className="col-sm-4">
                    <button className="btn btn-secondary text-uppercase offset-8" onClick={() => navigate('/doctorDashboard')}>
                        Go Back
                    </button>
                </div>
            </div>

            {/* Form */}
            <form className="mb-5">
                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="username" className="col-2 col-form-label">Username</label>
                    <div className="col-5">
                        <input type="text" id="username" className="form-control" name="username" value={doctor.username} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="firstName" className="col-2 col-form-label">First Name</label>
                    <div className="col-5">
                        <input type="text" id="firstName" className="form-control" name="firstName" value={doctor.firstName} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
                    <div className="col-5">
                        <input type="text" id="lastName" className="form-control" name="lastName" value={doctor.lastName} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="email" className="col-2 col-form-label">Email</label>
                    <div className="col-5">
                        <input type="email" id="email" className="form-control" name="email" value={doctor.email} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="dob" className="col-2 col-form-label">Date of Birth</label>
                    <div className="col-5">
                        <input type="date" id="dob" className="form-control" name="dob" value={doctor.dob} readOnly />
                    </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="mobileNumber" className="col-2 col-form-label">Mobile</label>
                    <div className="col-5">
                        <input type="text" id="mobileNumber" className="form-control" name="mobileNumber" value={doctor.mobileNumber} onChange={onChange} pattern="[0-9]{10}" />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="area" className="col-2 col-form-label">Area</label>
                    <div className="col-5">
                        <input type="text" id="area" className="form-control" name="area" value={doctor.area} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="city" className="col-2 col-form-label">City</label>
                    <div className="col-5">
                        <input type="text" id="city" className="form-control" name="city" value={doctor.city} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="state" className="col-2 col-form-label">State</label>
                    <div className="col-5">
                        <input type="text" id="state" className="form-control" name="state" value={doctor.state} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="languages" className="col-2 col-form-label">Languages</label>
                    <div className="col-5">
                        <input type="text" id="languages" className="form-control" name="languages" value={doctor.languages} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="fees" className="col-2 col-form-label">Consultation Fee</label>
                    <div className="col-5">
                        <input type="number" id="fees" className="form-control" name="fees" min="200" max="1000" step="50" value={doctor.fees} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="qualification" className="col-2 col-form-label">Qualification</label>
                    <div className="col-5">
                        <input type="text" id="qualification" className="form-control" name="qualification" value={doctor.qualification} onChange={onChange} />
                    </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                    <label htmlFor="specialization" className="col-2 col-form-label">Specialization</label>
                    <div className="col-5">
                        <input type="text" id="specialization" className="form-control" name="specialization" value={doctor.specialization} onChange={onChange} />
                    </div>
                </div>

                <button className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6" onClick={saveDoctor}>
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateDoctorProfile;
