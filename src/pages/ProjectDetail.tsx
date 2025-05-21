
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectData } from '@/lib/projectData';

interface ProjectData {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  goals?: string[];
  challenges?: string[];
  solutions?: string[];
  outcomes?: string[];
  link?: string;
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      const projectData = getProjectData(projectId);
      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }
  }, [projectId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-6">The project you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" /> Go back to home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_2%,rgba(33,33,33,1)_3%,rgba(33,33,33,1)_97%,rgba(0,0,0,0)_98%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(40, 40, 40, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 40, 40, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-20 px-4 container mx-auto">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
          </Link>
        </div>
        
        <div className="bg-gray-900/40 rounded-xl overflow-hidden shadow-xl border border-gray-800">
          <div className="w-full h-80 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-sm px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
            
            {project.fullDescription && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gradient">About the Project</h2>
                <p className="text-gray-300">{project.fullDescription}</p>
              </div>
            )}
            
            {project.goals && project.goals.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gradient">Project Goals</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {project.goals.map((goal, idx) => (
                    <li key={idx}>{goal}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gradient">Challenges</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.solutions && project.solutions.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gradient">Solutions</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {project.solutions.map((solution, idx) => (
                    <li key={idx}>{solution}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gradient">Outcomes</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.link && (
              <div className="mt-12">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-md px-6 py-3 btn-hover-effect"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
