import { ProjectData } from './types/projectTypes';
import { technologyProjects } from './data/technologyProjects';
import { healthProjects } from './data/healthProjects';
import { urbanProjects } from './data/urbanProjects';
import { businessProjects } from './data/businessProjects';
import { communityProjects } from './data/communityProjects';

// Combine all projects from different categories
const projects: ProjectData[] = [
  ...technologyProjects,
  ...communityProjects,
  ...healthProjects,
  ...urbanProjects,
  ...businessProjects,
];

export const getProjectData = (projectId: string): ProjectData | undefined => {
  return projects.find(project => project.id === projectId);
};

export const getAllProjects = (): ProjectData[] => {
  return projects;
};
