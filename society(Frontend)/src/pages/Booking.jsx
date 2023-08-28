import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { Table } from 'react-bootstrap';
import "../Styles/adduser.css";
import AddBooking from '../component/Booking/AddBooking';
import UpdateBooking from '../component/Booking/UpdateBooking';

const Booking = () => {
  const [users, setUsers] = useState([]);



  const [btn, setBtn] = useState("");


  const fetchUsers = async (e) => {
    const url = 'http://localhost:8080/Booking/get'; // Replace with your actual API endpoint

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
    bookedOn:"",
    bookingDate:"",
    facilityCodeNo: "",
    userId: undefined,

  });

  const handleButton = (action, id, bookedOn, bookingDate, facilityCodeNo, userId) => {
    setBtn(action);
    setCredentials({
      id: id,
      bookedOn:bookedOn,
      bookingDate:bookingDate,
      facilityCodeNo: facilityCodeNo,
      userId: userId,
    })
    console.log(credentials);

    // console.log(selectedHouseNo); // Store the selected houseNo when Update/Delete is clicked
  };

  const deleteBookingById = async (id) => {
    const url = `http://localhost:8080/Booking/delete/${id}`; // Replace with your actual API endpoint

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert(`Booking with id  ${ id } is deleted`)
      } else {
        // Handle other response statuses
      }
    } catch (error) {
      // Handle error
    }
  };
  const handleDelete = (id) => {
    deleteBookingById(id);

  };
  return (
    <div className='container'>
      <div className='user-display'>
        <Button onClick={fetchUsers} style={{ marginRight: '20px' }}>Get Booking Details</Button>
        <Button value="add" onClick={() => handleButton("add")}>Add</Button>
        <h2>Booking List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Facility Name</th>
              <th>Booked On</th>
              <th>Booking Date</th>
              <th>House number</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (

              <tr key={index}>

                <td>{user.id}</td>
                <td>{user.facilityCodeNo.code}</td>
                <td>{user.bookedOn}</td>
                <td>{user.bookingDate}</td>
                <td>{user.userId.houseNo}</td>
                <td>{user.userId.name}</td>
                <td>


                  <Button
                    value="update"
                    onClick={() => {
                      handleButton("update", user.id, user.bookedOn, user.bookingDate, user.facilityCodeNo, user.userId);
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

        {btn === "add" && <AddBooking />}
        {btn === "update" && <UpdateBooking data={credentials} />}

      </div>
    </div>
  )
}

export default Booking
