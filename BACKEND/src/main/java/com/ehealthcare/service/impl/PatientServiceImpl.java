package com.ehealthcare.service.impl;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ehealthcare.custome_exception.UserHandlingException;
import com.ehealthcare.dto.PatientDTO;
import com.ehealthcare.entities.Admin;
import com.ehealthcare.entities.Doctor;
import com.ehealthcare.entities.Patient;
import com.ehealthcare.repository.AdminRepository;
import com.ehealthcare.repository.AppointmentRepository;
import com.ehealthcare.repository.DoctorRepository;
import com.ehealthcare.repository.PatientRepository;
import com.ehealthcare.service.intf.PatientServiceIntf;

import antlr.collections.List;

@Service
@Transactional
public class PatientServiceImpl implements PatientServiceIntf {

	private PatientRepository patientRepo;

	private AdminRepository adminRepo;

	private DoctorRepository doctorRepo;

	private AppointmentRepository appointmentRepo;

	private DoctorServiceImpl doctorService;

	private PasswordEncoder passwordEncoder;

	@Autowired
	public PatientServiceImpl(PatientRepository patientRepo, AppointmentRepository appointmentRepo,
			PasswordEncoder passwordEncoder, DoctorServiceImpl doctorService, AdminRepository adminRepo,
			DoctorRepository doctorRepo) {

		this.patientRepo = patientRepo;
		this.appointmentRepo = appointmentRepo;
		this.passwordEncoder = passwordEncoder;
		this.doctorService = doctorService;
		this.adminRepo = adminRepo;
		this.doctorRepo = doctorRepo;

	}

	public Patient savePatient(PatientDTO patient) {

		String email = patient.getEmail();
		try {
			Doctor doctor = doctorRepo.findByEmail(email).get();
			return null;
		} catch (Exception e) {
			System.out.println("DoctorErr : " + e);
		}

		try {
			Admin admin = adminRepo.findByEmail(email).get();
			return null;
		} catch (Exception e) {
			System.out.println("AdminErr : " + e);
		}

		Patient newPatient = Patient.createPatient(patient);
		newPatient.setPassword(passwordEncoder.encode(newPatient.getPassword()));
		return patientRepo.save(newPatient);
	}



	@Override
	public java.util.List<Patient> getAllPatients() {
		// TODO Auto-generated method stub
		return patientRepo.findAll();
	}

	@Override
	public Patient getPatientDetails(Long id) {
		// TODO Auto-generated method stub
		return patientRepo.findById(id).orElseThrow(() -> new UserHandlingException("Invalid patient ID..."));
	}
	

}