package com.ehealthcare.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

public class AppointmentSlot {

	private LocalDate startDate;
	private LocalDate endDate;

	private LocalTime startTime;
	private LocalTime endTime;
	private int slotDuration;

	private LocalTime breakTime;
	private int breakDuration;

	private List<String> holidays = new ArrayList<>();

	public AppointmentSlot() {
		System.out.println("in appointment slot constr");
	}

	public AppointmentSlot(LocalDate startDate, LocalDate endDate, LocalTime startTime, LocalTime endTime,
			int slotDuration, LocalTime breakTime, int breakDuration, List<String> holidays) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.slotDuration = slotDuration;
		this.breakTime = breakTime;
		this.breakDuration = breakDuration;
		this.holidays = holidays;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	public int getSlotDuration() {
		return slotDuration;
	}

	public void setSlotDuration(int slotDuration) {
		this.slotDuration = slotDuration;
	}

	public LocalTime getBreakTime() {
		return breakTime;
	}

	public void setBreakTime(LocalTime breakTime) {
		this.breakTime = breakTime;
	}

	public List<String> getHolidays() {
		return holidays;
	}

	public void setHolidays(List<String> holidays) {
		this.holidays = holidays;
	}

	public int getBreakDuration() {
		return breakDuration;
	}

	public void setBreakDuration(int breakDuration) {
		this.breakDuration = breakDuration;
	}

	@Override
	public String toString() {
		return "AppointmentSlot [startDate=" + startDate + ", endDate=" + endDate + ", startTime=" + startTime
				+ ", endTime=" + endTime + ", slotDuration=" + slotDuration + ", breakTime=" + breakTime
				+ ", breakDuration=" + breakDuration + ", holidays=" + holidays + "]";
	}

}