import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Tv, Car, MessageSquare, Utensils, Users, Heart, Clock, Shield, Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '@/lib/projectData';
import { useTheme } from '@/lib/context/ThemeContext';

const ProjectIcon = ({ id }: { id: string }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'light' ? 'text-purple-700' : 'text-purple-400';
  
  switch (id) {
    case 'tevvy':
      return <Tv className={`h-5 w-5 ${iconColor}`} />;
    case 'curbify':
      return <Car className={`h-5 w-5 ${iconColor}`} />;
    case 'baatpakki':
      return <MessageSquare className={`h-5 w-5 ${iconColor}`} />;
    case 'feedme':
      return <Utensils className={`h-5 w-5 ${iconColor}`} />;
    case 'counselconnect':
      return <Users className={`h-5 w-5 ${iconColor}`} />;
    case 'soulitude':
      return <Heart className={`h-5 w-5 ${iconColor}`} />;
    case 'trackify':
      return <Clock className={`h-5 w-5 ${iconColor}`} />;
    case 'cybershield':
      return <Shield className={`h-5 w-5 ${iconColor}`} />;
    case 'artisan':
      return <Paintbrush className={`h-5 w-5 ${iconColor}`} />;
    default:
      return <ArrowRight className={`h-5 w-5 ${iconColor}`} />;
  }
};

const ProjectCard = ({ 
  id,
  title, 
  description, 
  technologies = [],
  imageUrl,
  category,
  date
}: { 
  id: string;
  title: string; 
  description: string; 
  technologies: string[];
  imageUrl: string;
  category: string;
  date: string;
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const { theme } = useTheme();

  return (
    <Card className={`overflow-hidden ${
      theme === 'light' 
        ? 'bg-white border border-gray-200 shadow-md' 
        : 'border-0 bg-gray-900/50 gradient-border'
    }`}>
      <div className="h-60 overflow-hidden relative">
        {!imageLoaded && (
          <div className={`absolute inset-0 flex items-center justify-center ${
            theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
          }`}>
            <div className={`animate-pulse w-6 h-6 rounded-full ${
              theme === 'light' ? 'bg-purple-400/50' : 'bg-purple-500/50'
            }`}></div>
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <CardContent className="p-6">
        <div className={`flex items-center gap-2 text-sm mb-2 ${
          theme === 'light' ? 'text-purple-700' : 'text-purple-400'
        }`}>
          <ProjectIcon id={id} />
          <span>{category}</span>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }`}>{title}</h3>
        <p className={`mb-6 ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}>{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
              theme === 'light' 
                ? 'bg-gray-100 text-gray-800' 
                : 'bg-gray-800 text-gray-300'
            }`}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`text-xs ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>{date}</span>
          <Link 
            to={`/project/${id}`}
            className={`flex items-center text-sm font-medium transition-colors ${
              theme === 'light' 
                ? 'text-purple-700 hover:text-purple-900' 
                : 'text-purple-400 hover:text-purple-300'
            }`}
          >
            View Project <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const projects = getAllProjects();
  const { theme } = useTheme();

  return (
    <section id="projects" className="py-20 px-4 md:px-0 relative">
      {/* Gradient background element */}
      <div className={`absolute bottom-0 left-0 -z-10 w-96 h-96 rounded-full blur-[120px] ${
        theme === 'light' ? 'bg-purple-300/10' : 'bg-blue-500/10'
      }`}></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className={`text-2xl font-bold mb-2 ${
              theme === 'light' ? 'text-gray-800' : ''
            } text-gradient`}>MY PROJECTS</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                category={project.category}
                date={project.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
