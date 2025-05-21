
import { ProjectData } from '../types/projectTypes';

export const communityProjects: ProjectData[] = [
  {
    id: "counselconnect",
    title: "CounselConnect",
    description: "Connecting students with counselors for personalized academic guidance",
    fullDescription: "CounselConnect bridges the gap between students and academic counselors, offering a platform for personalized guidance through their educational journey. The application facilitates scheduling, virtual meetings, resource sharing, and progress tracking to ensure students receive the support they need to succeed.",
    image: "/lovable-uploads/773e9ecd-0489-4616-8c83-10b35ffb03f6.png",
    tags: ["Education", "React Native", "Firebase", "Node.js"],
    goals: [
      "Create a secure platform for student-counselor communication",
      "Develop efficient scheduling and calendar integration",
      "Provide resource sharing and progress tracking tools",
      "Ensure user privacy and data protection"
    ],
    challenges: [
      "Building a reliable real-time messaging system",
      "Integrating with various school calendar systems",
      "Creating an interface suitable for both students and professional counselors"
    ],
    solutions: [
      "Implemented WebSocket technology for reliable messaging",
      "Developed universal calendar API adapters",
      "Used extensive user testing with both target groups to refine UX"
    ],
    outcomes: [
      "Connected over 10,000 students with qualified counselors",
      "Improved student academic performance by 27% on average",
      "90% satisfaction rate among both students and counselors"
    ],
    link: "https://hadiaamir.framer.website/projects/counselconnect"
  }
];
