interface ChecklistItem {
  text: string;
}

interface Props {
  checklist: ChecklistItem[];
}

export default function CheckList({ checklist }: Props) {
  if (!checklist || checklist.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Course Checklist</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {checklist.map((item, idx) => (
          <li key={idx}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
