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