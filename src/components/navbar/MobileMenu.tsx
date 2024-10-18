import { Box, Drawer, IconButton, List, ListItem, ListItemButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { displayMobile, displayBlockMobile } from './constants';
import { PageConfig } from './pageConfig';
import { LinkedinButton, InstagramButton } from './IconButtons';

interface MobileMenuProps {
  currentPath: string,
  pages: PageConfig[],
  anchorElNav: HTMLElement | null,
  handleOpenNavMenu: (_: React.MouseEvent<HTMLElement>) => void,
  handleCloseNavMenu: () => void
}

export default function MobileMenu({
  currentPath,
  pages,
  anchorElNav,
  handleCloseNavMenu,
  handleOpenNavMenu
}: MobileMenuProps) {
  return (<>
    <Box sx={{ flexGrow: 1, display: displayMobile }}>
      <IconButton
        onClick={handleOpenNavMenu}
        color="primary"
      >
        <MenuIcon sx={{ fontSize: 34 }} />
      </IconButton>
      <Drawer
        keepMounted
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: displayBlockMobile }}
      >
        <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseNavMenu}>
          <List>
            {pages.map((page) => (
              <ListItem
                key={page.name}
                disablePadding
              >
                <ListItemButton
                  href={page.link}
                  selected={page.link === currentPath}
                >
                  <Typography>{page.name}</Typography>
                </ListItemButton>
              </ListItem>
            ))}

          </List>
        </Box>
      </Drawer>

    </Box>
    <Box sx={{ flexGrow: 0, display: displayMobile }}>
      <LinkedinButton handleCloseNavMenu={handleCloseNavMenu} />
      <InstagramButton handleCloseNavMenu={handleCloseNavMenu} />
    </Box>
  </>);
}