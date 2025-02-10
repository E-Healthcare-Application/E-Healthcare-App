import axios from 'axios';

const DOCTOR_BASE_URL = 'http://localhost:8080/doctor';

// Function to create appointment slots for a doctor
const createAppointmentSlots = (doctorTimeTable, doctorId) => {
  return axios.post(`${DOCTOR_BASE_URL}/createAppointmentSlot/${doctorId}`, doctorTimeTable);
};

// Function to retrieve doctor details by doctorId
const getDoctorById = (doctorId) => {
  return axios.get(`${DOCTOR_BASE_URL}/getDoctorDetails/${doctorId}`);
};

// Function to update a doctor's details by id
const updateDoctorDetails = (id, doctor) => {
  return axios.put(`${DOCTOR_BASE_URL}/updateDoctor/${id}`, doctor);
};

// Function to log out the doctor by removing the session data
const doctorLogout = () => {
  sessionStorage.removeItem("doctor");
};

export default {
  createAppointmentSlots,
  getDoctorById,
  updateDoctorDetails,
  doctorLogout,
};
