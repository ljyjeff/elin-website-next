"use client"
import { Box, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { Masonry } from '@mui/lab';
import { illustrationSlides, illustrations } from './images';
import { ImageConfig } from '@/components/types';
import { useState } from 'react';
import ElinLightbox from '@/components/lightbox/ElinLightbox';

export default function Illustration() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Box sx={{
        marginTop: '2rem',
        marginLeft: { xs: 1, sm: 1, md: 2 } // added to offset Masonry spacing
      }}>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 1, md: 2 }}>
          {illustrations.map((item: ImageConfig, i) => (
            <ImageListItem
              key={i}
              sx={{
                width: "100%",
                position: "relative",
                aspectRatio: `${item.width} / ${item.height}`,

              }}
              onClick={() => setIndex(i)}
            >
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

      <ElinLightbox
        photos={illustrationSlides}
        index={index}
        onClose={() => setIndex(-1)} />
    </>
  );
}
