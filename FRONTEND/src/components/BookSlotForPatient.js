import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppointmentService from "../service/AppointmentService";
import moment from "moment";
import Swal from "sweetalert2";

const BookSlotForPatient = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { doctor, time } = location.state; // Extract doctor & time from state
  const patient = JSON.parse(sessionStorage.getItem("patient"));

  const [isSlotConfirmed, setIsSlotConfirmed] = useState(false);

  const confirmSlot = (doctorId, patientId, time) => {
    if (isSlotConfirmed) {
      Swal.fire({
        icon: "info",
        title: "Already Confirmed",
        text: "You have already confirmed this appointment.",
      });
      return;
    }

    // Book the appointment
    AppointmentService.bookAppointmentForPatient(doctorId, patientId, time.replace("T", " "))
      .then((response) => {
        setIsSlotConfirmed(true);

        Swal.fire({
          icon: "success",
          title: "Appointment Confirmed!",
          text: "Your appointment has been confirmed.",
        }).then(() => navigate("/patientDashboard")); // Redirect to dashboard after confirmation
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.message || "Something went wrong!",
        });
      });
  };

  return (
    <div className="container my-4">
      <button
        className="btn btn-secondary my-2 offset-10"
        onClick={() => navigate("/patientDashboard")}
        style={{ minWidth: "13vw" }}
      >
        Back To Dashboard
      </button>
      <h3>Confirm Appointment</h3>
      <table className="table table-bordered">
        <thead className="bg-dark text-light">
          <tr>
            <th className="visually-hidden">Patient ID</th>
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>Area</th>
            <th>Consultation Fee</th>
            <th>Specialization</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="visually-hidden">{patient.userId}</td>
            <td>{patient.userFirstName}</td>
            <td>{`Dr. ${doctor.firstName} ${doctor.lastName}`}</td>
            <td>{`${doctor.area}, ${doctor.city}`}</td>
            <td>{doctor.fees}</td>
            <td>{doctor.specialization}</td>
            <td>{moment(Date.parse(time)).format("LT")}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => confirmSlot(doctor.id, patient.userId, time)}
                disabled={isSlotConfirmed}
              >
                {isSlotConfirmed ? "Confirmed" : "Confirm"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookSlotForPatient;
