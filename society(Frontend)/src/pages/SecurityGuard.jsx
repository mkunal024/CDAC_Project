import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/admin.css"
import News from './News'
import Event from './Event'

const SecurityGuard = () => {
    return (
        <div className='admin-container'>
            <div className='news'>
                <h3><i>News</i></h3>
                <News/>
            </div>
            <div className='show-contents'>
                    <table >
                        
                        <tr>
                            <td >
                                <Link to="/securityGuard/visitor"><div className='table-div'>Visitor Entry </div></Link>
                            </td >
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

export default SecurityGuard
