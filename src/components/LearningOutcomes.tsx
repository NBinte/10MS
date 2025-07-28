// components/LearningOutcomes.tsx
import React from "react";

interface LearningOutcomesProps {
  outcomes?: string;
}

const LearningOutcomes: React.FC<LearningOutcomesProps> = ({ outcomes }) => {
  if (!outcomes) return null;

  return (
    <section className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">
        What you will learn by doing the course
      </h2>
      <p className="text-gray-700 whitespace-pre-line">{outcomes}</p>
    </section>
  );
};

export default LearningOutcomes;
