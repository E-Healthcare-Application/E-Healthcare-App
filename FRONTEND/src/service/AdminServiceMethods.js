import axios from 'axios';

const ADMIN_API_BASE_URL = 'http://localhost:8080/admin';

class AdminServiceMethods {

    addNewDoctor(doctor){
        console.log(doctor);
        return axios.post(ADMIN_API_BASE_URL + '/doctorSignUp',doctor);
        
    }

    fetchAllDoctors(){
        return axios.get(ADMIN_API_BASE_URL + '/getAllDoctors');
    }

    deleteDoctor(doctorId){
        return axios.delete(ADMIN_API_BASE_URL + '/removeDoctor/' + doctorId);
    }

    

    
}

export default new AdminServiceMethods();