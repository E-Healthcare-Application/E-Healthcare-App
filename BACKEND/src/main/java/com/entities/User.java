package com.ehealthcare.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@MappedSuperclass
public class User extends BaseEntity {

	@Column(length = 30, unique = true)
	@NotBlank(message = "User name must be supplied")
	private String username;

	@Column(length = 30)
	@NotBlank(message = "User first name must be supplied")
	private String firstName;

	@Column(length = 30)
	@NotBlank(message = "User last name must be supplied")
	private String lastName;

	@Column(length = 30, unique = true)
	@NotBlank(message = "User email must be supplied")
	private String email;

	@Column(nullable = false)
	@JsonIgnore
	private String password;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dob;

	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(length = 10, nullable = false)
	@NotBlank(message = "User mobile required")
	private String mobileNumber;

	private String area;
	private String city;
	private String state;

	public User() {

	}

	public User(@NotBlank(message = "User name must be supplied") String username,
			@NotBlank(message = "User first name must be supplied") String firstName,
			@NotBlank(message = "User last name must be supplied") String lastName,
			@NotBlank(message = "User email must be supplied") String email,
			@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Blank or Invalid password") String password,
			LocalDate dob, Gender gender, @NotBlank(message = "User password required") String mobileNumber,
			String area, String city, String state) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.gender = gender;
		this.mobileNumber = mobileNumber;
		this.area = area;
		this.city = city;
		this.state = state;
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

	@Override
	public String toString() {
		return "User [username=" + username + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", dob=" + dob + ", gender=" + gender + ", mobileNumber=" + mobileNumber
				+ ", area=" + area + ", city=" + city + ", state=" + state + "]";
	}

}