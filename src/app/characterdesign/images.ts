import angelDesign1 from "./assets/angel_design_1.jpg";
import angelDesign2 from "./assets/angel_design_2.jpg";
import aimShootWoof1 from "./assets/aimshootwoof_1.jpg";
import aimShootWoof2 from "./assets/aimshootwoof_2.jpg";
import aimShootWoof3 from "./assets/aimshootwoof_3.jpg";
import aimShootWoof5 from "./assets/aimshootwoof_5.jpg";
import aimShootWoof6 from "./assets/aimshootwoof_6.jpg";
import cloudBurster2 from "./assets/cloudburster_2.jpg";
import cloudBurster3 from "./assets/cloudburster_3.jpg";
import cloudBurster4 from "./assets/cloudburster_4.jpg";
import fruit2 from "./assets/fruit_2.jpg";
import mushroom1 from "./assets/mushroom.jpg";
import { AggregatedSlideImage, toAggregatedSlideImages } from "@/components/types";

export const angelDesign = [
  { src: angelDesign1, title: "The True Angel Character Design 1", width: 9350, height: 3000 },
  { src: angelDesign2, title: "The True Angel Character Design 2", width: 9352, height: 3000 },
]


export const aimShootWoofHeader = [
  { src: aimShootWoof3, title: "Aim Shoot Woof 3", width: 1920, height: 1080 },
]

export const aimShootWoof = [
  { src: aimShootWoof2, title: "Aim Shoot Woof 2", width: 1920, height: 1080 },
  { src: aimShootWoof5, title: "Aim Shoot Woof 5", width: 1920, height: 1080 },
  { src: aimShootWoof6, title: "Aim Shoot Woof 6", width: 1920, height: 1080 },
  { src: aimShootWoof1, title: "Aim Shoot Woof 1", width: 1920, height: 1080 },
]

export const cloudBurster = [
  { src: cloudBurster2, title: "Cloud Burster 2", width: 2345, height: 1080 },
  { src: cloudBurster4, title: "Cloud Burster 4", width: 2337, height: 1080 },
  { src: cloudBurster3, title: "Cloud Burster 3", width: 2345, height: 1080 },
]

export const fruit = [
  { src: fruit2, title: "Fruit 2", width: 13455, height: 4950 },
]

export const mushroom = [
  { src: mushroom1, title: "Mushroom", width: 2000, height: 1244 },
]

export const slidesIndex: AggregatedSlideImage[][] = toAggregatedSlideImages(
  [
    angelDesign,
    aimShootWoofHeader,
    aimShootWoof,
    cloudBurster,
    fruit,
    mushroom
  ]);

export const slides: AggregatedSlideImage[] =
  slidesIndex
    .flatMap(v => v)
    .sort((a, b) => a.index - b.index);
