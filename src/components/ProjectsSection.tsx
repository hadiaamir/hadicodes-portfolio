
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Tv, Car, MessageSquare, Utensils, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '@/lib/projectData';

const ProjectIcon = ({ id }: { id: string }) => {
  switch (id) {
    case 'tevvy':
      return <Tv className="h-5 w-5 text-purple-400" />;
    case 'curbify':
      return <Car className="h-5 w-5 text-purple-400" />;
    case 'baatpakki':
      return <MessageSquare className="h-5 w-5 text-purple-400" />;
    case 'feedme':
      return <Utensils className="h-5 w-5 text-purple-400" />;
    case 'counselconnect':
      return <Users className="h-5 w-5 text-purple-400" />;
    default:
      return <ArrowRight className="h-5 w-5 text-purple-400" />;
  }
};

const ProjectCard = ({ 
  id,
  title, 
  description, 
  tags = [],
  image
}: { 
  id: string;
  title: string; 
  description: string; 
  tags: string[];
  image: string;
}) => {
  return (
    <Card className="border-0 bg-gray-900/50 project-card overflow-hidden gradient-border">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
          <ProjectIcon id={id} />
          <span>{title}</span>
        </div>
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
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
