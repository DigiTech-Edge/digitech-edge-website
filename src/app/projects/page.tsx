import CustomBanner from "@/components/global/CustomBanner";
import Project from "@/components/pages/projects/Project";

const projectsData = [
  {
    name: "E-commerce Website",
    image: "/images/projects/AirCalling.png",
    category: "Web Design Solutions",
  },
  {
    name: "Mobile Banking App",
    image: "/images/projects/Business Landing.png",
    category: "App Development",
  },
  {
    name: "Corporate Branding",
    image: "/images/projects/Econ Landing.png",
    category: "Graphic Design",
  },
  {
    name: "Cloud Migration",
    image: "/images/projects/Econ Landing.png",
    category: "IT Infrastructure Management",
  },
  {
    name: "UX Redesign",
    image: "/images/projects/AirCalling.png",
    category: "UI and UX Solutions",
  },
  {
    name: "IT Training Program",
    image: "/images/projects/Business Landing.png",
    category: "IT Skills Training",
  },
  {
    name: "Digital Transformation Strategy",
    image: "/images/projects/AirCalling.png",
    category: "IT Consulting and Strategy",
  },
];

export default function Projects() {
  return (
    <>
      <CustomBanner title="Projects" imageSrc="/images/banner.png" />
      <Project projects={projectsData} />
    </>
  );
}
