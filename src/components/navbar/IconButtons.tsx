import { IconButton } from "@mui/material";
import { Instagram, LinkedIn } from '@mui/icons-material';

export const LinkedinButton = ({ handleCloseNavMenu }: { handleCloseNavMenu: () => void }) =>
  <IconButton
    target="_blank"
    href='https://www.linkedin.com/in/elinhua/'
    component="a"
    color='primary'
    sx={{ px: 1 }}
    onClick={handleCloseNavMenu}
  >
    <LinkedIn fontSize="large" />
  </IconButton>;

export const InstagramButton = ({ handleCloseNavMenu }: { handleCloseNavMenu: () => void }) =>
  <IconButton
    target="_blank"
    href='https://www.instagram.com/elinhua_art/'
    component="a"
    color='primary'
    sx={{ px: 1 }}
    onClick={handleCloseNavMenu}
  >
    <Instagram sx={{ fontSize: 34 }} />
  </IconButton>;

