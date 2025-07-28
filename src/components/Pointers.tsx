interface SectionWithPoints {
  title: string;
  points?: string[];
}

interface Props {
  section?: SectionWithPoints;
}

export default function Pointers({ section }: Props) {
  if (!section || !section.points) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
      <ul className="list-disc list-inside space-y-2">
        {section.points.map((point, i) => (
          <li key={i} className="text-gray-700">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
