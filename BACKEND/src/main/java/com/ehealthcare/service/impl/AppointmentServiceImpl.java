package com.ehealthcare.service.impl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ehealthcare.custome_exception.UserHandlingException;
import com.ehealthcare.entities.Appointment;
import com.ehealthcare.entities.Doctor;
import com.ehealthcare.entities.DoctorTimeTable;
import com.ehealthcare.entities.Patient;
import com.ehealthcare.repository.AppointmentRepository;
import com.ehealthcare.repository.DoctorRepository;
import com.ehealthcare.repository.PatientRepository;
import com.ehealthcare.service.intf.AppointmentServiceIntf;
import com.ehealthcare.service.intf.DoctorServiceIntf;
import com.ehealthcare.service.intf.PatientServiceIntf;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentServiceIntf {

	private AppointmentRepository appointmentRepo;

	private PatientRepository patientRepo;

	private DoctorRepository doctorRepo;

	private PatientServiceIntf patientService;

	private DoctorServiceIntf doctorService;

	@Autowired
	public AppointmentServiceImpl(AppointmentRepository appointmentRepo, PatientRepository patientRepo,
			DoctorRepository doctorRepo, PatientServiceIntf patientService, DoctorServiceIntf doctorService) {

		this.appointmentRepo = appointmentRepo;
		this.patientRepo = patientRepo;
		this.doctorRepo = doctorRepo;
		this.patientService = patientService;
		this.doctorService = doctorService;

	}
	
	//get all appointments
	@Override
	public List<LocalDateTime> getAllAppointmentSlots(Long doctorId) {

		Doctor doctor = doctorRepo.findById(doctorId).get();
		Map<LocalDateTime, Boolean> availableSlots = doctor.getTimeSlot().getAvailableSlots();
		List<LocalDateTime> list = new ArrayList<>();
		for (Map.Entry<LocalDateTime, Boolean> entry : availableSlots.entrySet()) {
			int currDate = LocalDate.now().getDayOfMonth();
			int currMonth = LocalDate.now().getMonthValue();
			int slotDate = entry.getKey().getDayOfMonth();
			int slotMonth = entry.getKey().getMonthValue();
			if (entry.getValue() == true && entry.getKey().isAfter(LocalDateTime.now()) && currDate == slotDate
					&& currMonth == slotMonth) { // send only list whose boolean value is true (not booked slots)
				list.add(entry.getKey());
			}
		}
		Collections.sort(list);

		return list;
	}

	//book an appointment for patients
	@Override
	public List<LocalDateTime> bookAppointmentForPatient(Long doctorId, Long patientId, String stime) {

		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		LocalDateTime time = LocalDateTime.parse(stime, formatter);

		Doctor doctor = doctorRepo.findById(doctorId)
				.orElseThrow(() -> new UserHandlingException("Doctor not found...!!!"));

		Patient patient = patientRepo.findById(patientId)
				.orElseThrow(() -> new UserHandlingException("Patient not found...!!!"));

		DoctorTimeTable timeTable = doctor.getTimeSlot();

		Appointment appointment = new Appointment(time, doctor, patient);
		appointmentRepo.save(appointment);

		List<LocalDateTime> availableSlotList = timeTable.bookAvailableSlot(time);

		return availableSlotList;
	}

	//get dr by appointment id
	@Override
	public Doctor getDoctorByAppointmentId(Long appointmentId) {

		Appointment appointment = appointmentRepo.findById(appointmentId)
				.orElseThrow(() -> new UserHandlingException("Invalid appointment id!!!"));
		return appointment.getDoctor();

	}
	
	//get patient by appointment id
	@Override
	public Patient getPatientByAppointmentId(Long appointmentId) {

		Appointment appointment = appointmentRepo.findById(appointmentId).get();
		Patient patient = appointment.getPatient();
		return patient;
	}


}