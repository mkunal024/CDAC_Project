import axios from 'axios';
import "../../Styles/adduser.css";
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateUser = (data) => {
    
    const [credentials, setCredentials] = useState({
        houseNo: data.data.houseNo,
        block: data.data.block,
        email: data.data.email,
        password: data.data.password,
        name: data.data.name,
        role: data.data.role,
    
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        console.log(credentials);
        const url = "http://localhost:8080/User/update/";
        console.log(JSON.stringify(credentials))
        try {
            const response = await axios.put(url, credentials);

            if (response.status === 200) {
                alert('Updated successfully');
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    

    
  return (
    <div>
        <h3>Update user</h3>
      <Form>
                <Form.Group className="mb-3" controlId="houseNo">
                    <Form.Label>House No.</Form.Label>
                    <Form.Control type="Number" placeholder={data.data.houseNo} readOnly onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="block">
                    <Form.Label>Block</Form.Label>
                    <Form.Control type="text" placeholder={data.data.block} onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder={data.data.email} onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder={data.data.password} readOnly onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder={data.data.name}  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder={data.data.role} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Update
                </Button>
            </Form>
    </div>
  )
}

export default UpdateUser
