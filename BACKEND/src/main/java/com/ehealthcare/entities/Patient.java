package com.ehealthcare.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.ehealthcare.dto.PatientDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "patient_tbl")
public class Patient extends User {

	@Enumerated(EnumType.STRING)
	private BloodGroup bloodGroup;

	@OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Appointment> appointement = new ArrayList<>();

	public Patient() {

	}

	public Patient(@NotBlank(message = "User name must be supplied") String username,
			@NotBlank(message = "User first name must be supplied") String firstName,
			@NotBlank(message = "User last name must be supplied") String lastName,
			@NotBlank(message = "User email must be supplied") String email,
			@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password") String password,
			LocalDate dob, Gender gender, @NotBlank(message = "User password required") String mobileNumber,
			BloodGroup bloodGroup, String area, String city, String state) {
		super(username, firstName, lastName, email, password, dob, gender, mobileNumber, area, city, state);
		this.bloodGroup = bloodGroup;
	}

	public BloodGroup getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(BloodGroup bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public List<Appointment> getAppointement() {
		return appointement;
	}

	public void setAppointement(List<Appointment> appointement) {
		this.appointement = appointement;
	}

	@Override
	public String toString() {
		return "Patient [" + super.toString() + " bloodGroup=" + bloodGroup + "]";
	}

	public static Patient createPatient(PatientDTO dto) {
		return new Patient(dto.getUsername(), dto.getFirstName(), dto.getLastName(), dto.getEmail(), dto.getPassword(),
				dto.getDob(), dto.getGender(), dto.getMobileNumber(), dto.getBloodGroup(), dto.getArea(), dto.getCity(),
				dto.getState());
	}

}