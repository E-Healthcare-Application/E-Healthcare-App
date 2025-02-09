package com.ehealthcare.service.intf;

import java.util.List;

import com.ehealthcare.dto.PatientDTO;
import com.ehealthcare.entities.Patient;

public interface PatientServiceIntf {
	
	//register new patient
	Patient savePatient(PatientDTO user);
	
	
	//getAll patients
	List<Patient> getAllPatients();
	
	//delete patient
		String deletePatientById(Long patient_id);

	//get specific patient
	Patient getPatientDetails(Long id);
	
	//authenticate patient
	//LoginResponse authenticatePatient(String email, String password);
	
	//cancel appointment [implemented in appointment services]
	//String cancelAppointment(Long patientId, Long appointmentId);
	
	//update specific patient
	Patient updatePatientDetails(PatientDTO patient, long id);
	
	
}
