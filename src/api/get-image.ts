import { Breed } from "@/types/Breed";

export type GetImageResult = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
};

export const getImage = async (
  id: string,
): Promise<GetImageResult | undefined> => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};
