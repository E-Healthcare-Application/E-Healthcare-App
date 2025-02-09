package com.ehealthcare.controller;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ehealthcare.service.intf.AppointmentServiceIntf;
import com.ehealthcare.service.intf.DoctorServiceIntf;
import com.ehealthcare.service.intf.EmailSenderServiceIntf;


@RestController
@RequestMapping("/appointment")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AppointmentController {

	// dependencies added in constructor by @Autowired
	AppointmentServiceIntf appointmentService;

	DoctorServiceIntf doctorService;
	EmailSenderServiceIntf emailSenderService;


	
	// constructor level autowiring
	@Autowired
	public AppointmentController(AppointmentServiceIntf appointmentService, DoctorServiceIntf doctorService) {
		this.appointmentService = appointmentService;
		this.doctorService = doctorService;

	}
	
	@GetMapping("/bookAppointment/{doctorId}/{patientId}/{time}")
	public List<LocalDateTime> bookAppointmentForPatient(@PathVariable Long doctorId, @PathVariable Long patientId,
			@PathVariable String time) {
		emailSenderService.sendEmailOnAppointmentBooking(patientId,time);
		return appointmentService.bookAppointmentForPatient(doctorId, patientId, time);
	}

	
	@GetMapping("/doctor/{appointmentId}")
	public ResponseEntity<?> getDoctorByAppointmentId(@PathVariable Long appointmentId) {
		System.out.println("In ctrler...");
		return ResponseEntity.ok(appointmentService.getDoctorByAppointmentId(appointmentId));
	}
	
}