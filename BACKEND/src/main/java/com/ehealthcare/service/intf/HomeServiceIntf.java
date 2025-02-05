package com.ehealthcare.service.intf;

import com.ehealthcare.dto.LoginResponse;

public interface HomeServiceIntf {
	
	//authenticate patient
	LoginResponse authenticateUser(String email, String password);
	
	Long generateToken(String email);

	int resetPassword(String userEmail, String userNewPassword);

}
