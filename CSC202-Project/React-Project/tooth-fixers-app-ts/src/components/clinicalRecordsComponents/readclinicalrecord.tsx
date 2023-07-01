import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateClinicalRecord from "./createclinicalrecord";
import UpdateClinicalRecord from "./updateclinicalrecord";
import "./readclinicalrecord.css";

const ReadClinicalRecord = () => {
  const [showClinicalForm, setShowClinicalForm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);
  const [mydata, setmyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/Clinicrecord`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:3001/Clinicrecord/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowClinicalForm = () => {
    setShowClinicalForm(true);
  };

  const handleUpdate = (id: any) => {
    setSelectedId(id);
  };

  return (
    <div className="container">
      {showClinicalForm ? (
        <CreateClinicalRecord />
      ) : selectedId ? (
        <UpdateClinicalRecord id={selectedId} />
      ) : (
        <table className="ClinicalRecord-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Clinic Date</th>
              <th>Nature of Ailment</th>
              <th>Medicine Prescribed</th>
              <th>Procedure Undertaken</th>
              <th>Date of Next Appointment</th>
              <th></th>
              <th>
                <button onClick={handleShowClinicalForm}>Create</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.clinicDate}</td>
                <td>{item.natureOfAilment}</td>
                <td>{item.medicinePrescribed}</td>
                <td>{item.procedureUndertaken}</td>
                <td>{item.dateOfNextAppointment}</td>
                <td>
                  <button onClick={() => handleUpdate(item.id)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReadClinicalRecord;
