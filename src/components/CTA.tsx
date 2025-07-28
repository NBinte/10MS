interface Props {
  text: string;
}

export default function CTA({ text }: Props) {
  return (
    <div className="mt-8">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
        {text || "Enroll Now for ৳1000"}
      </button>
    </div>
  );
}
