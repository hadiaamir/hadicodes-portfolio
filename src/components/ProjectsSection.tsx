
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '@/lib/projectData';

const ProjectCard = ({ 
  id,
  title, 
  description, 
  tags = [],
  index 
}: { 
  id: string;
  title: string; 
  description: string; 
  tags: string[];
  index: number;
}) => {
  return (
    <Card className="border-0 bg-gray-900/50 project-card overflow-hidden gradient-border">
      <CardContent className="p-6">
        <div className="text-sm text-purple-400 mb-2">Featured Project {index + 1}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to={`/project/${id}`}
          className="flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
        >
          View Project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects = getAllProjects();

  return (
    <section id="projects" className="py-20 px-4 md:px-0 relative">
      {/* Gradient background element */}
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-2">MY PROJECTS</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                index={index}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
