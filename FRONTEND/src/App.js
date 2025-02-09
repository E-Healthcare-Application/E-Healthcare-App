import './App.css';
import LandingPage from './components/LandingPage';
import PatientSignUp from './components/PatientSignUp';
import UserLogin from './components/UserLogin';
import PatientDashboard from './components/PatientDashboard';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';



function App() {
  return (
 
      <div className="">

        <Header title="E-Healthcare" />
       
        <Routes>
          
        <Route path="/patient-sign-up" element={<PatientSignUp />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/patientDashboard" element={<PatientDashboard />} />
        </Routes>

      </div>
   
  );
}

export default App;
