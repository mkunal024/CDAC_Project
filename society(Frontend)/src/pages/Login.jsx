import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




const Login = () => {
const navigate = useNavigate();
const [credentials, setCredentials] =useState({
    email : undefined,
    password : undefined,
});

const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');


const handleChange =async(e)=>{
    const { id, value } = e.target;

    if (id === 'email') {
        if (!value) {
          setEmailError('Email is required.');
        } else {
          setEmailError('');
        }
      }
    
      if (id === 'password') {
        if (!value) {
          setPasswordError('Password is required.');
        } else {
          setPasswordError('');
        }
      }

setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}));
};

const handleClick= async(e) => {
    e.preventDefault();

    if (!credentials.email) {
        setEmailError('Email is required.');
        return;
      }
    
      if (!credentials.password) {
        setPasswordError('Password is required.');
        return;
      }

    try{
        const response =await axios.post('http://localhost:8080/api/user/login',credentials);
        if(response.status === 200){
            localStorage.setItem('houseNo',response.data.houseNo);
            localStorage.setItem('userRole',response.data.role);
            localStorage.setItem('userName',response.data.name);

            if(localStorage.getItem('userRole')==='ADMIN')
            {
                navigate('/admin');
            }
            else if(localStorage.getItem('userRole')==='OWNER')
            {
                navigate('/show');
            }
            else if(localStorage.getItem('userRole')==='SECURITYGUARD')
            {
                navigate('/security');
            }
            console.log(localStorage.getItem('userRole'));
        }
        else{
            console.log('Login failed');
        }

    }
        catch(error){
            window.alert('Invalid credentials.');
        console.log('Error during login',error);
        }
        console.log(credentials);
    }
    return (
        <>
            <div>

                <Form onSubmit={handleClick}>
                    <h3>Login</h3>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleChange}  isInvalid={!!emailError}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  onChange={handleChange} isInvalid={!!passwordError}/>
                    </Form.Group>
                    <Form.Control.Feedback type="invalid">
  {passwordError}
</Form.Control.Feedback>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
                {/* <button onClick={handleClick}>click me </button>
                <div>
                    <table>
                        <tr>
                            <td>House no</td>
                            <td>name</td>
                            <td>email</td>
                        </tr>
                        {users.map((user,index) => (
                            <tr key={user.houseNo}>
                                 <td>{user.houseNo}</td>
                                 <td>{user.name}</td>
                                 <td>{user.email}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
            <div> */}
            </div>
        </>
    )
}

export default Login
