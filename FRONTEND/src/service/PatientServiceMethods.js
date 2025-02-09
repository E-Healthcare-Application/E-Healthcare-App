import axios from 'axios';

const PATIENT_API_BASE_URL = 'http://localhost:8080/patient';

class PatientServiceMethods {

    addPatient(patient) {
        return axios.post(PATIENT_API_BASE_URL + "/patientSignUp", patient);
    }
}