import ReactPlayer from "react-player";

interface TrailerProps {
  videoUrl: string;
}

export default function ProductTrailer({ videoUrl }: TrailerProps) {
  return (
    <section className="w-full bg-gray-100 py-8 px-4" id="trailer">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Course Trailer</h2>
        <div className="aspect-w-16 aspect-h-9">
          <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
        </div>
      </div>
    </section>
  );
}
