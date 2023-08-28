import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/show.css"
import News from './News'
import Event from './Event'
const Show = () => {
    return (
        
            <div className='show-container'>
                <div className='news'>
                    <h3><i>News</i></h3>
                    <News/>
                </div>
                <div className='show-contents'>
                    <table >
                        
                        <tr>
                            <td >
                                <Link to="/facilityOwner"><div className='table-div'>Facility </div></Link>
                            </td >
                            <td >
                                <Link to="/bookingOwner"><div className='table-div'>Booking </div></Link>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='events'>
                    <h3><i>Events</i></h3>
                    <Event/>
                </div>
            </div>
        
    )
}

export default Show
