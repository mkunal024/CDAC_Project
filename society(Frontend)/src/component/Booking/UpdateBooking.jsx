import axios from 'axios';
import "../../Styles/adduser.css";
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateBooking = (data) => {
    
    const [credentials, setCredentials] = useState({
        id: data.data.id,
        facilityCodeNo: data.data.facilityCodeNo,
        bookedOn:new Date().toISOString().split('T')[0],
        bookingDate: data.data.bookingDate,
        userId: data.data.userId,
    
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
        console.log(credentials);
        const url = "http://localhost:8080/Booking/update/";
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
        <h3>Update Booking</h3>
      <Form>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Booking Id</Form.Label>
                    <Form.Control type="Number" placeholder={data.data.id} readOnly onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="facilityCodeNo">
                    <Form.Label>facility</Form.Label>
                    <Form.Control type="text" placeholder={data.data.facilityCodeNo.id} onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="bookingDate">
                    <Form.Label>BookingDate</Form.Label>
                    <Form.Control type="Date" placeholder={data.data.bookingDate.code} onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="user_id">
                    <Form.Label>User house no</Form.Label>
                    <Form.Control type="number" placeholder={data.data.userId.houseNo} readOnly onChange={handleChange} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick}>
                    Update
                </Button>
            </Form>
    </div>
  )
}

export default UpdateBooking
