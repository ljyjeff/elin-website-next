"use client";
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import NormalMenu from './NormalMenu';
import Banner from "@/components/Banner";
import {Instagram, LinkedIn} from '@mui/icons-material';

const pages = ["Illustration", "Children's Book", "Game"];


export default function NavigationBar() {
  const [anchorMobNav, setAnchorMobNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMobNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorMobNav(null);
  };

  return (
    <AppBar color="transparent" position='static' elevation={3} sx={{paddingTop: '0.5rem'}}>
      <Container maxWidth='xl' sx={{ position: 'absolute', top: '1rem'}}>
        <Box sx={{ float: 'right' }}>
          <IconButton
            color='primary'
            size='large'
            sx={{ px: 1}}
            onClick={handleCloseNavMenu}
          >
            <LinkedIn fontSize='large' />
          </IconButton>
          <IconButton
            color='primary'
            size='large'
            sx={{ px: 1}}
            onClick={handleCloseNavMenu}
          >
            <Instagram fontSize='large' />
          </IconButton>
        </Box>
      </Container>
      <Banner />
      <Toolbar disableGutters sx={{ marginBottom: '1rem' }}>
        <MobileMenu
          pages={pages}
          anchorElNav={anchorMobNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu} />

        <NormalMenu
          pages={pages}
          handleCloseMobileMenu={handleCloseNavMenu} />
      </Toolbar>

    </AppBar>
  )
}

