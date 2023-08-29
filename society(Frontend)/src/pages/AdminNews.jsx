import React from 'react'
import "../Styles/admin.css"
import { Link } from 'react-router-dom'
const AdminNews = () => {
    

    return (
        
     <>
            <div className='admin-contents'>
                <table >
                    <tr>
                        <td >
                            <Link to="/news"><div className='table-div-user'>News </div></Link>
                        </td>
                        <td >
                            <Link to="/event"><div className='table-div-visitor'>Event </div></Link>
                        </td>
                    </tr>    
                </table>
            </div>
        
        </>
    )
}

export default AdminNews
