import { Breed } from "@/types/Breed";

export const getBreeds = async (): Promise<Breed[]> => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
