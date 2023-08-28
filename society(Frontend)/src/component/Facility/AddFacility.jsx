import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../Styles/adduser.css";



const AddFacility = () => {

    const [credentials, setCredentials] = useState({
        id: undefined,
        available: undefined,
    code: undefined,
    
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const url = "http://localhost:8080/Facility/add/";
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
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="Number" placeholder="Id" onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="available">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type="text" placeholder="Status" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="code">
                    <Form.Label>Facility name</Form.Label>
                    <Form.Control type="text" placeholder="facility_code_no" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddFacility
