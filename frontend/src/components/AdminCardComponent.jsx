// CardComponent.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function AdminCardComponent({ title, content, onClick }) {
  return (
    <Card sx={{ width: 400, height : 300, backgroundColor : '#f8f0ee' }}>
      <CardActionArea onClick= {onClick} sx = {{height : '100%'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AdminCardComponent;
