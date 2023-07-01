import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom'; // Import Routes component
import axios from 'axios';
import Thanks from './thanks';


function handleClick() {
  var element = document.querySelector('.click-animation') as HTMLElement;
  if (element) {
    element.classList.add('clicked');

    setTimeout(function() {
      element.classList.remove('clicked');
    }, 500);
  }
}

const Profile: React.FC = () => {
  const [clinicDate, setClinicDate] = useState('');
  const [natureOfAilment, setNatureOfAilment] = useState('');
  const [medicinePrescribed, setMedicinePrescribed] = useState('');
  const [procedureUndertaken, setProcedureUndertaken] = useState('');
  const [dateOfNextAppointment, setDateOfNextAppointment] = useState('');

  const changeClinicDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClinicDate(event.target.value);
  };

  const changeNatureOfAilment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNatureOfAilment(event.target.value);
  };

  const changeMedicinePrescribed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMedicinePrescribed(event.target.value);
  };

  const changeProcedureUndertaken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProcedureUndertaken(event.target.value);
  };

  const changeDateOfNextAppointment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfNextAppointment(event.target.value);
  };

  const postData = () => {
    axios.post('http://localhost:3001/Clinicrecord', {  
      clinicDate,
      natureOfAilment,
      medicinePrescribed,
      procedureUndertaken,
      dateOfNextAppointment,
    });
  };

  return (
    <div className="create-form">
      <label style={{ color: 'white' }}>Clinic Date</label>
      <p>
        <input
          type="date"
          placeholder="Please enter the date of the patient's first consultation..."
          onChange={changeClinicDate}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Nature of Ailment</label>
      <p>
        <input
          type="text"
          placeholder="Please enter a description of the patient's ailment..."
          onChange={changeNatureOfAilment}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Medicine Prescribed</label>
      <p>
        <input
          type="text"
          placeholder="Please enter the prescribed medication for the patient..."
          onChange={changeMedicinePrescribed}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Procedure Undertaken</label>
      <p>
        <input
          type="text"
          placeholder="Please enter the treatment/procedure undertaken..."
          onChange={changeProcedureUndertaken}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Date of Next Appointment</label>
      <p>
        <input
          type="date"
          placeholder="Please enter the date of the patient's next appointment..."
          onChange={changeDateOfNextAppointment}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <button
        onClick={postData}
        type="submit"
        style={{
          width: '200px',
          height: '40px',
          border: '0px',
          borderRadius: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4CAF50',
        }}
      >
        <Link to="/thanks" className="btn click-animation" onClick={handleClick}>
          Submit
        </Link>
      </button>
      <p>
        <Routes>
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </p>
    </div>
  );
};


export default Profile;
