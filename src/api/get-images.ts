type GetImagesResult = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export const getImages = async (): Promise<GetImagesResult[]> => {
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
