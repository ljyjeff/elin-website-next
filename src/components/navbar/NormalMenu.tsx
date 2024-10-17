import { Box, Button, Typography } from "@mui/material";
import { displayNormal } from './constants';
import { PageConfig } from './pageConfig';

interface NormalMenuProps {
  pages: PageConfig[],
  handleCloseMobileMenu: () => void
}

export default function NormalMenu({ pages, handleCloseMobileMenu }: NormalMenuProps) {
  return (
    <Box sx={{ justifyContent: "center", flexGrow: 1, display: displayNormal }}>
      {pages.map((page) => (
        <Button
          key={page.name}
          href={page.link}
          onClick={handleCloseMobileMenu}
          color='primary'
          variant="outlined"
          size='large'
          sx={{ display: 'block', mx: '1rem', borderRadius: 50 }}
        >
          <Typography variant="h5" sx={{ textAlign: 'center' }}>{page.name}</Typography>
        </Button>
      ))}
    </Box>
  );
}