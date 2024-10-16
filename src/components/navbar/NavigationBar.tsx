"use client";
import { AppBar, Toolbar } from '@mui/material';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import NormalMenu from './NormalMenu';
import Banner from "@/components/Banner";

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
    <AppBar color="transparent" position='static' elevation={3}>
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

