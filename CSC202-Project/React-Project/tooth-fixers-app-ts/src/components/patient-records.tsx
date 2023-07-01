import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const New: React.FC = () => {
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [dateOfRegistration, setDateOfRegistration] = useState('');
  const [matriculationNumber, setMatriculationNumber] = useState('');

  const handleChangeTitle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(event.target.value);
  };

  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleChangeMiddleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleName(event.target.value);
  };

  const handleChangeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };

  const handleChangeDateOfBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfBirth(event.target.value);
  };

  const handleChangeHomeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHomeAddress(event.target.value);
  };

  const handleChangeDateOfRegistration = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateOfRegistration(event.target.value);
  };

  const handleChangeMatriculationNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMatriculationNumber(event.target.value);
  };

  const postData = () => {
    axios.post('http://localhost:3001/Patient', {
    title,  
    firstName,
      middleName,
      surname,
      homeAddress,
      matriculationNumber,
      dateOfBirth,
      dateOfRegistration,
    });
  };

  return (
    <div className="create-form">
      <label style={{ color: 'white' }}>Title</label><br />
      <select
  name="title"
  style={{
    width: '425px',
    height: '42px',
    borderRadius: '10px',
    border: '0px',
    backgroundColor: '#f5f5f5',
    marginBottom: '10px',
  }}
  onChange={handleChangeTitle}
>
  <option
    value="title"
    disabled
    selected
  >
    Please Select a Title
  </option>
  <option
    value="Mr."
  >
    Mr.
  </option>
  <option
    value="Mrs."
  >
    Mrs.
  </option>
</select>

      <label style={{ color: 'white' }}>First Name</label>
      <p>
        <input
          type="text"
          placeholder="Please Enter your First Name..."
          onChange={handleChangeFirstName}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Middle Name</label>
      <p>
        <input
          type="text"
          placeholder="Enter your Middle Name..."
          onChange={handleChangeMiddleName}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Surname</label>
      <p>
        <input
          type="text"
          placeholder="Enter your Surname..."
          onChange={handleChangeSurname}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Date of Birth</label>
      <p>
        <input
          type="date"
          placeholder="Enter your Date of Birth..."
          onChange={handleChangeDateOfBirth}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Home Address</label>
      <p>
      <input
          type="text"
          placeholder="Enter your Home Address..."
          onChange={handleChangeHomeAddress}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Date of Registration</label>
      <p>
        <input
          type="date"
          placeholder="Enter your Date of Registration..."
          onChange={handleChangeDateOfRegistration}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <label style={{ color: 'white' }}>Matriculation Number</label>
      <p>
        <input
          type="text"
          placeholder="Enter your Matriculation Number..."
          onChange={handleChangeMatriculationNumber}
          style={{ width: '400px', height: '25px', border: '0px', borderRadius: '10px', backgroundColor: '#f5f5f5' }}
        />
      </p>
      <Link to="/clinical-records" style={{ color: 'white' }}>
      <button onClick={postData} style={{ width: '200px', height: '40px', borderRadius: '10px', backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold' }}>
        Submit
      </button>
      </Link>
      <p>
        <Link to="/" style={{ color: 'white' }}>
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default New;

