"use client";

import { Box, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { Masonry } from '@mui/lab';
import { photos, Photo } from './photos';

export default function Illustration() {
  return (
    <Box sx={{ marginTop: '2rem', marginLeft: { xs: 1, sm: 1, md: 2 } }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 1, md: 2 }}>
        {photos.map((item: Photo, i) => (
          <ImageListItem key={i} sx={{
            width: "100%",
            position: "relative",
            aspectRatio: `${item.width} / ${item.height}`,
          }}>
            <Image
              fill
              priority
              src={item.src}
              title={item.title}
              alt={item.title}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
          </ImageListItem>
        ))}
      </Masonry>
    </Box>
  );
}
