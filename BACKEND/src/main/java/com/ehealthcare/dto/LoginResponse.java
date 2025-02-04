package com.ehealthcare.dto;

public class LoginResponse {

	private Long userId;
	private String userFirstName;
	private String userType;

	public LoginResponse() {
		System.out.println("in Login Response constr");
	}

	public LoginResponse(Long userId, String userFirstName, String userType) {
		super();
		this.userId = userId;
		this.userFirstName = userFirstName;
		this.userType = userType;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserFirstName() {
		return userFirstName;
	}

	public void setUserFirstName(String userFirstName) {
		this.userFirstName = userFirstName;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	@Override
	public String toString() {
		return "LoginResponse [userId=" + userId + ", userFirstName=" + userFirstName + ", userType=" + userType + "]";
	}
}