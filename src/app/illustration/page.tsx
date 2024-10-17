"use client";

import { Box, ImageListItem } from '@mui/material';
import Image from 'next/image';
import { Masonry } from '@mui/lab';

const photos = [
  { src: "sheeleepy.jpg", title: "Sheeleepy", width: 4050, height: 6000 },
  { src: "spring_rain.jpg", title: "Spring Rain", width: 2800, height: 4000 },
  { src: "listen_to_summer.jpg", title: "Listening to Summer", width: 1800, height: 1800 },
  { src: "red_and_ak_grandma.jpg", title: "Little Red Riding Hood and Her AK47 Grandma", width: 2244, height: 1452 },
  { src: "afterschool.jpg", title: "After School", width: 1392, height: 1051 },
  { src: "rabbit_in_rabbit.jpg", title: "Rabbit In Rabbit", width: 1452, height: 2244 },
  { src: "drunk_rat.jpg", title: "Drunk Rat and Frozen Snake", width: 1024, height: 768 },
  { src: "greenward_catnata.jpg", title: "Greenward Catnata", width: 858, height: 1254 },
  { src: "self_portrait.jpg", title: "Self Portrait 2022", width: 1452, height: 2244 },
  { src: "sound_of_autumn.jpg", title: "Sound of Autumn", width: 2048, height: 2048 },
];

const itemData = photos.map((photo) => {
  return {
    /* eslint-disable */
    img: require(`${"./assets/" + photo.src}`),
    title: photo.title,
    width: photo.width,
    height: photo.height,
  };
});

export default function Illustration() {
  return (
    <Box sx={{ marginTop: '2rem', marginLeft: { xs: 1, sm: 1, md: 2 } }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 1, md: 2 }}>
        {itemData.map((item, i) => (
          <ImageListItem key={i} sx={{
            width: "100%",
            position: "relative",
            aspectRatio: `${item.width} / ${item.height}`,
          }}>
            <Image
              fill
              priority
              src={item.img}
              title={item.title}
              alt={item.title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImageListItem>
        ))}
      </Masonry>
    </Box>
  );
}
