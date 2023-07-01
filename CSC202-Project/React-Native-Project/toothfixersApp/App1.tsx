import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, Modal, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

interface Patient {
  id: number;
  firstName: string;
  surname: string;
  middleName: string;
  dateOfBirth: Date;
  homeAddress: string;
  dateOfRegistration: Date;
  matriculationNumber: string;
}

const App = (): JSX.Element => {
  const [list, setList] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalPatient, setModalPatient] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [matriculationNumber, setMatriculationNumber] = useState("");
  const [id, setId] = useState<number | null>(null); // Specify null as the initial type for id

  useEffect(() => {
    fetchData();
  }, []);

  // READ
  const fetchData = () => {
    //patients
    fetch("http://192.168.0.102:19000/patients", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res: Patient[]) => {
        console.log(res);
        if (res && Array.isArray(res)) {
          setList(res);
        }
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  // DELETE
  const handleRemove = (item: Patient) => {
    fetch(`http://192.168.0.102:19000/patients/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // CREATE
  const handleCreate = () => {
    setModalPatient(true);
  };

  // MODAL
  const handleCloseModal = () => {
    setModalPatient(false);
  };

  // CREATE or UPDATE
  const handleCreateModal = () => {
    const data: Patient = {
      id: id || 0,
      firstName,
      surname,
      middleName,
      dateOfBirth: new Date(),
      homeAddress,
      dateOfRegistration: new Date(),
      matriculationNumber,
    };

    if (id == null) {
      // CREATE request
      fetch("http://192.168.0.102:19000/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error: " + res.status);
          }
          return res.json();
        })
        .then((res) => {
          console.log(res);
          fetchData();
          setModalPatient(false);
          clearForm();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // UPDATE request
      fetch(`http://192.168.0.102:19000/patients/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error: " + res.status);
          }
          return res.json();
        })
        .then((res) => {
          console.log(res);
          fetchData();
          setModalPatient(false);
          clearForm();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // CLEAR FORM
  const clearForm = () => {
    setFirstName("");
    setSurname("");
    setMiddleName("");
    setHomeAddress("");
    setMatriculationNumber("");
    setId(null);
  };

  // UPDATE
  const handleUpdate = (item: Patient) => {
    setId(item.id);
    setFirstName(item.firstName);
    setSurname(item.surname);
    setMiddleName(item.middleName);
    setHomeAddress(item.homeAddress);
    setMatriculationNumber(item.matriculationNumber);
    setModalPatient(true);
  };

  return (
    <SafeAreaView>
      <Text style={styles.txtMain}>Patient List</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {list.map((item) => (
            <View key={item.id}>
              <Modal visible={modalPatient}>
                <SafeAreaView>
                  <View style={[styles.rowBetween, { paddingHorizontal: 10 }]}>
                    <Text>NEW PATIENT</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Text style={styles.txtClose}>CLOSE</Text>
                    </TouchableOpacity>
                  </View>
                  {/* form stuff */}
                  <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <Text>First Name</Text>
                    <TextInput
                      style={styles.txtInput}
                      placeholder="Enter your first name"
                      value={firstName}
                      onChangeText={(text) => {
                        setFirstName(text);
                      }}
                    />

                    <Text>Surname</Text>
                    <TextInput
                      style={styles.txtInput}
                      placeholder="Enter your surname"
                      value={surname}
                      onChangeText={(text) => {
                        setSurname(text);
                      }}
                    />

                    <Text>MiddleName</Text>
                    <TextInput
                      style={styles.txtInput}
                      placeholder="Enter your middlename"
                      value={middleName}
                      onChangeText={(text) => {
                        setMiddleName(text);
                      }}
                    />

                    <Text>Home Address</Text>
                    <TextInput
                      style={styles.txtInput}
                      placeholder="Enter your home address"
                      value={homeAddress}
                      onChangeText={(text) => {
                        setHomeAddress(text);
                      }}
                    />

                    <Text>Matriculation Number</Text>
                    <TextInput
                      style={styles.txtInput}
                      placeholder="Enter your mat no."
                      value={matriculationNumber}
                      onChangeText={(text) => {
                        setMatriculationNumber(text);
                      }}
                    />

                    {/* SAVE button */}
                    <TouchableOpacity onPress={handleCreateModal} style={styles.btnContainer}>
                      <Text style={styles.txtClose}>SAVE</Text>
                    </TouchableOpacity>
                  </View>
                </SafeAreaView>
              </Modal>

              <View style={styles.rowBetween}>
                <TouchableOpacity onPress={() => handleCreate()}>
                  <Text style={styles.txtCreate}>CREATE</Text>
                </TouchableOpacity>

                <View style={styles.item} key={item.id}>
                  <Text style={styles.txtNormal}>{item.firstName}</Text>
                  <Text>{item.surname}</Text>
                  <Text>{item.middleName}</Text>
                  <Text>{item.homeAddress}</Text>
                  <Text>{item.dateOfBirth.toDateString()}</Text>
                  <Text>{item.dateOfRegistration.toDateString()}</Text>
                  <Text>{item.matriculationNumber}</Text>

                  {/* DELETE button */}
                  <TouchableOpacity onPress={() => handleRemove(item)} style={styles.btnDelete}>
                    <Text style={styles.txtDelete}>DELETE</Text>
                  </TouchableOpacity>

                  {/* UPDATE button */}
                  <TouchableOpacity onPress={() => handleUpdate(item)} style={styles.btnUpdate}>
                    <Text style={styles.txtUpdate}>UPDATE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txtMain: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  txtNormal: {
    fontWeight: "bold",
  },
  txtCreate: {
    color: "green",
    fontWeight: "bold",
  },
  btnContainer: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  btnDelete: {
    backgroundColor: "red",
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  btnUpdate: {
    backgroundColor: "blue",
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  txtClose: {
    color: "red",
    fontWeight: "bold",
  },
  txtDelete: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  txtUpdate: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default App;
