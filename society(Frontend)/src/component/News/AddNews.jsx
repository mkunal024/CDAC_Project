import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../../Styles/adduser.css";



const AddUser = () => {

    const [credentials, setCredentials] = useState({
        id: undefined,
        date: "",
        news: undefined,
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();

        const url = "http://localhost:8080/News/add/";
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
            <h3>Add News</h3>
            <Form>
                {/* <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="Number" placeholder="Id" onChange={handleChange} />

                </Form.Group> */}
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Date" onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="news">
                    <Form.Label>News</Form.Label>
                    <Form.Control type="text" placeholder="news" onChange={handleChange} />

                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default AddUser
