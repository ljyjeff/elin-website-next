"use client"
import { Box, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { ImageConfig } from '@/components/types';
import Image from 'next/image';
import { backgrounds, Slides, SlidesIndex } from './images';
import ElinLightbox from "@/components/lightbox/ElinLightbox";
import { useState } from "react";


export default function ChildrensBook() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Box sx={{ marginTop: '1.5rem' }}>
        <Stack spacing={3}>

          <Typography variant='h4'>Background Art</Typography>

          <Box>
            <ImageList cols={1} gap={10}>
              {backgrounds.map((item: ImageConfig, i) => (
                <ImageListItem
                  key={i}
                  sx={{
                    width: "100%",
                    position: "relative",
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                  onClick={() => setIndex(SlidesIndex[0][i].index)}
                >
                  <Image
                    fill
                    priority
                    src={item.src}
                    title={item.title}
                    alt={item.title}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Stack>
      </Box>

      <ElinLightbox
        photos={Slides}
        index={index}
        onClose={() => setIndex(-1)} />
    </>
  );
}
