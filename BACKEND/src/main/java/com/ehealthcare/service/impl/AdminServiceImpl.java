package com.ehealthcare.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ehealthcare.entities.Admin;
import com.ehealthcare.repository.AdminRepository;
import com.ehealthcare.service.intf.AdminServiceIntf;

@Service
@Transactional
public class AdminServiceImpl implements AdminServiceIntf {

	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public List<Admin> getListOfAdmin() {
		return adminRepo.findAll();
	}

}
