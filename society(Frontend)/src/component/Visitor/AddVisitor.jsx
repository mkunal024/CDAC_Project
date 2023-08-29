import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../Styles/adduser.css";



const AddVisitor = () => {

    const [credentials, setCredentials] = useState({
        id: undefined,
        purpose: "",
        address:"",
        block: undefined,
        dateOfVisit: new Date().toISOString().split('T')[0],
        name: "",
        phnNo:"",
        houseNo: "",
    });


    const [errors, setErrors] = useState({
        houseNo: "",
        block: "",
        phnNo: "",
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

        if (!/^[7-9]\d{9}$/.test(credentials.phnNo)) {
            newErrors.phnNo = "Phone number should start with 7, 8, or 9 and must be 10 digits long";
            isValid = false;
        } else {
            newErrors.phnNo = "";
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
        const url = "http://localhost:8080/Visitor/add/";
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
        <div className='visitor-add'>
            <h3>Add Visitor</h3>
            <Form>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="Number" placeholder="id" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="adddress" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="purpose">
                    <Form.Label>Purpose</Form.Label>
                    <Form.Control type="text" placeholder="Purpose" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="block">
                    <Form.Label>Block</Form.Label>
                    <Form.Control type="text" placeholder="Block" onChange={handleChange} />
                    <Form.Text className="text-danger">{errors.block}</Form.Text>
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="dateOfVisit">
                    <Form.Label>Date of Visit</Form.Label>
                    <Form.Control type="text" placeholder="Date" onChange={handleChange} />

                </Form.Group> */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={handleChange} />
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phnNo">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" placeholder="Phone number" onChange={handleChange} />
                    <Form.Text className="text-danger">{errors.phnNo}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="houseNo">
                    <Form.Label>House number</Form.Label>
                    <Form.Control type="number" placeholder="House number" onChange={handleChange} />
                    <Form.Text className="text-danger">{errors.houseNo}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
                
                
                
                
            </Form>

        </div>
    )
}

export default AddVisitor
