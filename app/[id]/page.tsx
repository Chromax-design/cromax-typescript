"use client";

import InfoComponent from "@/components/InfoComponent";
import Preloader from "@/components/Preloader";
import TitleComponent from "@/components/TitleComponent";
import { useGetProjectByIdQuery } from "@/services/Projects";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProjectPage = () => {
  const { id } = useParams();
  const { data: project, isLoading } = useGetProjectByIdQuery({
    id: id as string,
  });

  return (
    <>
      {isLoading && <Preloader />}
      {project ? (
        <main className=" my-14 space-y-5 p-3">
          <TitleComponent title={project?.title as string} />
          <InfoComponent />
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            mobileSettings={{
              controls: true,
              showCloseIcon: true,
              download: false,
            }}
            elementClassNames="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5"
          >
            {project.Image.map(({ url, thumbnailUrl }, i) => {
              return (
                <a href={url} className="" key={i}>
                  <Image
                    alt="img1"
                    src={url}
                    className=" rounded-sm w-full h-80 object-cover hover:scale-105 duration-300 cursor-pointer object-top saturate-0 hover:saturate-100 brightness-75 hover:brightness-95 transition"
                    blurDataURL={thumbnailUrl}
                    width={400}
                    height={600}
                  />
                </a>
              );
            })}
          </LightGallery>
        </main>
      ) : (
        <div className="capitalize text-accent min-h-screen flex flex-col justify-center items-center">
          No data found
        </div>
      )}
    </>
  );
};

export default ProjectPage;
