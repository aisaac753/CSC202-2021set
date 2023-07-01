import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './form.css';

const UpdateClinicalRecord = ({ id }: { id: any }) => {
  const [formData, setFormData] = useState({
    clinicDate: '',
    natureOfAilment: '',
    medicinePrescribed: '',
    procedureUndertaken: '',
    dateOfNextAppointment: ''
  });

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/Clinicrecord/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecord();
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3001/Clinicrecord/${id}`, formData);
      window.location.reload();
      // Handle successful update
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Clinic date:
        <input
          className="input"
          type="date"
          name="clinicDate"
          value={formData.clinicDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Nature of ailment:
        <input
          className="input"
          type="text"
          name="natureOfAilment"
          value={formData.natureOfAilment}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Medicine prescribed:
        <input
          className="input"
          type="text"
          name="medicinePrescribed"
          value={formData.medicinePrescribed}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Procedure undertaken:
        <input
          className="input"
          type="text"
          name="procedureUndertaken"
          value={formData.procedureUndertaken}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Date of next appointment:
        <input
          className="input"
          type="date"
          name="dateOfNextAppointment"
          value={formData.dateOfNextAppointment}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button className="button" type="submit">Change</button>
    </form>
  );
};

export default UpdateClinicalRecord;
