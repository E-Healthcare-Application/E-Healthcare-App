import axios from 'axios';

const ADMIN_API_BASE_URL = 'http://localhost:8080/admin';

// Remove admin details from sessionStorage
const logoutAdmin = () => {
  sessionStorage.removeItem("admin");
};

// Add a new doctor by sending a POST request with the doctor object
const addNewDoctor = (doctor) => {
  console.log(doctor);
  return axios.post(`${ADMIN_API_BASE_URL}/doctorSignUp`, doctor);
};

// Fetch all doctors by sending a GET request
const fetchAllDoctors = () => {
  return axios.get(`${ADMIN_API_BASE_URL}/getAllDoctors`);
};

// Delete a doctor by sending a DELETE request with the doctor's ID
const deleteDoctor = (doctorId) => {
  return axios.delete(`${ADMIN_API_BASE_URL}/removeDoctor/${doctorId}`);
};
 
// Fetch all patients by sending a GET request
const fetchAllPatients = () => {
  return axios.get(`${ADMIN_API_BASE_URL}/getAllPatients`);
};

// Delete a patient by sending a DELETE request with the patient's ID
const deletePatient = (patientId) => {
  return axios.delete(`${ADMIN_API_BASE_URL}/removePatient/${patientId}`);
};

// Save a new blood donor by sending a POST request with the donor object
const saveDonor = (donor) => {
  return axios.post(`${ADMIN_API_BASE_URL}/bloodDonor`, donor);
};

// Fetch all blood donors by sending a GET request
const fetchAllBloodDonors = () => {
  return axios.get(`${ADMIN_API_BASE_URL}/searchDonors`);
};

export default {
  logoutAdmin,
  addNewDoctor,
  fetchAllDoctors,
  deleteDoctor,
  fetchAllPatients,
  deletePatient,
  saveDonor,
  fetchAllBloodDonors
};
