import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import AllEventsAdmin from './components/AllEventsAdmin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageEvent from './components/ManageEvent'
import ManageUser from './components/ManageUser'
import ViewRegistrations from './components/ViewRegistrations'
import Login from './components/Login'
import Signup from './components/Signup'
import MainLayout from './components/Mainlayout'

function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login setAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<MainLayout><Layout /></MainLayout>} />
        <Route path="/dashboard/all-events" element={<MainLayout><AllEventsAdmin /></MainLayout>} />
        <Route path="/dashboard/manage-events" element={<MainLayout><ManageEvent /></MainLayout>} />
        <Route path="/dashboard/manage-users" element={<MainLayout><ManageUser /></MainLayout>} />
        <Route path="/dashboard/view-registrations" element={<MainLayout><ViewRegistrations /></MainLayout>} />
      </Routes>
    </Router>
  )
}

export default App
