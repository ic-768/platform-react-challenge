import { Image } from "@/types/Image";

export const getBreedImages = async (
  breedId: string,
): Promise<Image[] | undefined> => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};
