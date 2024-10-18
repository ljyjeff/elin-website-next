"use client"
import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";


export default function Grwm() {
  return (
    <Box sx={{ marginTop: '1.5rem' }}>
      <Stack spacing={3}>
        <Typography variant='h4'>GRWM: Walking My Cat</Typography>

        <Container>
          <CardMedia
            sx={{
              border: 0,
              borderRadius: 2,
              aspectRatio: "16/9",
            }}
            component="iframe"
            src="https://www.youtube.com/embed/ebGY07W2s2k?si=pVryGmjy0U266Tk6&vq=hd1080"
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
        </Container>

        <Box>
          <Typography variant='h6' sx={{ textDecoration: 'underline' }}>Instructions</Typography>
          <Stack spacing={1}>
            <Typography variant='body1'>{"- Left click slowly to walk, quickly to run"}</Typography>
            <Typography variant='body1'>{"- Don't let the cat get too far away or your smol hands will drop the leash"}</Typography>
            <Typography variant='body1'>{"- Don't run past the cat or you'll trip"}</Typography>
          </Stack>
        </Box>

        <Box>
          <Typography variant='h6' sx={{ textDecoration: 'underline' }}>About</Typography>
          <Stack spacing={2}>
            <Typography variant='body1'>{
              'GRWM: Walking My Cat is a 2D scrolling game with a theme on helping a little girl walk her cat. During the game, you will see some obstacles which will attract cat’s attention. What you should do is follow the cat’s speed by left clicking the mouse, make sure to not run past the cat, and not let the cat get too far away.'
            }</Typography>
            <Typography variant='body1'>{
              'At the end of the game there is a portrait of my cat Mayo, which is also the inspiration for the cat in the game. I often walk him at the park near where I live, and he would always get distracted by animals, people, and flowers that he passes by. We often see people in the park walking their dogs, but we rarely see someone walking their cat. Every time someone sees Mayo passing by, they would call Mayo cute or clean. Because so many people like Mayo, and I love him, I thought to create this little game. When I walk Mayo, he would randomly start running when he’s excited, and lay down when he doesn’t want to walk anymore. All the overwhelming actions of the cat in the game are real behaviours of Mayo when he walks. So, please don’t get frustrated!'
            }</Typography>
            <Typography variant='body1'>{
              'Enjoy the game and good luck!'
            }</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>);
}
