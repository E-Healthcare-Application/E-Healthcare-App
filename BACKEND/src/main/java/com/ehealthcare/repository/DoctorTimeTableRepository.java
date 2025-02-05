package com.ehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ehealthcare.entities.DoctorTimeTable;

public interface DoctorTimeTableRepository extends JpaRepository<DoctorTimeTable, Long> {

}
