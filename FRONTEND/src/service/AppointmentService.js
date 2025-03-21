import axios from 'axios';

const APPOINTMENT_BASE_URL = 'http://localhost:8080/appointment';

// Get list of specializations for a given city
const getSpecializationListByCity = (city) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/specialization/${city}`);
};

// Get doctors by specialization and city
const getDoctorsBySpecializationAndCity = (specialization, city) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/search/${specialization}/${city}`);
};

// Get current appointments for a patient
const getAllCurrentAppointments = (patientId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/currAppointmentP/${patientId}`);
};

// Get appointment history for a patient
const getAllAppointmentsHistory = (patientId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/appointementHistoryP/${patientId}`);
};

// Book an appointment for a patient
const bookAppointmentForPatient = (doctorId, patientId, time) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/bookAppointment/${doctorId}/${patientId}/${time}`);
};

// Cancel an appointment by appointmentId
const cancelAppointment = (appointmentId) => {
  return axios.delete(`${APPOINTMENT_BASE_URL}/cancelAppointment/${appointmentId}`);
};

// Get all available appointment slots for a doctor
const getAllAppointmentSlots = (doctorId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/getAppointmentSlots/${doctorId}`);
};

// Get current appointments for a doctor
const getCurrentAppointmentsForDoctor = (doctorId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/currAppointmentD/${doctorId}`);
};

// Get patient details by appointmentId
const getPatientByAppointmentId = (appointmentId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/patient/${appointmentId}`);
};

// Get doctor details by appointmentId
const getDoctorByAppointmentId = (appointmentId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/doctor/${appointmentId}`);
};

// Get appointment history for a patient for a specific doctor
const getAppoinmentsHistoryOfPatientForDoctor = (doctorId, patientId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/appointementHistoryD/${doctorId}/${patientId}`);
};

// Get all appointment history for a doctor
const getAllAppoinmentsHistoryForDoctor = (doctorId) => {
  return axios.get(`${APPOINTMENT_BASE_URL}/appointementHistoryD/${doctorId}`);
};

const AppointmentServiceMethods = {
  getSpecializationListByCity,
  getDoctorsBySpecializationAndCity,
  getAllCurrentAppointments,
  getAllAppointmentsHistory,
  bookAppointmentForPatient,
  cancelAppointment,
  getAllAppointmentSlots,
  getCurrentAppointmentsForDoctor,
  getPatientByAppointmentId,
  getDoctorByAppointmentId,
  getAppoinmentsHistoryOfPatientForDoctor,
  getAllAppoinmentsHistoryForDoctor,
};

export default AppointmentServiceMethods;
