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

const ManageUser = () => {
  return (
    <Box>
        <Typography variant="h4" component="h2" sx={{ color : 'black', textAlign: 'left', marginLeft: '10px', marginTop: '50px' }}>
          Manage Users
        </Typography>
        <nav aria-label="All Events">
        <List sx = {{ width : 1000, backgroundColor : 'lightgray', borderRadius : '10px'}}>
            <ListItem>
            <ListItemButton>
              <ListItemText sx={{ color: 'black' }} primary="Cross Roads 2024" />
              <ListItemText sx={{ color: 'black' }} primary="21st, 22nd, 23rd, 24th August 2024" />
            </ListItemButton>
      </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText sx = {{color : 'black'}} primary="Dhwani 2024" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Film Festival" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 4" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 5" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 6" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 7" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 8" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 9" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 10" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 11" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 12" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 13" />
                </ListItemButton>
              </ListItem>
              <ListItem Padding sx = {{borderTop : '1px dotted gray'}}>
                <ListItemButton >
                  <ListItemText sx = {{color : 'black'}} primary="Event 14" />
                </ListItemButton>
              </ListItem>
            </List>
      </nav>
      </Box>
  )
}

export default ManageUser