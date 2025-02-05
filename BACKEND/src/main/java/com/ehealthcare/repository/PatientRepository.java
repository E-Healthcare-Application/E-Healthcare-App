package com.ehealthcare.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ehealthcare.entities.Admin;
import com.ehealthcare.entities.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> 
{
	Optional<Patient> findByEmail(String email);
}
		
	