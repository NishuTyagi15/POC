import * as React from 'react';
import './Settings.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Settings from '@mui/icons-material/Settings';
import SettingsApplications from '@mui/icons-material/SettingsApplications';
import DisplaySettings from '@mui/icons-material/DisplaySettings';
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNew';
import AdminPanelSettingsOutlined from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsBrightnessRounded from '@mui/icons-material/SettingsBrightnessRounded';
import SettingsBluetooth from '@mui/icons-material/SettingsBluetooth';

const drawerWidth = 180;

export default function PermanentDrawerRight() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <h2>Settings Panel</h2>
        <Divider />
        <List>
          {['Settings', 'Apps Settings', 'Display Settings', 'Power Settings'].map((text, index) => (
            <ListItem button key={text}>
                  <ListItemIcon>
                      {index <= 0 ? <Settings /> : <InboxIcon /> && index <= 1 ? <SettingsApplications /> : <InboxIcon />
                          && index <= 2 ? <DisplaySettings /> : <InboxIcon />
                              && index <= 3 ? <PowerSettingsNew /> : <InboxIcon />}
                  </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Admin Settings', 'Brightness', 'Bluetooth Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index <= 0 ? <AdminPanelSettingsOutlined /> : <InboxIcon /> && index <= 1 ? <SettingsBrightnessRounded /> : <InboxIcon />
                  && index <= 2 ? <SettingsBluetooth /> : <InboxIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}