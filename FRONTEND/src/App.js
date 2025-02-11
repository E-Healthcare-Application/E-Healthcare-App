import './App.css';
import LandingPage from './components/LandingPage';
import PatientSignUp from './components/PatientSignUp';
import UserLogin from './components/UserLogin';
import PatientDashboard from './components/PatientDashboard';
import UpdateDoctorProfile from './components/UpdateDoctorProfile';
import PatientDashboard from './components/PatientDashboard';
import UpdatePatientProfile from './components/UpdatePatientProfile';
import CreateAppointmentSlots from './components/CreateAppointmentSlots';
import AppointmentHistory from './components/AppointmentHistory';
import BookSlotForPatient from './components/BookSlotForPatient';
import DoctorDashboard from './components/DoctorDashboard';
import PatientList from './components/PatientList';
import ShowCurrentAppointment from './components/ShowCurrentAppointment';
import EmailForForgotPassword from './components/EmailForForgotPassword';
import EnterToken from './components/EnterToken';
import ResetPassword from './components/ResetPassword';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import UpdateDoctorProfile from './components/UpdateDoctorProfile';
import BookSlotForPatient from './components/BookSlotForPatient';
import PatientList from './components/PatientList';
import ShowCurrentAppointment from './components/ShowCurrentAppointment';




import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Services from './components/Services';
import HorizontalCard from './components/HorizontalCard';



function App() {
  return (
 
      <div className="">

        <Header title="E-Healthcare" />
       
        <Routes>
          
        <Route path="/patient-sign-up" element={<PatientSignUp />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/patientDashboard" element={<PatientDashboard />} /> 
        <Route path="/doctorDashboard" element={<DoctorDashboard />} />
        <Route path="/current-app" element={<ShowCurrentAppointment />} />
        <Route path="/app-history" element={<AppointmentHistory />} />
 
        <Route path="/email-for-forgot-password" element={<EmailForForgotPassword />} />
        <Route path="/enter-token" element={<EnterToken />} />
        <Route path="/reset-password" element={<ResetPassword />} /> 
        <Route path="/create-appointment-slots" element={<CreateAppointmentSlots />} />
        <Route path="/app-history" element={<AppointmentHistory />} />

        <Route path="/update-doctor-profile" element={<UpdateDoctorProfile />} />
        <Route path="/update-profile" element={<UpdatePatientProfile />} />
        <Route path="/book-slot-for-patient" element={<BookSlotForPatient />} />
        <Route path="/patientList" element={<PatientList />} />

        

          {/* Redirect to home page if no match */}
          <Route path="*" element={<Home />} />
          
         </Routes>
         <HorizontalCard />
        <Services />
        <Footer />

      </div>
   
  );
}

export default App;
