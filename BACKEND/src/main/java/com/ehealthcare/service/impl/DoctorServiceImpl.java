package com.ehealthcare.service.impl;



import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ehealthcare.dto.DoctorDTO;

import com.ehealthcare.entities.Admin;

import com.ehealthcare.entities.Doctor;

import com.ehealthcare.entities.Patient;
import com.ehealthcare.repository.AdminRepository;
import com.ehealthcare.repository.AppointmentRepository;
import com.ehealthcare.repository.DoctorRepository;
import com.ehealthcare.repository.DoctorTimeTableRepository;
import com.ehealthcare.repository.PatientRepository;
import com.ehealthcare.service.intf.DoctorServiceIntf;

@Service
@Transactional
public class DoctorServiceImpl implements DoctorServiceIntf {

	private DoctorRepository doctorRepo;

	private AppointmentRepository appointmentRepo;

	private DoctorTimeTableRepository doctorTimeTableRepo;

	private PasswordEncoder passwordEncoder;

	private PatientRepository patientRepo;
	
	private AdminRepository adminRepo;

	@Autowired
	public DoctorServiceImpl(DoctorRepository doctorRepo, AppointmentRepository appointmentRepo,
			DoctorTimeTableRepository doctorTimeTableRepo,  PasswordEncoder passwordEncoder,
			 PatientRepository patientRepo,  AdminRepository adminRepo) {

		this.doctorRepo = doctorRepo;
		this.appointmentRepo = appointmentRepo;
		this.doctorTimeTableRepo = doctorTimeTableRepo;
		this.passwordEncoder = passwordEncoder;
		this.patientRepo = patientRepo;
		this.adminRepo = adminRepo;
		
	}

	@Override
	public Doctor saveDoctor(DoctorDTO doctor) {

		String email = doctor.getEmail();
		try {
			Patient patient = patientRepo.findByEmail(email).get();	
			return null;
		} catch (Exception e) {
			System.out.println("PatientErr : "+e);
		}

		try {
			Admin admin = adminRepo.findByEmail(email).get();
			return null;
		} catch (Exception e) {
			System.out.println("AdminErr : "+e);
		}
		
		Doctor newDoctor = Doctor.createDoctor(doctor);
		newDoctor.setPassword(passwordEncoder.encode(newDoctor.getPassword()));
		return doctorRepo.save(newDoctor);
	
		
	}
}