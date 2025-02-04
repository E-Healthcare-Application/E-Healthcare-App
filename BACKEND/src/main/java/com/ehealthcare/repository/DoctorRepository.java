package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.modal.Admin;
import com.app.entity.modal.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
	
	//Doctor authentication
	Optional<Doctor> findByEmailAndPassword(String email, String password);

	//get list of specializations by city
	@Query("SELECT DISTINCT  d.specialization FROM Doctor d where d.city=?1")
	List<String> getSpecializationsByCity(String city );

	//get list of doctors by specialization and city 
	List<Doctor> findAllBySpecializationAndCity(String specialization ,String city);
	
	Optional<Doctor> findByEmail(String email);

}
