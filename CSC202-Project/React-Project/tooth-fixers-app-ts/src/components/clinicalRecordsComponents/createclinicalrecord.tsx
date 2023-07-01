import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const CreateClinicalRecord = () => {
  const [formData, setFormData] = useState({
    clinicDate: '',
    natureOfAilment: '',
    medicinePrescribed: '',
    procedureUndertaken: '',
    dateOfNextAppointment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/clinical-records', formData);
      console.log(response)
      window.location.reload()
      setFormData({
        clinicDate: '',
        natureOfAilment: '',
        medicinePrescribed: '',
        procedureUndertaken: '',
        dateOfNextAppointment: ''
      });
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Clinic date:
        <input
          className="input"
          type="Date"
          name="clinicDate"
          value={formData.clinicDate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Nature of ailment:
        <input
          className="input"
          type="string"
          name="natureOfAilment"
          value={formData.natureOfAilment}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Medicine prescribed:
        <input
          className="input"
          type="string"
          name="medicinePrescribed"
          value={formData.medicinePrescribed}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Procedure undertaken:
        <input
          className="input"
          type="string"
          name="procedureUndertaken"
          value={formData.procedureUndertaken}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date of next prescribed:
        <input
          className="input"
          type="Date"
          name="dateOfNextAppointment"
          value={formData.dateOfNextAppointment}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="button" type="submit">Submit</button>
    </form>
  );
};

export default CreateClinicalRecord;
