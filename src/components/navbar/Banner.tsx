import * as React from 'react';
import Box from '@mui/material/Box';
import headerBanner from './assets/header-home.png';
import Image from 'next/image'

export default function Banner() {
  return (
    <Box sx={{
      my: '1rem',
      height: { xs: 80, sm: 135 },
      position: 'relative'
    }}>
      <Image
        src={headerBanner}
        alt="Banner image"
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 75vw, 40vw"
        priority
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
}
