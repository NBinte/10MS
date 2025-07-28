// components/CourseLayout.tsx
import React from "react";

interface CourseLayoutProps {
  layout?: string;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ layout }) => {
  if (!layout) return null;

  return (
    <section className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">How the course is laid out</h2>
      <p className="text-gray-700 whitespace-pre-line">{layout}</p>
    </section>
  );
};

export default CourseLayout;
