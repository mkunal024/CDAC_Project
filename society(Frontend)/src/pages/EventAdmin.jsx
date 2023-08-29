import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { Table } from 'react-bootstrap';
import "../Styles/adduser.css";
import AddEvent from '../component/Event/AddEvent';
import UpdateEvent from '../component/Event/UpdateEvent';


const EventAdmin = () => {



  const [users, setUsers] = useState([]);



  const [btn, setBtn] = useState("");


  const fetchUsers = async (e) => {
    const url = 'http://localhost:8080/Event/get'; // Replace with your actual API endpoint

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        // console.log(response.data);
        setUsers(response.data);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const [credentials, setCredentials] = useState({
    id: undefined,
    event:"",
    date: "",
  });

  const handleButton = (action, id, event, date ) => {
    setBtn(action);
    setCredentials({
      id: id,
      event: event,
      date: date,
    })
    console.log(credentials);

    // console.log(selectedHouseNo); // Store the selected houseNo when Update/Delete is clicked
  };

  const deleteEventById = async (id) => {
    const url = `http://localhost:8080/Event/delete/${id}`; // Replace with your actual API endpoint

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert(`News with id  ${ id } is deleted`)
      } else {
        // Handle other response statuses
      }
    } catch (error) {
      // Handle error
    }
  };
  const handleDelete = (id) => {
    deleteEventById(id);

  };

  return (
    <div className='container'>
      <div className='user-display'>
        <Button onClick={fetchUsers} style={{ marginRight: '20px' }}>Get Events</Button>
        <Button value="add" onClick={() => handleButton("add")}>Add</Button>
        <h2>Event List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Event</th>
              <th>Date</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (

              <tr key={index}>

                <td>{user.id}</td>
                <td>{user.event}</td>
                <td>{user.date}</td>
                <td>


                  <Button
                    value="update"
                    onClick={() => {
                      handleButton("update", user.id, user.event, user.date);
                      fetchUsers();
                    }}
                  >
                    Update
                  </Button>
                  <Button value="delete" onClick={() => handleDelete(user.id)}>Delete</Button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className='user-add'>

        {btn === "add" && <AddEvent />}
        {btn === "update" && <UpdateEvent data={credentials} />}

      </div>
    </div>
  )
}

export default EventAdmin
