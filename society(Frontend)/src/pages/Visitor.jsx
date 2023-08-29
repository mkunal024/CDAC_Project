import axios from 'axios';
import { useState } from 'react'
import React from 'react';
import Button from 'react-bootstrap/Button';

import { Table } from 'react-bootstrap';
import "../Styles/adduser.css";
import AddVisitor from '../component/Visitor/AddVisitor';
import UpdateVisitor from '../component/Visitor/UpdateVisitor';
import { useEffect } from 'react';

const Visitor = () => {
  const [users, setUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [btn, setBtn] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    const url = 'http://localhost:8080/Visitor/get'; // Replace with your actual API endpoint

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        setUsers(response.data);
        setOriginalUsers(response.data);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  const fetchUsers = async (e) => {
    const url = 'http://localhost:8080/Visitor/get'; // Replace with your actual API endpoint

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

  const handleSearch = () => {
    const filteredUsers = originalUsers.filter(user =>
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      user.address.toLowerCase().includes(searchAddress.toLowerCase())
    );

    setUsers(filteredUsers);
  };

  const [credentials, setCredentials] = useState({
    id: undefined,
    address: "",
    purpose: "",
    block: undefined,
    dateOfVisit: undefined,
    name: "",
    phnNo: "",
    houseNo: "",

  });

  const handleButton = (action, id, address, purpose, block, dateOfVisit, name, phnNo, houseNo) => {
    setBtn(action);
    setCredentials({
      id: id,
      address: address,
      purpose: purpose,
      block: block,
      dateOfVisit: dateOfVisit,
      name: name,
      phnNo: phnNo,
      houseNo: houseNo,
    })
    console.log(credentials);

    // console.log(selectedHouseNo); // Store the selected houseNo when Update/Delete is clicked
  };
  const deleteVisitorById = async (id) => {
    const url = `http://localhost:8080/Visitor/delete/${id}`; // Replace with your actual API endpoint

    try {
      const response = await axios.delete(url);

      if (response.status === 200) {
        alert(`Visitor with id  ${id} is deleted`)
      } else {
        // Handle other response statuses
      }
    } catch (error) {
      // Handle error
    }
  };
  const handleDelete = (id) => {
    deleteVisitorById(id);

  };
  return (
    <div>
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
              placeholder="Search by Address"
              value={searchAddress}
              onChange={(e) => setSearchAddress(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
            <Button onClick={fetchVisitors} style={{ marginLeft: '10px' }}>Fetch Visitor List</Button>
          </div>
          <Button value="add" onClick={() => handleButton("add")}>Add</Button>
          <h2>Visitor List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  Id
                </th>
                <th>Address<Button onClick={handleSort}>Sort</Button></th>
                <th>Purpose</th>
                <th>Block</th>
                <th>Date of visit</th>
                <th>Name</th>
                <th>Phone number</th>
                <th>House Number</th>

              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (

                <tr key={index}>

                  <td>{user.id}</td>
                  <td>{user.address}</td>
                  <td>{user.purpose}</td>
                  <td>{user.block}</td>
                  <td>{user.dateOfVisit}</td>
                  <td>{user.name}</td>
                  <td>{user.phnNo}</td>
                  <td>{user.houseNo.houseNo}</td>
                  <td>


                    <Button
                      value="update"
                      onClick={() => {
                        handleButton("update", user.id, user.address, user.purpose, user.block, user.dateOfVisit, user.name, user.phnNo, user.houseNo);
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
        <div className='Visitor-add'>

          {btn === "add" && <AddVisitor />}
          {btn === "update" && <UpdateVisitor data={credentials} />}

        </div>
      </div>
    </div>
  )
}

export default Visitor
