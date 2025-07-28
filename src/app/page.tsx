import { Checklist, Data, Section } from "../types/api";
import { notFound } from "next/navigation";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Description from "../components/Description";
import Instructors from "../components/Instructors";
import CourseLayout from "../components/CourseLayout";
import LearningOutcomes from "../components/LearningOutcomes";
import ExclusiveFeatures from "../components/ExclusiveFeatures";
import CourseDetails from "../components/CourseDetails";
import Trailer from "../components/Trailer";
import CTA from "../components/CTA";
import CheckList from "../components/CheckList";

async function getData(lang: "en" | "bn" = "en"): Promise<Data | null> {
  try {
    const res = await fetch(
      "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          Accept: "application/json",
        },
        next: {
          revalidate: 60, // Optional: enables Incremental Static Regeneration (ISR)
        },
      }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("API fetch failed:", err);
    return null;
  }
}

export default async function Page() {
  const data = await getData();
  if (!data) return notFound();

  console.log("here", data);

  const sections: Section[] = data?.data?.sections || [];

  const checklists: Checklist[] = data?.data?.checklist || [];

  console.log("sections", sections);

  console.log("checklists", checklists);

  return (
    <>
      <main className="bg-white">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <Title title={data?.data?.title} />
            <Description html={data?.data?.description} />
            <Instructors sections={sections} />
            {/* <CourseLayout data={data?.data} />
            <LearningOutcomes data={data?.data} />
            <ExclusiveFeatures data={data?.data} />
            <CourseDetails data={data?.data} /> */}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* <Trailer media={data?.data?.media} /> */}
            <CTA text={data?.data?.cta_text?.name} />
            <CheckList checklist={data?.data?.checklist} />
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
