import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AdminServiceMethods from '../service/AdminServiceMethods';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Username must be at least 3 characters').max(15, 'Username must be less than 15 characters').required('Username is required'),
  firstName: Yup.string().min(3, 'First Name must be at least 3 characters').max(15, 'First Name must be less than 15 characters').required('First Name is required'),
  lastName: Yup.string().min(3, 'Last Name must be at least 3 characters').max(15, 'Last Name must be less than 15 characters').required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dob: Yup.date().required('Date of Birth is required'),
  password: Yup.string().matches(
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/,
    'Password must be alphanumeric and contain at least one special character with a minimum length of 6'
  ).required('Password is required'),
  gender: Yup.string().required('Gender is required'),
  mobileNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Mobile Number is required'),
  area: Yup.string().min(4, 'Area must contain at least 4 characters').required('Area is required'),
  city: Yup.string().min(3, 'City must contain at least 3 characters').required('City is required'),
  state: Yup.string().min(3, 'State must contain at least 3 characters').required('State is required'),
  languages: Yup.string().min(3, 'Languages must contain at least 3 characters').required('Languages are required'),
  fees: Yup.number().min(200, 'Minimum fee is 200').max(10000, 'Maximum fee is 10000').required('Consultation Fee is required'),
  qualification: Yup.string().min(2, 'Qualification must contain at least 2 characters').required('Qualification is required'),
  specialization: Yup.string().required('Specialization is required'),
});

const AddNewDoctor = () => {
  const navigate = useNavigate();

  const addDoctor = (values) => {
    AdminServiceMethods.addNewDoctor(values)
      .then((res) => {
        Swal.fire({ icon: 'success', title: 'Success', text: 'Doctor added successfully.' });
        navigate('/adminDashboard');
      })
      .catch((error) => {
        Swal.fire({ icon: 'error', title: 'Error', text: error.response?.data?.message || 'An error occurred' });
        navigate('/adminDashboard');
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
                <button className="btn btn-secondary text-uppercase offset-8" onClick={() => navigate('/adminDashboard')}>Go Back</button>
              </div>
            </div>
            <Formik
              initialValues={{
                username: '', firstName: '', lastName: '', email: '', password: '', dob: '', gender: '', mobileNumber: '',
                area: '', city: '', state: '', languages: '', fees: '', qualification: '', specialization: ''
              }}
              validationSchema={validationSchema}
              onSubmit={addDoctor}
            >
              {() => (
                <Form>
                  {['username', 'firstName', 'lastName', 'email', 'dob', 'password', 'mobileNumber', 'area', 'city', 'state', 'languages', 'fees', 'qualification'].map(field => (
                    <div key={field} className="form-group row my-3 justify-content-center">
                      <label htmlFor={field} className="col-2 col-form-label"><b>{field.charAt(0).toUpperCase() + field.slice(1)}</b></label>
                      <div className="col-5">
                        <Field type={field === 'dob' ? 'date' : 'text'} id={field} className="form-control" name={field} />
                        <ErrorMessage name={field} component="div" className="text-danger" />
                      </div>
                    </div>
                  ))}

                  <div className="form-group row my-3 justify-content-center">
                    <label className="col-2 col-form-label"><b>Gender</b></label>
                    <div className="col-5 d-flex justify-content-between">
                      <label><Field type="radio" name="gender" value="MALE" /> Male</label>
                      <label><Field type="radio" name="gender" value="FEMALE" /> Female</label>
                      <label><Field type="radio" name="gender" value="OTHER" /> Other</label>
                    </div>
                    <ErrorMessage name="gender" component="div" className="text-danger" />
                  </div>

                  <div className="form-group row my-3 justify-content-center">
                    <label htmlFor="specialization" className="col-2 col-form-label"><b>Specialization</b></label>
                    <div className="col-5">
                      <Field as="select" name="specialization" className="form-control">
                        <option value="" disabled>--select--</option>
                        {['Physician', 'Covid Consultant', 'Dentist', 'Dermatologist', 'Ophthalmologist', 'Gynecologist', 'Psychiatrist', 'Orthopediologist'].map(spec => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
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

export default AddNewDoctor;
