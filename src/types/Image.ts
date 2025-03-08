import { Breed } from "./Breed";

export type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
};
