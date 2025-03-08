import { Image } from "@/types/Image";

export const getImage = async (id: string): Promise<Image | undefined> => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};
