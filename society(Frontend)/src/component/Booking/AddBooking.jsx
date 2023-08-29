import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../Styles/adduser.css";



const AddBooking = () => {

    const [credentials, setCredentials] = useState({
        id: undefined,
        bookedOn:new Date().toISOString().split('T')[0],
        bookingDate:"",
        facilityCodeNo: "",
        userId: "",
    
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const selectedBookingDate = new Date(credentials.bookingDate);
        const currentDate = new Date();
        
        if (selectedBookingDate < currentDate) {
            alert("Booking date cannot be before the current date");
            return;
        }

        const url = "http://localhost:8080/Booking/add/";
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
            <h3>New Booking</h3>
            <Form>
                 <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="Number" placeholder="id" onChange={handleChange} /> 

                </Form.Group> 
                <Form.Group className="mb-3" controlId="facilityCodeNo">
                    <Form.Label>Facility Code Number</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="bookingDate">
                    <Form.Label>Booking date</Form.Label>
                    <Form.Control type="date" placeholder="Date" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="userId">
                    <Form.Label>User House no.</Form.Label>
                    <Form.Control type="number" placeholder="House number" onChange={handleChange} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddBooking
