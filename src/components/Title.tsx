interface Props {
  title: string;
}

export default function Title({ title }: Props) {
  return (
    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{title}</h1>
  );
}
