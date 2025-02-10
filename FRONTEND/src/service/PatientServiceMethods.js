import axios from 'axios';

const PATIENT_API_BASE_URL = 'http://localhost:8080/patient';

// Function to add a new patient
const addPatient = (patient) => {
  return axios.post(`${PATIENT_API_BASE_URL}/patientSignUp`, patient);
};



// Function to update patient details
const updatePatientDetails = (id, patient) => {
  console.log("yet aahe");
  return axios.put(`${PATIENT_API_BASE_URL}/updatePatientDetails/${id}`, patient);
};

// Function to log out the patient by removing patient data from sessionStorage
const logoutPatient = () => {
  sessionStorage.removeItem("patient");
};

export default {
  addPatient,
  getPatientById,
  updatePatientDetails,
  logoutPatient,
};
