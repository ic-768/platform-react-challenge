export default function NoBreedContent({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="size-full rounded-lg">
      <img className="max-h-[40rem]" src={imageUrl} alt="cat image" />
    </div>
  );
}
