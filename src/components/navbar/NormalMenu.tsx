import { Box, Button, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { displayNormal } from './constants';

interface NormalMenuProps {
  pages: string[],
  handleCloseMobileMenu: () => void
}

export default function NormalMenu({ pages, handleCloseMobileMenu }: NormalMenuProps) {
  return (<Box sx={{ justifyContent: "center", flexGrow: 1, display: displayNormal }}>
    {pages.map((page) => (
      <Button
        key={page}
        onClick={handleCloseMobileMenu}
        color='primary'
        size='large'
        sx={{ display: 'block' }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center' }}>{page}</Typography>
      </Button>
    ))}
    <Button
      color='primary'
      size='large'
    >
      <InstagramIcon />
    </Button>
  </Box>);
}