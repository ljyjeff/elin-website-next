"use client";
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import NormalMenu from './NormalMenu';
import Banner from "@/components/Banner";
import { PageConfig } from './pageConfig';
import { LinkedinButton, InstagramButton } from './IconButtons';
import { displayBlockNormal } from './constants';

const pages: PageConfig[] = [
  { name: "Illustration", link: '/illustration' },
  { name: "Children's Book", link: '/childrensbook' },
  { name: "Game", link: '/game' }
];

export default function NavigationBar() {
  const [anchorMobNav, setAnchorMobNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMobNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorMobNav(null);
  };

  return (
    <AppBar color="transparent" position='static' elevation={3} sx={{ paddingTop: '0.5rem' }}>
      <Banner />

      <Container maxWidth='xl' sx={{ position: 'absolute', top: '1rem', display: displayBlockNormal }}>
        <Box sx={{ float: 'right' }}>
          <LinkedinButton handleCloseNavMenu={handleCloseNavMenu} />
          <InstagramButton handleCloseNavMenu={handleCloseNavMenu} />
        </Box>
      </Container>

      <Toolbar disableGutters sx={{ marginBottom: { xs: 0, md: '1rem' }, px: { xs: '0.5rem', md: 0 } }}>
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

