import React from 'react';
import AdminCardComponent from './AdminCardComponent';
import { Face, Add, Upgrade, Delete, Logout } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';


function AdminCard() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
        <Grid container spacing={5} style = {{ marginTop : '20px', marginLeft : '-30px'}}>
            <Grid item xs={12} sm={6} md={4} lg={5}>
                <AdminCardComponent
                  title="Manage Events"
                  content="Add, delete or update existing event"
                  onClick={() => handleCardClick('/admin-dashboard/manage-events')}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AdminCardComponent
                  title="Manage Users"
                  content="Delete or block user. Control signed in users"
                  onClick={() => handleCardClick('/admin-dashboard/manage-users')}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={5}>
                <AdminCardComponent
                  title="View registrations"
                  content="See who registered in which event"
                  onClick={() => handleCardClick('/admin-dashboard/view-registrations')}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={5}>
                <AdminCardComponent
                  title="All events"
                  content="View all events listed in the website"
                  onClick={() => handleCardClick('/admin-dashboard/all-events')}
                />
            </Grid>
        </Grid>
  );
}

export default AdminCard;
