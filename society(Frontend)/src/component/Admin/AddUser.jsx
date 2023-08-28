import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../Styles/adduser.css";



const AddUser = () => {

    const [credentials, setCredentials] = useState({
        houseNo: undefined,
        block: "",
        email: undefined,
        password: undefined,
        name: "",
        role: "",
    
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const url = "http://localhost:8080/User/add/";
        console.log(JSON.stringify(credentials))
        try {
            const response = await axios.post(url, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('Added successfully');
            } else {
                alert('Error');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='user-add'>
            <h3>Add user</h3>
            <Form>
                <Form.Group className="mb-3" controlId="houseNo">
                    <Form.Label>House No.</Form.Label>
                    <Form.Control type="Number" placeholder="House no." onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="block">
                    <Form.Label>Block</Form.Label>
                    <Form.Control type="text" placeholder="Block" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" placeholder="role" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddUser
