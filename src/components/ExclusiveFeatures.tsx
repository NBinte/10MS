// components/ExclusiveFeatures.tsx
import React from "react";

interface ExclusiveFeaturesProps {
  features?: string;
}

const ExclusiveFeatures: React.FC<ExclusiveFeaturesProps> = ({ features }) => {
  if (!features) return null;

  return (
    <section className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Course Exclusive Features</h2>
      <p className="text-gray-700 whitespace-pre-line">{features}</p>
    </section>
  );
};

export default ExclusiveFeatures;
