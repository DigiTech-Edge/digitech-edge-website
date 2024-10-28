import CustomBanner from "@/components/global/CustomBanner";
import Project from "@/components/pages/projects/Project";
import { getProjects } from "@/helpers/getProjects";

export default function Projects() {
  const projectsData = getProjects();

  return (
    <>
      <CustomBanner title="Projects" imageSrc="/images/banner.png" />
      <Project projects={projectsData} />
    </>
  );
}
