import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ClinicalRecords from "./components/clinical-records";
import PatientRecords from "./components/patient-records";
import ReadClinicalRecord from "./components/clinicalRecordsComponents/readclinicalrecord";
import ReadPatient from "./components/patientComponents/readpatient";
import Thanks from "./components/thanks";
import logo from './images/logo.png';
import "./App.css";
import "./styles.css";
import "./navbar.css";

function handleClick() {
  var element = document.querySelector('.click-animation') as HTMLElement;
  if (element) {
    element.classList.add('clicked');

    setTimeout(function() {
      element.classList.remove('clicked');
    }, 500);
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-logo-container">
            <img
              className="navbar-logo"
              src={logo}
              alt="Logo"
            />
          </div>
          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/patient-records">Patient Record</Link>
            </li>
            <li>
              <Link to="/clinical-records">Clinical Record</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient-records" element={<PatientRecords />} />
            <Route path="/clinical-records" element={<ClinicalRecords />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/readclinical" element={<ReadClinicalRecord />} />
            <Route path="/readpatient" element={<ReadPatient />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
      <div className="home-page click-animation">
        <div className="navbar-logo-container"></div>
        <h1 style={{ color: "green", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Welcome to ToothFixers Ltd</h1>
        <p style={{ textAlign: 'center' }}>We provide quality dental care for you and your entire family.</p>

        <div className="services" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: "green" }}>Our Services</h2>
          <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
            <li>Teeth Cleaning</li>
            <li>Fillings and Restorations</li>
            <li>Extractions</li>
            <li>Root Canal Therapy</li>
            <li>Dental Implants</li>
            <li>Orthodontics</li>
          </ul>
        </div>
      </div>

      <div className="about-us" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: "green" }}>About Us</h2>
        <div>
          <p>
            We are a team of experienced and dedicated dental professionals
            committed
            <br />
            to providing exceptional dental care in a comfortable and friendly
            <br />
            environment.
          </p>
        </div>
      </div>

      <div className="contact-info">
        <h2 style={{ color: "green", textAlign: 'center' }}>Contact Information</h2>
        <p style={{ textAlign: 'center' }}>
          Address: 123 Main Street, City, State ZIP
          <br />
          Phone: (123) 456-7890
          <br />
          Email: info@dental.com
        </p>
      </div>

      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        style={{
          width: '200px',
          height: '40px',
          border: '0px',
          borderRadius: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#708090',
        }}
      >
        <Link
          to="/patient-records"
          className="btn click-animation"
          onClick={handleClick}
        >
          Schedule an Appointment
        </Link>
        </button>
      </div>
    </div>
  );
}

export default App;
