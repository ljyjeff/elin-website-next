import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { displayMobile, displayBlockMobile } from './constants';
import { PageConfig } from './pageConfig';
import { LinkedinButton, InstagramButton } from './IconButtons';

interface MobileMenuProps {
  pages: PageConfig[],
  anchorElNav: HTMLElement | null,
  handleOpenNavMenu: (_: React.MouseEvent<HTMLElement>) => void,
  handleCloseNavMenu: () => void
}

export default function MobileMenu({ pages, anchorElNav, handleCloseNavMenu, handleOpenNavMenu }: MobileMenuProps) {
  return (<>
    <Box sx={{ flexGrow: 1, display: displayMobile }}>
      <IconButton
        onClick={handleOpenNavMenu}
        color="primary"
      >
        <MenuIcon sx={{ fontSize: 34 }} />
      </IconButton>
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
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
    <Box sx={{ flexGrow: 0, display: displayMobile }}>
      <LinkedinButton handleCloseNavMenu={handleCloseNavMenu} />
      <InstagramButton handleCloseNavMenu={handleCloseNavMenu} />
    </Box>
  </>);
}