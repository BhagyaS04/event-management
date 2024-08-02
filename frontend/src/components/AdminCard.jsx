import React from 'react';
import AdminCardComponent from './AdminCardComponent';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    title: "Manage Events",
    content: "Add, delete or update existing event",
    path: '/admin-dashboard/manage-events',
    image: 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/concert-photography/thumbnail.jpeg', // Update with actual image path
  },
  {
    title: "Manage Users",
    content: "Delete or block user. Control signed in users",
    path: '/admin-dashboard/manage-users',
    image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P4a_720x480?$pjpeg$&jpegSize=200&wid=720', // Update with actual image path
  },
  {
    title: "View Registrations",
    content: "See who registered in which event",
    path: '/admin-dashboard/view-registrations',
    image: 'https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P4b_720x475?$pjpeg$&jpegSize=200&wid=720', // Update with actual image path
  },
  {
    title: "All Events",
    content: "View all events listed on the website",
    path: '/admin-dashboard/all-events',
    image: 'https://media.istockphoto.com/id/1330424071/photo/large-group-of-people-at-a-concert-party.jpg?s=612x612&w=0&k=20&c=LwdiOCBqbfICjQ3j5AzwyugxmfkbyfL3StKEQhtx4hE=', // Update with actual image path
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
