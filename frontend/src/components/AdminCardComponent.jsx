import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function AdminCardComponent({ title, content, onClick, image }) {
  return (
    <Card
      onClick={onClick}
      style={{
        backgroundColor:"black",
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        color:"Highlight",
        borderRadius:"20px"
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        image={image}
        title={title}
        style={{
          height: 200,
          width: '100%',
          objectFit: 'cover',
          flexGrow: 1,
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AdminCardComponent;
