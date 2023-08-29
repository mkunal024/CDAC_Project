import axios from 'axios';
import "../../Styles/adduser.css";
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateEvent = (data) => {
    
    const [credentials, setCredentials] = useState({
        id: data.data.id,
        date: data.data.date,
        event: data.data.event,
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
        const url = "http://localhost:8080/Event/update/";
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
        <h3>Update event</h3>
      <Form>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="Number" placeholder={data.data.id} readOnly onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder={data.data.date} onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="news">
                    <Form.Label>news</Form.Label>
                    <Form.Control type="text" placeholder={data.data.event} onChange={handleChange} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleClick}>
                    Update
                </Button>
            </Form>
    </div>
  )
}

export default UpdateEvent
