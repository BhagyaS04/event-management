import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import IconButton from '@mui/material/IconButton';

const ManageUser = () => {
  return (
    <Box>
        <Typography variant="h4" component="h2" sx={{ color : 'black', textAlign: 'left', marginLeft: '10px', marginTop: '50px' }}>
          Manage Users
        </Typography>
        <nav aria-label="All Events">
        <List sx={{ width: 1000, backgroundColor: 'lightgray', borderRadius: '10px' }}>
  <ListItem>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 1" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton component="a" href="#simple-list">
      <ListItemText sx={{ color: 'black' }} primary="User 2" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 3" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 4" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 5" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 6" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 7" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 8" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 9" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 10" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 11" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 12" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 13" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
  <ListItem sx={{ borderTop: '1px dotted gray' }}>
    <ListItemButton>
      <ListItemText sx={{ color: 'black' }} primary="User 14" />
    </ListItemButton>
    <IconButton edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton edge="end" aria-label="block">
      <BlockIcon />
    </IconButton>
  </ListItem>
</List>
      </nav>
      </Box>
  )
}

export default ManageUser