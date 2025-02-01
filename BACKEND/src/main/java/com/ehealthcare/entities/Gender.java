package com.ehealthcare.entities;

public enum Gender {
	MALE, FEMALE, OTHER;
	
	@Override
	public String toString() {
		return name();
	}
	
}
