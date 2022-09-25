import { useContext } from "react";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { UIContext } from '../../context/ui/UIContext';

const menuItens: string[] = ['Dashboard', 'Projects', 'Issues', 'Users']

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext(UIContext)
  
  return (
    <Drawer
      anchor="left"
      open={sidemenuOpen}
      onClose={closeSideMenu}
    >
      <Box sx={{width: 250}}>
        <Box sx={{padding: '5px 10px'}}>
          <Typography>Menu</Typography>
        </Box>
        <List>
          {
            menuItens.map((texto, index) => (
              <ListItem button key={texto}>
                <ListItemIcon>
                  {index % 2 ? <EmailOutlinedIcon /> : <ArchiveOutlinedIcon /> }
                </ListItemIcon>
                <ListItemText primary={texto} />
              </ListItem>
            ))
          }
        </List>
        <Divider />
        <List>
          {
            menuItens.map((texto, index) => (
              <ListItem button key={texto}>
                <ListItemIcon>
                  {index % 2 ? <EmailOutlinedIcon /> : <ArchiveOutlinedIcon /> }
                </ListItemIcon>
                <ListItemText primary={texto} />
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  )
}
