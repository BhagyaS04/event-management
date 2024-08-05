import React from 'react'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout'
import AllEventsAdmin from './components/AllEventsAdmin'
import ManageEvent from './components/ManageEvent'
import ManageUser from './components/ManageUser'
import ViewRegistrations from './components/ViewRegistrations'
import Login from './components/Login'
import Signup from './components/Signup'
import MainLayout from './components/Mainlayout'
import Home from './components/Home'
import UpcomingEvent from './components/UpcomingEvent'
import UserHome from './components/UserHome';

import {AnimatePresence} from 'framer-motion'
import UserProfile from './components/UserProfile';
import RegisterPage from './components/RegisterPage';

const AnimatedRoutes = () => {
    const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation ();
  return (
    <AnimatePresence>
      <Routes location = {location} key = {location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login setAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path ='/user-dashboard' element = {<UserHome />} />
        <Route path = '/user-edit-profile' element = {<UserProfile/>} />
        <Route path = '/user-dashboard/register-page' element = {<RegisterPage/>}/>
        <Route path="/admin-dashboard" element={<MainLayout><Layout /></MainLayout>} />
        <Route path="/admin-dashboard/all-events" element={<MainLayout><AllEventsAdmin /></MainLayout>} />
        <Route path="/admin-dashboard/manage-events" element={<MainLayout><ManageEvent /></MainLayout>} />
        <Route path="/admin-dashboard/manage-users" element={<MainLayout><ManageUser /></MainLayout>} />
        <Route path="/admin-dashboard/view-registrations" element={<MainLayout><ViewRegistrations /></MainLayout>} />
      </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes