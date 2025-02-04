package com.ehealthcare.dto;

import java.time.LocalDate;

import com.ehealthcare.entities.Gender;

public class DoctorDTO {

	private String username;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private LocalDate dob;
	private Gender gender;
	private String mobileNumber;
	private String area;
	private String city;
	private String state;
	private String languages;
	private String specialization;
	private String qualification;
	private Integer fees;
	

	public DoctorDTO() {
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
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

	@Override
	public String toString() {
		return "DoctorDto{" + "username='" + username + '\'' + ", firstName='" + firstName + '\'' + ", lastName='"
				+ lastName + '\'' + ", email='" + email + '\'' + ", password='" + password + '\'' + ", dob=" + dob
				+ ", gender=" + gender + ", mobileNumber='" + mobileNumber + '\'' + ", area='" + area + '\''
				+ ", city='" + city + '\'' + ", state='" + state + '\'' + ", languages='" + languages + '\''
				+ ", specialization='" + specialization + '\'' + ", qualification='" + qualification + '\''
				+  ", fees=" + fees + '}';
	}
}
