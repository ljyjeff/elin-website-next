import { ImageConfig, toSlideImages } from '@/components/types';
import sheeleepy from './assets/sheeleepy.jpg';
import springRain from './assets/spring_rain.jpg';
import listenToSummer from './assets/listen_to_summer.jpg';
import redAndAkGrandma from './assets/red_and_ak_grandma.jpg';
import afterSchool from './assets/afterschool.jpg';
import rabbitInRabbit from './assets/rabbit_in_rabbit.jpg';
import drunkRat from './assets/drunk_rat.jpg';
import greenwardCatnata from './assets/greenward_catnata.jpg';
import selfPortrait from './assets/self_portrait.jpg';
import soundOfAutumn from './assets/sound_of_autumn.jpg';
import { SlideImage } from 'yet-another-react-lightbox';

export const illustrations: ImageConfig[] = [
  { src: sheeleepy, title: "Sheeleepy", width: 4050, height: 6000 },
  { src: springRain, title: "Spring Rain", width: 2800, height: 4000 },
  { src: listenToSummer, title: "Listening to Summer", width: 1800, height: 1800 },
  { src: redAndAkGrandma, title: "Little Red Riding Hood and Her AK47 Grandma", width: 2244, height: 1452 },
  { src: afterSchool, title: "After School", width: 1392, height: 1051 },
  { src: rabbitInRabbit, title: "Rabbit In Rabbit", width: 1452, height: 2244 },
  { src: drunkRat, title: "Drunk Rat and Frozen Snake", width: 1024, height: 768 },
  { src: greenwardCatnata, title: "Greenward Catnata", width: 858, height: 1254 },
  { src: selfPortrait, title: "Self Portrait 2022", width: 1452, height: 2244 },
  { src: soundOfAutumn, title: "Sound of Autumn", width: 2048, height: 2048 },
];

export const illustrationSlides: SlideImage[] = toSlideImages(illustrations);
