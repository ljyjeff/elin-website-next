import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import { displayMobile, displayBlockMobile } from './constants';

interface MobileMenuProps {
  pages: string[],
  anchorElNav: HTMLElement | null,
  handleOpenNavMenu: (_: React.MouseEvent<HTMLElement>) => void,
  handleCloseNavMenu: () => void
}

export default function MobileMenu({ pages, anchorElNav, handleCloseNavMenu, handleOpenNavMenu }: MobileMenuProps) {
  return (<>
    <Box sx={{ flexGrow: 1, display: displayMobile }}>
      <Button
        size="large"
        onClick={handleOpenNavMenu}
        color="primary"
      >
        <MenuIcon />
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: displayBlockMobile }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
    <Box sx={{ flexGrow: 0, display: displayMobile }}>
      <Button
        color='primary'
        size='large'
        onClick={handleCloseNavMenu}
      >
        <InstagramIcon />
      </Button>
    </Box>
  </>);
}