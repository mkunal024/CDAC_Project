import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import { Table } from 'react-bootstrap';
import "../Styles/adduser.css";
import AddNews from '../component/News/AddNews';
import UpdateNews from '../component/News/UpdateNews';


const NewsAdmin = () => {



  const [users, setUsers] = useState([]);



  const [btn, setBtn] = useState("");


  const fetchUsers = async (e) => {
    const url = 'http://localhost:8080/News/get'; // Replace with your actual API endpoint

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
    date: "",
    news: undefined,
  });

  const handleButton = (action, id, date, news) => {
    setBtn(action);
    setCredentials({
      id: id,
      date: date,
      news: news,
    })
    console.log(credentials);

    // console.log(selectedHouseNo); // Store the selected houseNo when Update/Delete is clicked
  };

  const deleteUserById = async (id) => {
    const url = `http://localhost:8080/News/delete/${id}`; // Replace with your actual API endpoint

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
    deleteUserById(id);

  };

  return (
    <div className='container'>
      <div className='user-display'>
        <Button onClick={fetchUsers} style={{ marginRight: '20px' }}>Get News</Button>
        <Button value="add" onClick={() => handleButton("add")}>Add</Button>
        <h2>News List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>News</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (

              <tr key={index}>

                <td>{user.id}</td>
                <td>{user.date}</td>
                <td>{user.news}</td>
                <td>


                  <Button
                    value="update"
                    onClick={() => {
                      handleButton("update", user.id, user.date, user.news);
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

        {btn === "add" && <AddNews />}
        {btn === "update" && <UpdateNews data={credentials} />}

      </div>
    </div>
  )
}

export default NewsAdmin
