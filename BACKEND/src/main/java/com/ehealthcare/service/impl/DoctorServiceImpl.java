package com.ehealthcare.service.impl;



import static com.ehealthcare.util.UtilityClass.getNullPropertyNames;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ehealthcare.custome_exception.UserHandlingException;
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
	
	@Override
	public List<String> getSpecializationsByCity(String city) {
		return doctorRepo.getSpecializationsByCity(city); // get all unique specialization list of doctors
	}

	@Override
	public List<Doctor> getAllDoctorsBySpecializationAndCity(String specialization, String city) {
		List<Doctor> doctors = doctorRepo.findAllBySpecializationAndCity(specialization, city);
		return doctors;
	}

	@Override
	public Doctor updateDoctorDetails(DoctorDTO detachedDoctor, Long id) {
		
		Doctor d = doctorRepo.findById(id).orElseThrow(() -> new UserHandlingException("Invalid doctor id!!!!"));
		
		Doctor doctor = Doctor.createDoctor(detachedDoctor);
		doctor.setId(id);
		doctor.setPassword(d.getPassword());
		doctor.setTimeSlot(d.getTimeSlot());
		
		BeanUtils.copyProperties(d, doctor, getNullPropertyNames(doctor));
		System.out.println(doctor);
		return doctorRepo.save(doctor);
	}

	@Override
	public Doctor getDoctorDetails(Long doctorId) {
		Doctor doctor = doctorRepo.findById(doctorId).orElseThrow(() -> new UserHandlingException("Invalid doctor id!!!"));
		System.out.println("GET DR DETAILS : "+doctor);
		return doctor;
	}

	
	@Override
	public List<Doctor> getAllDoctors() {
		return doctorRepo.findAll();
	}

	@Override
	public String deleteDoctorById(Long doctorId) {
		doctorRepo.deleteById(doctorId);
		return "Successfully Deleted doctor with id : " + doctorId;
	}
}