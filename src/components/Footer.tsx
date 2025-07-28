// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} 10 Minute School. All rights reserved.
      </div>
    </footer>
  );
}
