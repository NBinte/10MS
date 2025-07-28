"use client";

import ReactPlayer from "react-player";

interface Medium {
  id: number;
  url: string;
  type: string;
}

interface Props {
  media: Medium[];
}

export default function Trailer({ media }: Props) {
  const video = media.find((m) => m.type === "youtube");
  if (!video) return null;

  return (
    <div className="aspect-video mb-8">
      <ReactPlayer url={video.url} width="100%" height="100%" controls />
    </div>
  );
}
