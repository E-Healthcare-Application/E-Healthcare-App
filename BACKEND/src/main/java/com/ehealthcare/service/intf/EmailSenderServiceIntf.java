package com.ehealthcare.service.intf;

public interface EmailSenderServiceIntf {

	void sendEmailOnAppointmentBooking(Long patientId,String time);
	
	void sendEmailOnCancelAppointment(Long appointmentId);
	
	void sendEmailTokenToResetPassword(String userEmail, Long token); 
}
