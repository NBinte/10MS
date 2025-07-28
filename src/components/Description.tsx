interface Props {
  html: string;
}

export default function Description({ html }: Props) {
  return (
    <div
      className="prose max-w-none mb-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
