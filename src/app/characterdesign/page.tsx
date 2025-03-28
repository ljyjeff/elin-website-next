"use client"
import { Box, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { ImageConfig } from '@/components/types';
import Image from 'next/image';
import { slides, slidesIndex, angelDesign, aimShootWoof, aimShootWoofHeader, cloudBurster, fruit, mushroom } from './images';
import ElinLightbox from "@/components/lightbox/ElinLightbox";
import { useState } from "react";


export default function CharacterDesign() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <Box sx={{ marginTop: '1.5rem' }}>
        <Stack spacing={3}>

          <Typography variant='h4'>Character Designs</Typography>

          {/* True Angel */}
          <Box>
            <Typography variant='h6'>The True Angel:</Typography>
            <ImageList cols={1} gap={1}>
              {angelDesign.map((item: ImageConfig, i) => (
                <ImageListItem
                  key={i}
                  sx={{
                    width: "100%",
                    position: "relative",
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                  onClick={() => setIndex(slidesIndex[0][i].index)}
                >
                  <Image
                    fill
                    priority
                    src={item.src}
                    title={item.title}
                    alt={item.title}
                    sizes="100vw"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>


          {/* Aim Shoot Woof */}
          <Box>
            <Typography variant='h6'>Aim Shoot Woof:</Typography>
            <ImageList cols={1} gap={1}>
              {aimShootWoofHeader.map((item: ImageConfig, i) => (
                <ImageListItem
                  key={i}
                  sx={{
                    width: "100%",
                    position: "relative",
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                  onClick={() => setIndex(slidesIndex[1][i].index)}
                >
                  <Image
                    fill
                    priority
                    src={item.src}
                    title={item.title}
                    alt={item.title}
                    sizes="100vw"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            <ImageList cols={2} gap={1}>
              {aimShootWoof.map((item: ImageConfig, i) => (
                <ImageListItem
                  key={i}
                  sx={{
                    width: "100%",
                    position: "relative",
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                  onClick={() => setIndex(slidesIndex[2][i].index)}
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

          {/* Cloud Burster */}
          <Box>
            <Typography variant='h6'>Cloud Burster:</Typography>
            <ImageList cols={1} gap={1}>
              {cloudBurster.map((item: ImageConfig, i) => (
                <ImageListItem
                  key={i}
                  sx={{
                    width: "100%",
                    position: "relative",
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                  onClick={() => setIndex(slidesIndex[3][i].index)}
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

          {/* Fruit */}
          <Box>
            <Typography variant='h6'>Fruit:</Typography>
            <ImageList cols={1} gap={1}>
              {fruit.map((item: ImageConfig, i) => (
                <ImageListItem
                  key={i}
                  sx={{
                    width: "100%",
                    position: "relative",
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                  onClick={() => setIndex(slidesIndex[4][i].index)}
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

          {/* Mushroom */}
          <Box>
            <Typography variant='h6'>Mushroom:</Typography>
            <ImageList cols={1} gap={1}>
              {mushroom.map((item: ImageConfig, i) => (
                <ImageListItem
                  key={i}
                  sx={{
                    width: "80%",
                    position: "relative",
                    aspectRatio: `${item.width} / ${item.height}`,
                  }}
                  onClick={() => setIndex(slidesIndex[5][i].index)}
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
        photos={slides}
        index={index}
        onClose={() => setIndex(-1)} />
    </>
  );
}
