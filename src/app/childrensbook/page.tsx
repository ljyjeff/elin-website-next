import { Box, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { ImageConfig } from '@/components/types';
import Image from 'next/image';
import { angel, angelDesign, angelHeader } from './images';


export default function ChildrensBook() {
  return (
    <Box sx={{ marginTop: '1.5rem' }}>
      <Stack spacing={3}>

        <Typography variant='h4'>The True Angel</Typography>

        <Box>
          <Typography variant='h6'>Character Model Sheet:</Typography>
          <ImageList cols={1} gap={1}>
            {angelDesign.map((item: ImageConfig, i) => (
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
                  sizes="100vw"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box>
          <Typography variant='h6'>Cover:</Typography>
          <ImageList cols={1}>
            {angelHeader.map((item: ImageConfig, i) => (
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
                  sizes="100vw"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box>
          <Typography variant='h6'>Story:</Typography>
          <ImageList cols={2} gap={1}>
            {angel.map((item: ImageConfig, i) => (
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
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </Box>
  );
}
