import Link from "next/link";

// app/layout.tsx (if you're setting at the global level) OR use `generateMetadata` inside page
export const generateMetadata = async () => {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
      },
      next: { revalidate: 60 }, // ISR
    }
  );

  const data = await res.json();
  const seo = data.seo;

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.og_title,
      description: seo.og_description,
      url: seo.og_url,
      images: [seo.og_image],
    },
  };
};

export default function Header() {
  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700"
        >
          IELTS Course
        </Link>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link href="#features" className="hover:text-blue-600">
                Features
              </Link>
            </li>
            <li>
              <Link href="#instructors" className="hover:text-blue-600">
                Instructors
              </Link>
            </li>
            <li>
              <Link
                href="#enroll"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Enroll Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
