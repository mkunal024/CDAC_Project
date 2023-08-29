import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Admin from '../pages/Admin'
import SecurityGuard from '../pages/SecurityGuard'
import Visitor from '../pages/Visitor'
import User from '../pages/User'
import Booking from '../pages/Booking'
import Facility from '../pages/Facility'
import Show from '../pages/Show'
import FacilityOwner from '../pages/FacilityOwner'
import BookingOwner from '../pages/BookingOwner'
import SecurityGuardVisitor from '../pages/SecurityGuardVisitor'
import AdminNews from '../pages/AdminNews'
import NewsAdmin from '../pages/NewsAdmin'
import EventAdmin from '../pages/EventAdmin'

const router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path="/login" element={<Login />} />
      <Route path='/show' element={<Show/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/security' element={<SecurityGuard/>} />
      <Route path='/visitor' element={<Visitor/>} />
      <Route path='/add/user' element={<User/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/facility' element={<Facility/>} />
      <Route path='/facilityOwner' element={<FacilityOwner/>} />
      <Route path='/bookingOwner' element={<BookingOwner/>} />
      <Route path='/securityGuard/visitor' element={<SecurityGuardVisitor/>} />
      <Route path='/admin/news' element={<AdminNews/>} />
      <Route path='/news' element={<NewsAdmin/>} />
      <Route path='/event' element={<EventAdmin/>} />
    </Routes>
  )
}

export default router
