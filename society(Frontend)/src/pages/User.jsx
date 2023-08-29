import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { Table } from 'react-bootstrap';
import "../Styles/adduser.css";
import AddUser from '../component/Admin/AddUser';
import UpdateUser from '../component/Admin/UpdateUser';
import DeleteUser from '../component/Admin/DeleteUser';
import { useEffect } from 'react';

const User = () => {



  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]); // Store the original list of users
  const [btn, setBtn] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchHouseNo, setSearchHouseNo] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const sortedUsers = [...users];

    if (sortOrder === "asc") {
      sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
      setSortOrder("desc");
    } else {
      sortedUsers.sort((a, b) => b.name.localeCompare(a.name));
      setSortOrder("asc");
    }

    setUsers(sortedUsers);
  };

  // const fetchUsers = async (e) => {
  //   const url = 'http://localhost:8080/User/get'; // Replace with your actual API endpoint

  //   try {
  //     const response = await axios.get(url);

  //     if (response.status === 200) {
  //       // console.log(response.data);
  //       setUsers(response.data);
  //     } else {
  //       throw new Error('Request failed');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const url = 'http://localhost:8080/User/get'; // Replace with your actual API endpoint

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setUsers(data);
        setOriginalUsers(data);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const search = async () => {
    const filteredUsers = originalUsers.filter(user =>
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (searchHouseNo == "" || user.houseNo == searchHouseNo)
    );
    setUsers(filteredUsers);

    const res=await axios.get('http://localhost:8080/User/get');

    setOriginalUsers(res.data)
  };
  


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
      <div>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Search by House No"
            value={searchHouseNo}
            onChange={(e) => setSearchHouseNo(e.target.value)}
          />
          <Button onClick={search}>Search</Button>
          <Button onClick={fetchUsers} style={{ marginLeft: '10px' }}>Fetch Users</Button>
        </div>
        {/* <Button onClick={fetchUsers} style={{ marginRight: '20px' }}>Fetch Users</Button> */}
        <Button value="add" onClick={() => handleButton("add")}>Add</Button>
        <h2>User List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name<Button onClick={handleSort}>Sort</Button></th>
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
