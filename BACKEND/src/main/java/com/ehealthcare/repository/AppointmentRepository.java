package com.ehealthcare.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ehealthcare.entities.Appointment;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long>
{
	
	
	@Query("SELECT a.id FROM Appointment a WHERE a.patient.id =?1")	
	List<Long> getAppointmentIdListForPatient(Long patientId);	
	
}