import { useContext } from 'react';
import NextLink from 'next/link';
import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from "../../context/ui";

// El link hace un prefetch de la pagina
export const Navbar = () => {

  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href='/' passHref >
          <Link underline='none' color='white'>
            <Typography variant="h6">Open Jira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
