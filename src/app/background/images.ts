
import grocerystore from "./assets/grocerystore.jpg";
import bedroom from "./assets/bedroom.jpg";
import { AggregatedSlideImage, toAggregatedSlideImages } from "@/components/types";

export const backgrounds = [
  { src: grocerystore, title: "Grocery Store", width: 3500, height: 2500 },
  { src: bedroom, title: "Bedroom", width: 3500, height: 2500 },
]

export const SlidesIndex: AggregatedSlideImage[][] = toAggregatedSlideImages(
  [
    backgrounds,
  ]);

export const Slides: AggregatedSlideImage[] =
  SlidesIndex
    .flatMap(v => v)
    .sort((a, b) => a.index - b.index);
