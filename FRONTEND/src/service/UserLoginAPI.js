import axios from 'axios';

const USER_LOGIN_BASE_URL = 'http://localhost:8080/home';

// ✅ Function to get token from session storage
const getToken = () => sessionStorage.getItem("jwtToken");

// ✅ Function to set Authorization headers dynamically
const getAuthHeaders = () => ({
    Authorization: `Bearer ${getToken()}`
});

// ✅ Validate the JWT token
const validateToken = async () => {
    try {
        const response = await axios.get(`${USER_LOGIN_BASE_URL}/validateToken`, {
            headers: getAuthHeaders()
        });
        return response.data; // Should return true or false
    } catch (error) {
        console.error("Token validation error:", error);
        return false;
    }
};

// ✅ User Login API Call
const userLogin = async (user) => {
    try {
        const response = await axios.post(`${USER_LOGIN_BASE_URL}/userLogin`, user);
        
        if (response.data.token) {
            sessionStorage.setItem("jwtToken", response.data.token); // Store token in session storage
        }
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data);
        throw error;
    }
};

// ✅ Reset Password API Call
const resetPassword = (userEmail, userNewPassword) => 
    axios.post(`${USER_LOGIN_BASE_URL}/resetPassword/${userEmail}/${userNewPassword}`);

export default { userLogin, validateToken, resetPassword };
