

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PatientServiceMethods from '../service/PatientServiceMethods';
import Card from 'react-bootstrap/Card';

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3,'Username must 3 charecter').max(15,'Username not more than 15 charecter').required('Username is required'),
  firstName: Yup.string().min(3,'Name must 3 charecter').max(15,'Name not more than 15 charecter').required('First Name is required'),
  lastName: Yup.string().min(3,'Last name must 3 charecter').max(15,'Last name not more than 15 charecter').required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/, 'Password must be alphanumeric and should contain at least one special character with a minimum length of 6 characters')
    .required('Password is required'),
  dob: Yup.date().required('Date of Birth is required'),
  gender: Yup.string().required('Gender is required'),
  bloodGroup: Yup.string().required('Blood Group is required'),
  mobileNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Mobile Number is required'),
  area: Yup.string().min(3,'Area must 3 charecter').max(30,'Area not more than 30 charecter').required('Area is required'),
  city: Yup.string().min(3,'city name must 3 charecter').max(15,'city name not more than 15 charecter').required('City is required'),
  state: Yup.string().min(3,'State must 3 charecter').max(15,'state not more than 15 charecter').required('State is required'),
});

const initialValues = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  dob: '',
  gender: '',
  bloodGroup: '',
  mobileNumber: '',
  area: '',
  city: '',
  state: '',
};

const PatientSignUp = ({ history }) => {
  const handleSubmit = (values) => {
    PatientServiceMethods.addPatient(values)
      .then(() => {
        alert('User added successfully.');
        history.push('/');
      })
      .catch(error => {
        console.error("in err ", error.response.data);
        alert(error.response.data.message);
      });
  };

  return (
    <>
    <div className="mx-4 mt-4">
    <Card>
      <Card.Body><div className="container overflow-hidden mb-5" style={{ minHeight: "100vh",backgroundColor:"aliceblue" }}>
        <div className="row my-3">
          <div className="col-sm-8">
            <h2 className="text-muted offset-8">User Registration</h2>
          </div>
          <div className="col-sm-4">
            {/* <button className="btn btn-secondary text-uppercase offset-8" onClick={() => { this.props.history.goBack(); }}>Go Back</button> */}
          </div>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="mb-5">
            {/* Repeat similar sections for other form fields */}
            <div className="form-group row mt-3 justify-content-center">
              <label htmlFor="username" className="col-2 col-form-label">Username</label>
              <div className="col-5">
                <Field type="text" id="username" className="form-control" placeholder="Enter a unique username" name="username" />
                <ErrorMessage name="username" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="firstName" className="col-2 col-form-label">First Name</label>
              <div className="col-5">
                <Field type="text" id="firstName" className="form-control" placeholder="Enter your first name" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="lastName" className="col-2 col-form-label">Last Name</label>
              <div className="col-5">
                <Field type="text" id="lastName" className="form-control" placeholder="Enter your last name" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="email" className="col-2 col-form-label">Email</label>
              <div className="col-5">
                <Field type="email" id="email" className="form-control" placeholder="e.g. abc@xyz.com" name="email" />
                <ErrorMessage name="email" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="dob" className="col-2 col-form-label">Date of Birth</label>
              <div className="col-5">
                <Field type="date" id="dob" className="form-control" name="dob" />
                <ErrorMessage name="dob" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="pwd" className="col-2 col-form-label">Password</label>
              <div className="col-5">
                <Field type="password" id="pwd" className="form-control" placeholder="Enter Password" name="password" />
                <ErrorMessage name="password" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label className="col-2 col-form-label">Gender</label>
              <div className="col-5 d-flex justify-content-between">
                <div><Field type="radio" id="gender" name="gender" value="MALE" /> Male</div>
                <div><Field type="radio" id="gender" name="gender" value="FEMALE" /> Female</div>
                <div><Field type="radio" id="gender" name="gender" value="OTHER" /> Other</div>
              </div>
              <ErrorMessage name="gender" component="div" className="error-message text-danger" />
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label className="col-2 col-form-label">Blood Group</label>
              <div className="col-5 d-flex justify-content-between">
                <Field as="select" name="bloodGroup" className="form-control">
                  <option value="" disabled>--select--</option>
                  <option value="A_POSITIVE">A+</option>
                  <option value="A_NEGATIVE">A-</option>
                  <option value="B_POSITIVE">B+</option>
                  <option value="B_NEGATIVE">B-</option>
                  <option value="O_POSITIVE">O+</option>
                  <option value="O_NEGATIVE">O-</option>
                  <option value="AB_POSITIVE">AB+</option>
                  <option value="AB_NEGATIVE">AB-</option>
                </Field>
                
                <ErrorMessage name="bloodGroup" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="mobileNumber" className="col-2 col-form-label">Mobile</label>
              <div className="col-5">
                <Field type="text" id="mobileNumber" className="form-control" placeholder="Enter your mobile number" name="mobileNumber" />
                <ErrorMessage name="mobileNumber" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="area" className="col-2 col-form-label">Area</label>
              <div className="col-5">
                <Field type="text" id="area" className="form-control" placeholder="Enter a Area" name="area" />
                <ErrorMessage name="area" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row mt-3 justify-content-center">
              <label htmlFor="city" className="col-2 col-form-label">City</label>
              <div className="col-5">
                <Field type="text" id="city" className="form-control" placeholder="Enter a city " name="city" />
                <ErrorMessage name="city" component="div" className="error-message text-danger" />
              </div>
            </div>
            <div className="form-group row mt-3 justify-content-center">
              <label htmlFor="state" className="col-2 col-form-label">State</label>
              <div className="col-5">
                <Field type="text" id="state" className="form-control" placeholder="Enter a state" name="state" />
                <ErrorMessage name="state" component="div" className="error-message text-danger" />
              </div>
            </div>
            {/* ... */}
            <div className="form-group row justify-content-center">
              <div className="offset-9">
                <button type="submit" className="btn btn-lg btn-primary text-uppercase mt-3">Sign Up</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div></Card.Body>
    </Card>
    
    </div>
      
    </>
  );
};

export default PatientSignUp;
