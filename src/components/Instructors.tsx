import { Section } from "../types/api";

interface Props {
  sections: Section[];
}

export default function Instructors({ sections }: Props) {
  const instructorSection = sections.find((s) => s.type === "instructors");
  console.log("boop", instructorSection);

  if (!instructorSection || !instructorSection.instructors) return null;

  return (
    <section className="mb-8">
      <>here</>
      <h2 className="text-2xl font-semibold mb-4">{instructorSection.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instructorSection?.values?.map((inst) => (
          <div key={inst.slug} className="border rounded-lg p-4 text-center">
            <img
              src={inst.img}
              alt={inst.name}
              className="mx-auto rounded-full w-24 h-24 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold">{inst.name}</h3>
            <p className="text-sm italic text-gray-600 mb-2">{inst.title}</p>
            <p className="text-sm">{inst.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
