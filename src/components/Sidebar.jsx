import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PersonPinRoundedIcon from '@mui/icons-material/PersonPinRounded';
import AllInboxRoundedIcon from '@mui/icons-material/AllInboxRounded';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Typography } from '@mui/material';

const drawerWidth = 255;

export default function SideBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            boxShadow:7,
            border:0,
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"

      >
        <Typography component="div" sx={{fontSize:"29px",fontStyle:'italic',color:"#818589",margin:"10px"}}>InvoicePlanner</Typography>
        <Divider />
        <List sx={{my:3}}>
          {/* {['Dashboard', 'Parties', 'Items', 'Sales Invoice'].map((text, index) => ( */}
            <ListItem button>
              <ListItemIcon>
                <DashboardCustomizeRoundedIcon/>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '15px'}}>Dashboard</ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <PersonPinRoundedIcon/>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '15px'}}>Parties</ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AllInboxRoundedIcon/>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '15px'}}>Items</ListItemText>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LoyaltyIcon/>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '15px'}}>Sales Invoice</ListItemText>
            </ListItem>
          {/* ))} */}
        </List>
        
        <Box flexGrow={1}></Box>
        <List>
          {/* {['FAQ', 'Help & Support'].map((text, index) => ( */}
            <ListItem button>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText  />
            </ListItem>
          {/* ))} */}
        </List>
        <Divider/>
      </Drawer>
      
    </Box>
  );
}
