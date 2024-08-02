// import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import { Typography } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BlockIcon from '@mui/icons-material/Block';
// import IconButton from '@mui/material/IconButton';

// const ManageUser = () => {
//   return (
//     <Box>
//         <Typography variant="h4" component="h2" sx={{ color : 'black', textAlign: 'left', marginLeft: '10px', marginTop: '50px' }}>
//           Manage Users
//         </Typography>
//         <nav aria-label="All Events">
//         <List sx={{ width: 1000, backgroundColor: 'lightgray', borderRadius: '10px' }}>
//   <ListItem>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 1" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton component="a" href="#simple-list">
//       <ListItemText sx={{ color: 'black' }} primary="User 2" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 3" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 4" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 5" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 6" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 7" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 8" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 9" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 10" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 11" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 12" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 13" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
//   <ListItem sx={{ borderTop: '1px dotted gray' }}>
//     <ListItemButton>
//       <ListItemText sx={{ color: 'black' }} primary="User 14" />
//     </ListItemButton>
//     <IconButton edge="end" aria-label="delete">
//       <DeleteIcon />
//     </IconButton>
//     <IconButton edge="end" aria-label="block">
//       <BlockIcon />
//     </IconButton>
//   </ListItem>
// </List>
//       </nav>
//       </Box>
//   )
// }

// export default ManageUser

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import UnblockIcon from '@mui/icons-material/LockOpen';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from 'axios';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/users');
      setUsers(response.data);
    } catch (error) {
      alert('Error fetching users. Please try again later.');
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/users/${selectedUserId}`);
      setUsers(users.filter(user => user._id !== selectedUserId));
      setDialogOpen(false);
    } catch (error) {
      alert('Error deleting user. Please try again later.');
      console.error('Error deleting user:', error);
    }
  };

  const openDialog = (userId) => {
    setSelectedUserId(userId);
    setDialogOpen(true);
  };

  const handleBlock = async (userId) => {
    try {
      setUsers(users.map(user => user._id === userId ? { ...user, blocked: true } : user)); // Optimistic update
      await axios.patch(`http://localhost:4000/users/${userId}/block`);
    } catch (error) {
      alert('Error blocking user. Please try again later.');
      console.error('Error blocking user:', error);
      fetchUsers(); // Re-fetch users to correct optimistic UI update
    }
  };

  const handleUnblock = async (userId) => {
    try {
      setUsers(users.map(user => user._id === userId ? { ...user, blocked: false } : user)); // Optimistic update
      await axios.patch(`http://localhost:4000/users/${userId}/unblock`);
    } catch (error) {
      alert('Error unblocking user. Please try again later.');
      console.error('Error unblocking user:', error);
      fetchUsers(); // Re-fetch users to correct optimistic UI update
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{ color: 'black', textAlign: 'left', marginLeft: '10px', marginTop: '50px' }}
      >
        Manage Users
      </Typography>
      <nav aria-label="All Users">
        <List sx={{ width: 1000, backgroundColor: 'lightgray', borderRadius: '10px' }}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
              <CircularProgress />
            </Box>
          ) : (
            users.map((user) => (
              <ListItem key={user._id} sx={{ borderTop: '1px dotted gray' }}>
                <ListItemButton>
                  <ListItemText
                    sx={{ color: 'black' }}
                    primary={user.email}
                    secondary={`Status: ${user.blocked ? 'Blocked' : 'Active'}`}
                  />
                </ListItemButton>
                <IconButton edge="end" aria-label="delete" onClick={() => openDialog(user._id)}>
                  <DeleteIcon />
                </IconButton>
                {user.blocked ? (
                  <IconButton edge="end" aria-label="unblock" onClick={() => handleUnblock(user._id)}>
                    <UnblockIcon />
                  </IconButton>
                ) : (
                  <IconButton edge="end" aria-label="block" onClick={() => handleBlock(user._id)}>
                    <BlockIcon />
                  </IconButton>
                )}
              </ListItem>
            ))
          )}
        </List>
      </nav>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete User"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageUser;
