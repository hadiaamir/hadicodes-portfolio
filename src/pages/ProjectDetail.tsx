import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProjectData } from '@/lib/projectData';
import { ProjectData } from '@/lib/types/projectTypes';
import { useTheme } from '@/lib/context/ThemeContext';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { theme } = useTheme();

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
      <div className={`flex items-center justify-center h-screen ${
        theme === 'light' ? 'bg-gray-100' : 'bg-black'
      }`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={`min-h-screen ${
        theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-black text-white'
      } flex flex-col items-center justify-center p-4 transition-colors duration-300`}>
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
    <div className={`min-h-screen ${
      theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-black text-white'
    } overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 opacity-20">
        <div className={`h-full w-full ${
          theme === 'light'
            ? 'bg-[linear-gradient(0deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_2%,rgba(240,240,240,1)_3%,rgba(240,240,240,1)_97%,rgba(255,255,255,0)_98%,rgba(255,255,255,0)_100%)]'
            : 'bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_2%,rgba(33,33,33,1)_3%,rgba(33,33,33,1)_97%,rgba(0,0,0,0)_98%,rgba(0,0,0,0)_100%)]'
        }`} />
        <div className="absolute inset-0" style={{ 
          backgroundImage: theme === 'light'
            ? 'linear-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 200, 200, 0.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(40, 40, 40, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(40, 40, 40, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-20 px-4 container mx-auto">
        <div className="mb-8">
          <Link to="/" className={`inline-flex items-center ${
            theme === 'light' ? 'text-purple-700 hover:text-purple-900' : 'text-purple-400 hover:text-purple-300'
          } transition-colors`}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
          </Link>
        </div>
        
        <div className={`${
          theme === 'light' ? 'bg-white shadow-lg border border-gray-200' : 'bg-gray-900/40 border border-gray-800'
        } rounded-xl overflow-hidden shadow-xl transition-colors duration-300`}>
          <div className="w-full h-96 overflow-hidden relative">
            {!imageLoaded && (
              <div className={`absolute inset-0 flex items-center justify-center ${
                theme === 'light' ? 'bg-gray-200/80' : 'bg-gray-800/80'
              }`}>
                <div className="flex flex-col items-center">
                  <div className="animate-pulse rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
                  <span className={theme === 'light' ? 'text-purple-700' : 'text-purple-400'}>Loading image...</span>
                </div>
              </div>
            )}
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          <div className="p-8">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'light' ? 'text-gray-800' : 'text-white'
            }`}>{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={`text-sm px-3 py-1 rounded-full ${
                  theme === 'light' 
                    ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
            
            <p className={`text-xl ${theme === 'light' ? 'text-gray-800' : 'text-gray-300'} mb-8`}>{project.description}</p>
            
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'light' ? 'text-gray-800' : ''
              } text-gradient`}>Project Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`${
                  theme === 'light' ? 'bg-gray-50' : 'bg-gray-800/30'
                } p-4 rounded-lg`}>
                  <h3 className={`font-medium ${
                    theme === 'light' ? 'text-purple-800' : 'text-purple-400'
                  } mb-2`}>Category</h3>
                  <p className={theme === 'light' ? 'text-gray-800' : 'text-gray-300'}>{project.category}</p>
                </div>
                <div className={`${
                  theme === 'light' ? 'bg-gray-50' : 'bg-gray-800/30'
                } p-4 rounded-lg`}>
                  <h3 className={`font-medium ${
                    theme === 'light' ? 'text-purple-800' : 'text-purple-400'
                  } mb-2`}>Timeline</h3>
                  <p className={theme === 'light' ? 'text-gray-800' : 'text-gray-300'}>{project.date}</p>
                </div>
              </div>
            </div>
            
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
