package com.ehealthcare.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import com.ehealthcare.dto.DoctorDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "doctor_tbl")
public class Doctor extends User {

	@Column(length = 30)
	@NotBlank(message = "Language must be supplied")
	private String languages;

	@Column(length = 30)
	@NotBlank(message = "specialization must be supplied")
	private String specialization;

	@Column(length = 30)
	@NotBlank(message = "qualification must be supplied")
	private String qualification;
	
	private Integer fees;

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
	@JsonIgnore //ignore this field during serialization and deserialization
	private DoctorTimeTable timeSlot;

	@OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<Appointment> appointement = new ArrayList<>();

	public Doctor() {

	}

	public Doctor(@NotBlank(message = "Language must be supplied") String languages,
			@NotBlank(message = "specialization must be supplied") String specialization,
			@NotBlank(message = "qualification must be supplied") String qualification,
			@NotBlank(message = "User name must be supplied") String username,
			@NotBlank(message = "User first name must be supplied") String firstName,
			@NotBlank(message = "User last name must be supplied") String lastName,
			@NotBlank(message = "User email must be supplied") String email,
			@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password") String password,
			LocalDate dob, Gender gender, @NotBlank(message = "User password required") String mobileNumber,
			String area, String city, String state, Integer fees) {
		super(username, firstName, lastName, email, password, dob, gender, mobileNumber, area, city, state);
		this.languages = languages;
		this.specialization = specialization;
		this.qualification = qualification;
		this.fees = fees;
	}

	public String getLanguages() {
		return languages;
	}

	public void setLanguages(String languages) {
		this.languages = languages;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public Integer getFees() {
		return fees;
	}

	public void setFees(Integer fees) {
		this.fees = fees;
	}

	@JsonIgnore
	public DoctorTimeTable getTimeSlot() {
		return timeSlot;
	}

	@JsonProperty
	public void setTimeSlot(DoctorTimeTable timeSlot) {
		this.timeSlot = timeSlot;
	}

	public List<Appointment> getAppointement() {
		return appointement;
	}

	public void setAppointement(List<Appointment> appointement) {
		this.appointement = appointement;
	}

	@Override
	public String toString() {
		return "Doctor [languages=" + languages + ", specialization=" + specialization + ", qualification="
				+ qualification  + ", fees=" + fees + "]";
	}
	

	public static Doctor createDoctor(DoctorDTO dto) {
		return new Doctor(dto.getLanguages(), dto.getSpecialization(), dto.getQualification(),
				dto.getUsername(), dto.getFirstName(), dto.getLastName(), dto.getEmail(), dto.getPassword(),
				dto.getDob(), dto.getGender(), dto.getMobileNumber(), dto.getArea(), dto.getCity(), dto.getState(),
				dto.getFees());
	}

}
