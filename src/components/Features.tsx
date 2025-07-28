interface SectionProps {
  section?: {
    title: string;
    description?: string;
  };
}

export default function Features({ section }: SectionProps) {
  if (!section) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: section.description || "" }}
      />
    </section>
  );
}
