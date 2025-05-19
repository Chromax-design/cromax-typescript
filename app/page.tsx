"use client";

import HomepageCard from "@/components/HomepageCard";
import Preloader from "@/components/Preloader";
import { useGetAllProjectsQuery } from "@/services/Projects";

const Home = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery();
  return (
    <main className="max-md:space-y-7 md:grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-7 text-white p-4">
      {isLoading && <Preloader />}
      {projects?.map((project, i) => {
        return (
          <HomepageCard
            coverImage={project?.Image[0]?.url}
            blurDataUrl={project?.Image[0]?.thumbnailUrl}
            title={project?.title}
            link={project?.id}
            key={i}
          />
        );
      })}
    </main>
  );
};

export default Home;
