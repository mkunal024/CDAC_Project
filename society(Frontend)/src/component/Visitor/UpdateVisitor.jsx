import axios from 'axios';
import "../../Styles/visitors.css";
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateVisitor = (data) => {
    

    const [credentials, setCredentials] = useState({
        id: data.data.id,
        purpose: data.data.purpose,
        address:data.data.address,
        block: data.data.block,
        dateOfVisit: data.data.dateOfVisit,
        name: data.data.name,
        phnNo:data.data.phnNo,
        houseNo: data.data.houseNo,

    
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
        const url = "http://localhost:8080/Visitor/update/";
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
        <h3>Update Visitor</h3>
      <Form>
                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="Number" placeholder={data.data.id} readOnly onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Purpose</Form.Label>
                    <Form.Control type="text" placeholder={data.data.address} onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="purpose">
                    <Form.Label>Purpose</Form.Label>
                    <Form.Control type="text" placeholder={data.data.purpose} onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="block">
                    <Form.Label>Block</Form.Label>
                    <Form.Control type="text" placeholder={data.data.block} onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="dateOfVisit">
                    <Form.Label>date_of_visit</Form.Label>
                    <Form.Control type="text" placeholder={data.data.dateOfVisit} readOnly onChange={handleChange}/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder={data.data.name}  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phnNo">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" placeholder={data.data.phnNo} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="houseNo">
                    <Form.Label>House No.</Form.Label>
                    <Form.Control type="number" placeholder={data.data.houseNo.houseNo} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                    Update
                </Button>
            </Form>
    </div>
  )
}

export default UpdateVisitor
