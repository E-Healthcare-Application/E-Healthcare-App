import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AdminServiceMethods from '../service/AdminServiceMethods';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';

// Validation Schema
const validationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Username must be at least 3 characters').max(15, 'Username must be less than 15 characters').required('Username is required'),
  firstName: Yup.string().min(3, 'First Name must be at least 3 characters').max(15, 'First Name must be less than 15 characters').required('First Name is required'),
  lastName: Yup.string().min(3, 'Last Name must be at least 3 characters').max(15, 'Last Name must be less than 15 characters').required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dob: Yup.date().required('Date of Birth is required'),
  password: Yup.string().matches(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,
    'Password must be alphanumeric, include a special character, and be at least 6 characters long'
  ).required('Password is required'),
  gender: Yup.string().required('Gender is required'),
  mobileNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Mobile Number is required'),
  area: Yup.string().min(4, 'Area must be at least 4 characters').required('Area is required'),
  city: Yup.string().min(3, 'City must be at least 3 characters').required('City is required'),
  state: Yup.string().min(3, 'State must be at least 3 characters').required('State is required'),
  languages: Yup.string().min(3, 'Languages must be at least 3 characters').required('Languages are required'),
  fees: Yup.number().min(200, 'Minimum fee is 200').max(10000, 'Maximum fee is 10000').required('Consultation Fee is required'),
  qualification: Yup.string().min(2, 'Qualification must be at least 2 characters').required('Qualification is required'),
  specialization: Yup.string().required('Specialization is required'),
});

const SignUpNewDoctor = () => {
  const navigate = useNavigate();

  const addDoctor = (values) => {
    AdminServiceMethods.addNewDoctor(values)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Doctor added successfully.',
        });
        navigate('/adminDashboard');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response?.data?.message || 'An error occurred while adding the doctor',
        });
      });
  };

  return (
    <div className="mx-5 mt-4">
      <Card>
        <Card.Body>
          <div className="container overflow-hidden" style={{ minHeight: "100vh", backgroundColor: "aliceblue" }}>
            <div className="row mt-3">
              <div className="col-sm-8">
                <h2 className="text-muted offset-9"><b>Add Doctor</b></h2>
              </div>
              <div className="col-sm-4">
                <button className="btn btn-secondary text-uppercase offset-8" onClick={() => navigate('/')}>Go Back</button>
              </div>
            </div>

            <Formik
              initialValues={{
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                dob: '',
                gender: '',
                mobileNumber: '',
                area: '',
                city: '',
                state: '',
                languages: '',
                fees: '',
                qualification: '',
                specialization: '',
              }}
              validationSchema={validationSchema}
              onSubmit={addDoctor}
            >
              {() => (
                <Form>
                  {/* Username */}
                  <FieldGroup label="Username" name="username" placeholder="Enter a unique username" />
                  <FieldGroup label="First Name" name="firstName" placeholder="Doctor's first name" />
                  <FieldGroup label="Last Name" name="lastName" placeholder="Doctor's last name" />
                  <FieldGroup label="Email" name="email" type="email" placeholder="e.g. abc@xyz.com" />
                  <FieldGroup label="Password" name="password" type="password" placeholder="Enter Password" />
                  <FieldGroup label="Date of Birth" name="dob" type="date" />
                  <FieldGroup label="Mobile Number" name="mobileNumber" placeholder="Doctor's mobile number" />
                  <FieldGroup label="Area" name="area" placeholder="Doctor's Clinic Area" />
                  <FieldGroup label="City" name="city" placeholder="Doctor's City" />
                  <FieldGroup label="State" name="state" placeholder="Doctor's State" />
                  <FieldGroup label="Languages" name="languages" placeholder="Languages known by doctor" />
                  <FieldGroup label="Consultation Fee" name="fees" type="number" placeholder="Enter fee" />
                  <FieldGroup label="Qualification" name="qualification" placeholder="Doctor's Qualification" />

                  {/* Gender */}
                  <div className="form-group row my-3 justify-content-center">
                    <label className="col-2 col-form-label"><b>Gender</b></label>
                    <div className="col-5 d-flex justify-content-between">
                      <label><Field type="radio" name="gender" value="MALE" /> Male</label>
                      <label><Field type="radio" name="gender" value="FEMALE" /> Female</label>
                      <label><Field type="radio" name="gender" value="OTHER" /> Other</label>
                    </div>
                    <ErrorMessage name="gender" component="div" className="text-danger" />
                  </div>

                  {/* Specialization */}
                  <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="specialization" className="col-2 col-form-label"><b>Specialization</b></label>
                    <div className="col-5">
                      <Field as="select" className="form-control" name="specialization">
                        <option value="" disabled>--Select--</option>
                        <option value="Physician">Physician</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Gynecologist">Gynecologist</option>
                      </Field>
                      <ErrorMessage name="specialization" component="div" className="text-danger" />
                    </div>
                  </div>

                  <button className="btn btn-lg btn-primary text-uppercase mb-5 offset-6" type="submit">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

// Reusable Field Component
const FieldGroup = ({ label, name, type = "text", placeholder }) => (
  <div className="form-group row my-3 justify-content-center">
    <label htmlFor={name} className="col-2 col-form-label"><b>{label}</b></label>
    <div className="col-5">
      <Field type={type} className="form-control" name={name} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" className="text-danger" />
    </div>
  </div>
);

export default SignUpNewDoctor;
