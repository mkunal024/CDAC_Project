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

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

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
            <h3>Add user</h3>
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

                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="dateOfVisit">
                    <Form.Label>Date of Visit</Form.Label>
                    <Form.Control type="text" placeholder="Date" onChange={handleChange} />

                </Form.Group> */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phnNo">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" placeholder="Phone number" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="houseNo">
                    <Form.Label>House number</Form.Label>
                    <Form.Control type="number" placeholder="House number" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddVisitor
