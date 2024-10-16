import { Box, Button, Typography } from "@mui/material";
import { displayNormal } from './constants';

interface NormalMenuProps {
  pages: string[],
  handleCloseMobileMenu: () => void
}

export default function NormalMenu({ pages, handleCloseMobileMenu }: NormalMenuProps) {
  return (
    <Box sx={{ justifyContent: "center", flexGrow: 1, display: displayNormal }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseMobileMenu}
          color='primary'
          variant="outlined"
          size='large'
          sx={{ display: 'block', mx: '1rem', borderRadius: 50 }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center' }}>{page}</Typography>
        </Button>
      ))}
    </Box>
  );
}