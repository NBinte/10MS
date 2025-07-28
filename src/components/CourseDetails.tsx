// components/CourseDetails.tsx
import React from "react";

interface CourseDetailsProps {
  details?: string;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ details }) => {
  if (!details) return null;

  return (
    <section className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Course Details</h2>
      <p className="text-gray-700 whitespace-pre-line">{details}</p>
    </section>
  );
};

export default CourseDetails;
