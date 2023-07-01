import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
const CreateBioData = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    surname: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateofRegistration: '',
    matriculationNumber: '21120613122', // Default value
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {

    try {
      const response = await axios.post('http://localhost:3001/biodata-of-patients', formData);
      window.location.reload();
      console.log(response.data); // Handle the response from the backend
      setFormData({
        title: '',
        firstName: '',
        surname: '',
        middleName: '',
        dateOfBirth: '',
        homeAddress: '',
        dateofRegistration: '',
        matriculationNumber: '21120613122',
      });
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <label>
     Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Home Address:
          <input
            type="text"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Date of Registration:
          <input
            type="date"
            name="dateofRegistration"
            value={formData.dateofRegistration}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Matriculation Number:
          <input
            type="text"
            name="matriculationNumber"
            value={formData.matriculationNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBioData;
