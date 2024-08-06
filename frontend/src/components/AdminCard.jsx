import React from 'react';
import AdminCardComponent from './AdminCardComponent';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    title: "Manage Events",
    content: "Add, delete or update existing event",
    path: '/admin-dashboard/manage-events',
    image: 'https://wallpapers.com/images/high/concert-pictures-5z3x0i4mviwnr5lx.webp', 
  },
  {
    title: "Manage Users",
    content: "Delete or block user. Control signed in users",
    path: '/admin-dashboard/manage-users',
    image: 'https://wallpapers.com/images/high/concert-pictures-1500-x-1000-kiav08x9k7qtv13g.webp', 
  },
  {
    title: "View Registrations",
    content: "See who registered in which event",
    path: '/admin-dashboard/view-registrations',
    image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P4b_720x475?$pjpeg$&jpegSize=200&wid=720', 
  },
  {
    title: "All Events",
    content: "View all events listed on the website",
    path: '/admin-dashboard/all-events',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  },
];

function AdminCard() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <Grid container spacing={6} style={{ marginTop: '82px', marginLeft: '290px', marginRight: 'px' }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={5} key={index}>
          <AdminCardComponent
            title={card.title}
            content={card.content}
            onClick={() => handleCardClick(card.path)}
            image={card.image}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default AdminCard;
