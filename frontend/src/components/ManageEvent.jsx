import React from 'react'
import { useState } from 'react';

// just trying out. incomplete code..
const ManageEvent = () => {

  const [formData, setFormData] = useState({ eventName: '', eventdates: '', eventDesc: '', eventLikes: '' });

  //dont remove this axios fn. if needed, comment it.
  const handleAddEvent = async () => {
    axios.post('/event-new', formData)
    .then((res)=>{
      console.log("Event Added successfully")
    }).catch((error)=>{
      console.log("error adding event")
    })
  }
  return (
    <div>
    Manage Events
    </div>
  )
}

export default ManageEvent