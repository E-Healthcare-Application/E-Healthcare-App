import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Card from 'react-bootstrap/Card';
import DoctorServiceMethods from '../service/DoctorServiceMethods';

const CreateAppointmentSlots = () => {
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        slotDuration: '30',
        breakTime: '',
        holidays: [],
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChecklist = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            holidays: checked
                ? [...prevData.holidays, value]
                : prevData.holidays.filter((day) => day !== value),
        }));
    };

    const createTimeTable = (e) => {
        e.preventDefault();
        let doctorId = JSON.parse(sessionStorage.getItem('doctor')).userId;

        let { startDate, endDate, startTime, endTime } = formData;

        let currentDate = new Date(); // Current date and time
        let today = new Date(currentDate.setHours(0, 0, 0, 0)); // Reset to today’s date without time

        let startDateTime = new Date(startDate);
        let endDateTime = new Date(endDate);

        let startHour = parseInt(startTime.split(':')[0]);
        let endHour = parseInt(endTime.split(':')[0]);

        //  Allow today’s date and future dates, reject past dates
        if (startDateTime < today || endDateTime < startDateTime) {
            alert('Invalid Date Selection');
            return;
        }

        if (startHour > endHour) {
            alert('Invalid Time Selection');
            return;
        }

        DoctorServiceMethods.createAppointmentSlots(formData, doctorId)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your slot time-table is created successfully.',
                }).then(() => navigate('/doctorDashboard'));
            })
            .catch((error) => {
                console.error('Error:', error.response?.data || error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response?.data?.message || 'Something went wrong!',
                }).then(() => navigate('/doctorDashboard'));
            });
    };

    return (
        <div className="mx-4 mt-4">
            <Card style={{ backgroundColor: 'aliceblue' }}>
                <Card.Body>
                    <div className="container overflow-hidden" style={{ minHeight: '100vh' }}>
                        <div className="row mt-3">
                            <div className="col-sm-8">
                                <h2 className="text-muted offset-8">Create Your Slots</h2>
                            </div>
                            <div className="col-sm-4">
                                <button className="btn btn-secondary text-uppercase offset-8" onClick={() => navigate('/doctorDashboard')}>
                                    Go Back
                                </button>
                            </div>
                        </div>
                        <form onSubmit={createTimeTable}>
                            <div className="form-group row my-3 justify-content-center">
                                <label className="col-2 col-form-label">Start Date</label>
                                <div className="col-5">
                                    <input type="date" className="form-control" name="startDate" value={formData.startDate} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group row my-3 justify-content-center">
                                <label className="col-2 col-form-label">End Date</label>
                                <div className="col-5">
                                    <input type="date" className="form-control" name="endDate" value={formData.endDate} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group row my-3 justify-content-center">
                                <label className="col-2 col-form-label">Start Time</label>
                                <div className="col-5">
                                    <input type="time" className="form-control" name="startTime" value={formData.startTime} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group row my-3 justify-content-center">
                                <label className="col-2 col-form-label">End Time</label>
                                <div className="col-5">
                                    <input type="time" className="form-control" name="endTime" value={formData.endTime} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group row my-3 justify-content-center">
                                <label className="col-2 col-form-label">Slot Duration (minutes)</label>
                                <div className="col-5">
                                    <input type="number" className="form-control" name="slotDuration" min="15" max="30" value={formData.slotDuration} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group row my-3 justify-content-center">
                                <label className="col-2 col-form-label">Break Time</label>
                                <div className="col-5">
                                    <input type="time" className="form-control" name="breakTime" value={formData.breakTime} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group row my-3 justify-content-center">
                                <label className="col-2 col-form-label">Holidays</label>
                                <div className="col-5">
                                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                                        <div key={index} className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id={`day-${index}`}
                                                name="holidays"
                                                value={day}
                                                checked={formData.holidays.includes(day)}
                                                onChange={handleChecklist}
                                            />
                                            <label className="form-check-label" htmlFor={`day-${index}`}>
                                                {day}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button type="submit" className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CreateAppointmentSlots;
