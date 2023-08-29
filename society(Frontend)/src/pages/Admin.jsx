import React from 'react'
import "../Styles/admin.css"
import { Link } from 'react-router-dom'
import News from './News';
import Event from './Event';
const Admin = () => {

    // const {data} = fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-07-25&sortBy=publishedAt&apiKey=4ab733a62b6d455285ce8024650f4efe")
    // .then(result => console.log(result));
    
    const userRole=localStorage.getItem('userRole');

    return (
        
     <>
         {userRole==='ADMIN'? <div className='admin-container'>
            <div className='news'>
                <h3><i><Link to="/admin/news">News</Link></i></h3>
                <News/>
            </div>
            <div className='admin-contents'>
                <table >
                    <tr>
                        <td >
                            <Link to="/add/user"><div className='table-div-user'>User </div></Link>
                        </td>
                        <td >
                            <Link to="/visitor"><div className='table-div-visitor'>Visitor </div></Link>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <Link to="/facility"><div className='table-div-facility'>Facility </div></Link>
                        </td >
                        <td >
                            <Link to="/booking"><div className='table-div-booking'>Booking </div></Link>
                        </td>
                    </tr>
                    
                </table>
            </div>
            <div className='events'>
                <h3><i> <Link to="/admin/news">Events</Link></i></h3>
                <Event/>
            </div>
        </div>: <div ><h1 className='alert'> You are not authorized </h1></div> }
        
        </>
    )
}

export default Admin
