import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './form.css';

const UpdateBioData = ({ id }: { id: any }) => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    surname: '',
    middleName: '',
    dateOfBirth: '',
    homeAddress: '',
    dateofRegistration: '',
    matriculationNumber: '21120612475', // Default value
  });

  const fetchRecord = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3001/Patient/${id}`);
      setFormData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    fetchRecord();
  }, [fetchRecord]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/Patient/${id}`, formData);
      window.location.reload();
      // Handle successful update
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Change</button>
    </form>
  );
};

export default UpdateBioData;
