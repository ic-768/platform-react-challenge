import { Image } from "@/types/Image";

export const getImages = async (): Promise<Image[]> => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10",
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
