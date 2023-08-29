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

    const [errors, setErrors] = useState({
        houseNo: "",
        block: "",
        password: "",
        name: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (credentials.houseNo <= 0) {
            newErrors.houseNo = "House No. should be greater than 0";
            isValid = false;
        } else {
            newErrors.houseNo = "";
        }

        if (!/^[A-B]$/.test(credentials.block)) {
            newErrors.block = "Block should be either 'A' or 'B'";
            isValid = false;
        } else {
            newErrors.block = "";
        }

        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}/.test(credentials.password)) {
            newErrors.password = "Password should contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character, and be at least 8 characters long";
            isValid = false;
        } else {
            newErrors.password = "";
        }

        if (!isNaN(credentials.name)) {
            newErrors.name = "Name cannot be a number";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
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
                    <Form.Control type="Number" placeholder="House no." onChange={handleChange}/>
                    <Form.Text className="text-danger">{errors.houseNo}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="block">
                    <Form.Label>Block</Form.Label>
                    <Form.Control type="text" placeholder="Block" onChange={handleChange} />
                    <Form.Text className="text-danger">{errors.block}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} />
                    <Form.Text className="text-danger">{errors.password}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={handleChange} />
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
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
