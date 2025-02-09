package com.ehealthcare.service.impl;
import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ehealthcare.custome_exception.UserHandlingException;
import com.ehealthcare.entities.Appointment;
import com.ehealthcare.entities.Doctor;
import com.ehealthcare.entities.Patient;
import com.ehealthcare.repository.AppointmentRepository;
import com.ehealthcare.service.intf.EmailSenderServiceIntf;
import com.ehealthcare.service.intf.PatientServiceIntf;

@Service
@Transactional
public class EmailSenderService implements EmailSenderServiceIntf{

	@Autowired
	private PatientServiceIntf patientService;
	
	@Autowired
	private AppointmentRepository appointmentRepo;
	
	@Autowired
	private JavaMailSender mailSender;
	
	public void sendSimpleEmail(String toEmail, String body, String subject) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("ask.your.doctor.springboot.app@gmail.com");
		message.setTo(toEmail);
		message.setText(body);
		message.setSubject(subject);
		
		mailSender.send(message);
		System.out.println("message send....");
		
	}
	
	@Override
	public void sendEmailOnAppointmentBooking(Long patientId,String time) {
		Patient patient = patientService.getPatientDetails(patientId);
		sendSimpleEmail(patient.getEmail(), 
				"Your appointment has been booked at "+time,
				"Appointment Confirmation");
	}
	
	@Override
	public void sendEmailTokenToResetPassword(String userEmail, Long token) {
		sendSimpleEmail(userEmail, 
				"Token to reset your password : "+token,
				"Reset Password");
	}
	
	@Override
	public void sendEmailOnCancelAppointment(Long appointmentId) {
	
		Appointment appointment = appointmentRepo.findById(appointmentId).orElseThrow(() -> new UserHandlingException("Invalid Appointment id!!!"));
		Doctor doctor = appointment.getDoctor();
		Patient patient = appointment.getPatient();
		
		sendSimpleEmail(patient.getEmail(), 
				"Your appointment has been cancelled with doctor : "+doctor.getFirstName(),
				"Appointment Cancelled");
		
		sendSimpleEmail(doctor.getEmail(), 
				"Appointment with patient : "+patient.getFirstName()+" has been cancelled",
				"Appointment Cancelled");
	}
	
	
	
}
