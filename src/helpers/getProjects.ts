import fs from "fs";
import path from "path";

interface ProjectData {
  category: string;
  images: string[];
}

export function getProjects(): ProjectData[] {
  const projectsDirectory = path.join(process.cwd(), "public/images/projects");

  // Get all directories (categories) in the projects folder
  const categories = fs
    .readdirSync(projectsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // For each category, get all images
  const projects = categories.map((category) => {
    const categoryPath = path.join(projectsDirectory, category);
    const images = fs
      .readdirSync(categoryPath)
      .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map((file) => `/images/projects/${category}/${file}`);

    return {
      category,
      images,
    };
  });

  return projects;
}
