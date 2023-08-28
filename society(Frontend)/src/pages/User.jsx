import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { Table } from 'react-bootstrap';
import "../Styles/adduser.css";
import AddUser from '../component/Admin/AddUser';
import UpdateUser from '../component/Admin/UpdateUser';
import DeleteUser from '../component/Admin/DeleteUser';


const User = () => {



  const [users, setUsers] = useState([]);



  const [btn, setBtn] = useState("");


  const fetchUsers = async (e) => {
    const url = 'http://localhost:8080/User/get'; // Replace with your actual API endpoint

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
    houseNo: undefined,
    block: "",
    email: undefined,
    password: undefined,
    name: "",
    role: "",

  });

  const handleButton = (action, houseNo, block, email, password, name, role) => {
    setBtn(action);
    setCredentials({
      houseNo: houseNo,
      block: block,
      email: email,
      password: password,
      name: name,
      role: role,
    })
    console.log(credentials);

    // console.log(selectedHouseNo); // Store the selected houseNo when Update/Delete is clicked
  };

  const deleteUserByHouseNo = async (houseNo) => {
    const url = `http://localhost:8080/User/delete/${houseNo}`; // Replace with your actual API endpoint

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert(`User with houseNo.  ${ houseNo } is deleted`)
      } else {
        // Handle other response statuses
      }
    } catch (error) {
      // Handle error
    }
  };
  const handleDelete = (houseNo) => {
    deleteUserByHouseNo(houseNo);

  };

  return (
    <div className='container'>
      <div className='user-display'>
        <Button onClick={fetchUsers} style={{ marginRight: '20px' }}>Fetch Users</Button>
        <Button value="add" onClick={() => handleButton("add")}>Add</Button>
        <h2>User List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>House no</th>
              <th>Block</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (

              <tr key={index}>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.houseNo}</td>
                <td>{user.block}</td>
                <td>


                  <Button
                    value="update"
                    onClick={() => {
                      handleButton("update", user.houseNo, user.block, user.email, user.password, user.name, user.role);
                      fetchUsers();
                    }}
                  >
                    Update
                  </Button>
                  <Button value="delete" onClick={() => handleDelete(user.houseNo)}>Delete</Button>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className='user-add'>

        {btn === "add" && <AddUser />}
        {btn === "update" && <UpdateUser data={credentials} />}

      </div>
    </div>
  )
}

export default User
