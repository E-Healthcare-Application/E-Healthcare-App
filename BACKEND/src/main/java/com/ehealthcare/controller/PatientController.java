package com.ehealthcare.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ehealthcare.dto.PatientDTO;
import com.ehealthcare.entities.Patient;
import com.ehealthcare.service.intf.PatientServiceIntf;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PatientController {

	// dependency : patientService
	@Autowired
	PatientServiceIntf patientService;

	@PostMapping("/patientSignUp")
	public ResponseEntity<?> savePatient(@RequestBody @Valid PatientDTO patient) {
		Patient p = patientService.savePatient(patient);
		if(p == null) {
			return ResponseEntity.badRequest().body(null);
		}
		return new ResponseEntity<>(p, HttpStatus.CREATED);
	}
	
	@GetMapping("/getPatientDetails/{patientId}")
	public ResponseEntity<?> getPatientDetails(@PathVariable Long patientId) {
		return ResponseEntity.ok(patientService.getPatientDetails(patientId));
	}
	
	@PutMapping("/updatePatientDetails/{patientId}")
	public ResponseEntity<?> updatePatientDetails(@RequestBody PatientDTO detachedPatient,
			@PathVariable Long patientId) {
		return ResponseEntity.ok(patientService.updatePatientDetails(detachedPatient, patientId));
	}
}