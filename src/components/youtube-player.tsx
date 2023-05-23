export default function YouTubePlayer({ id }: { id: string }) {
  return (
    <div className="aspect-video rounded-xl">
      <iframe
        className="w-full h-full border-none rounded-xl"
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media; fullscreen;"
        title="Embedded YouTube video"
      />
    </div>
  );
}
