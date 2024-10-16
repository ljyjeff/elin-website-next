import * as React from 'react';
import Box from '@mui/material/Box';
import headerBanner from '@/assets/header-home.png';
import Image from 'next/image'

export default function Banner() {
  return (
    <Box sx={{
      my: '1rem',
      height: {xs: 80, sm: 135},
      position: 'relative'
    }}>
      <Image
        src={headerBanner}
        alt="Banner image"
        fill={true}
        priority={true}
        style={{objectFit:"contain"}}
      />
    </Box>
  );
}
