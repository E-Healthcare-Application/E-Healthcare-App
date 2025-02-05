package com.ehealthcare.service.intf;

import java.util.List;

import com.ehealthcare.dto.PatientDTO;
import com.ehealthcare.entities.Patient;

public interface PatientServiceIntf {
	
	//register new patient
	Patient savePatient(PatientDTO user);
	
	
	
	
}
