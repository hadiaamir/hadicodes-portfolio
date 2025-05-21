
interface ProjectData {
  id: string;
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

// Project data from both the provided URLs and hadiaamir.com/projects
const projects: ProjectData[] = [
  {
    id: "fintrix",
    title: "Fintrix",
    description: "An all-in-one financial management platform for businesses and individuals",
    fullDescription: "Fintrix is a comprehensive financial management platform designed to simplify the complex world of finance for both businesses and individuals. With robust expense tracking, budgeting tools, and financial insights, users can take control of their financial journey with confidence.",
    image: "https://framerusercontent.com/images/9zLLJ7W9MwjrI4jgXwgeaAOHu4.jpg?scale-down-to=2048",
    tags: ["Finance", "React", "TypeScript", "Material UI"],
    goals: [
      "Create an intuitive interface for managing complex financial data",
      "Develop real-time tracking and reporting functionalities",
      "Ensure security of sensitive financial information",
      "Build a responsive system across desktop and mobile devices"
    ],
    challenges: [
      "Handling large volumes of financial transaction data efficiently",
      "Creating clear visualizations of complex financial reports",
      "Ensuring bank-grade security while maintaining user-friendly experience"
    ],
    solutions: [
      "Implemented optimized data processing algorithms",
      "Designed custom visualization components using D3.js",
      "Integrated end-to-end encryption and strict authentication protocols"
    ],
    outcomes: [
      "35% improvement in users' financial awareness",
      "Reduced manual financial management time by 60%",
      "Successfully deployed to over 5,000 users with high satisfaction ratings"
    ],
    link: "https://hadiaamir.framer.website/projects/fintrix"
  },
  {
    id: "counselconnect",
    title: "CounselConnect",
    description: "Connecting students with counselors for personalized academic guidance",
    fullDescription: "CounselConnect bridges the gap between students and academic counselors, offering a platform for personalized guidance through their educational journey. The application facilitates scheduling, virtual meetings, resource sharing, and progress tracking to ensure students receive the support they need to succeed.",
    image: "https://framerusercontent.com/images/69Xmjat2MqIJnZGj0z2bijDM0s.jpg?scale-down-to=2048",
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
  },
  {
    id: "feedme",
    title: "FeedMe",
    description: "AI-powered meal planning and recipe recommendation app",
    fullDescription: "FeedMe is an AI-powered nutrition assistant that creates personalized meal plans and recipes based on users' dietary preferences, restrictions, and nutritional goals. The app learns from user feedback to continuously improve its recommendations, making healthy eating accessible and enjoyable for everyone.",
    image: "https://framerusercontent.com/images/FGlQVtP2QsM58MCyYSLm8FZwzs.png?scale-down-to=1024",
    tags: ["Health", "AI/ML", "React", "Python"],
    goals: [
      "Develop an intelligent meal recommendation system",
      "Create personalized nutrition tracking",
      "Build a user-friendly recipe database with easy filtering",
      "Implement preference learning algorithms to improve suggestions over time"
    ],
    challenges: [
      "Processing diverse nutritional data accurately",
      "Creating recipes that balance nutrition with taste preferences",
      "Designing an algorithm that learns effectively from minimal user feedback"
    ],
    solutions: [
      "Developed a custom nutrition analysis engine",
      "Partnered with professional chefs to optimize recipes",
      "Implemented a hybrid recommendation system using collaborative and content-based filtering"
    ],
    outcomes: [
      "Users reported 42% reduction in unhealthy meal choices",
      "Achieved 75% accuracy in predicting user meal preferences",
      "4.8/5 star rating on app stores with over 100,000 downloads"
    ],
    link: "https://hadiaamir.framer.website/projects/feedme"
  },
  {
    id: "baatpakki",
    title: "BaatPakki",
    description: "Digital wedding planning platform with vendor marketplace",
    fullDescription: "BaatPakki revolutionizes wedding planning for South Asian couples with an all-inclusive digital platform. From venue selection to vendor booking, guest management to budget tracking, the application streamlines the entire wedding planning process while honoring cultural traditions and preferences.",
    image: "https://framerusercontent.com/images/vEhPF84N60WyBCjnEIZsQjJ0A.jpg?scale-down-to=2048",
    tags: ["Wedding", "Vue.js", "MongoDB", "Express"],
    goals: [
      "Create a comprehensive wedding planning tool for South Asian weddings",
      "Develop a trusted vendor marketplace",
      "Build effective guest management and RSVP tracking",
      "Design culturally relevant templates and planning guides"
    ],
    challenges: [
      "Accommodating diverse cultural wedding traditions",
      "Creating a reliable vendor verification system",
      "Managing complex guest lists and multi-day event schedules"
    ],
    solutions: [
      "Consulted cultural experts to ensure authentic representation",
      "Implemented a rigorous vendor verification process with user reviews",
      "Designed a flexible event management system supporting multiple ceremonies"
    ],
    outcomes: [
      "Successfully facilitated planning for over 500 weddings",
      "Connected couples with 2,000+ verified vendors across various categories",
      "Saved couples an average of 120 hours in planning time"
    ],
    link: "https://hadiaamir.framer.website/projects/baatpakki"
  },
  {
    id: "curbify",
    title: "Curbify",
    description: "Urban waste management solution with real-time tracking",
    fullDescription: "Curbify tackles urban waste management challenges with an integrated technology solution. The platform connects residents, waste collectors, and municipal authorities through a mobile application that enables real-time tracking of waste collection, reporting of issues, and rewards for sustainable disposal practices.",
    image: "https://framerusercontent.com/images/88J9jZeJqlY7NnSSaZHRm1VigfE.jpg?scale-down-to=2048",
    tags: ["Environment", "IoT", "React Native", "Google Maps API"],
    goals: [
      "Create an efficient waste collection tracking system",
      "Develop a platform for residents to report waste-related issues",
      "Build an incentive program for sustainable waste disposal",
      "Design analytics for municipal waste management planning"
    ],
    challenges: [
      "Integrating IoT devices with waste collection vehicles",
      "Creating accurate route optimization for collection efficiency",
      "Designing a reward system that genuinely motivates sustainable behavior"
    ],
    solutions: [
      "Developed custom IoT sensors for waste bins and collection vehicles",
      "Implemented AI-based route planning algorithms",
      "Created a point-based reward system with local business partnerships"
    ],
    outcomes: [
      "Reduced collection costs by 27% for participating municipalities",
      "Increased recycling rates by 42% in pilot neighborhoods",
      "Improved resident satisfaction with waste services by 65%"
    ],
    link: "https://hadiaamir.framer.website/projects/curbify"
  },
  {
    id: "tevvy",
    title: "Tevvy",
    description: "Social media platform for TV show enthusiasts",
    fullDescription: "Tevvy brings together television enthusiasts in a dedicated social platform where they can discuss their favorite shows, discover new content through personalized recommendations, and participate in show-specific communities. The platform integrates with popular streaming services to track watching activity and connect users with similar interests.",
    image: "https://framerusercontent.com/images/qjbfqUMRNQOHkdeJ4ipNnLElHQ.jpg?scale-down-to=2048",
    tags: ["Entertainment", "Angular", "Node.js", "PostgreSQL"],
    goals: [
      "Build an engaged community of TV show enthusiasts",
      "Create personalized content discovery algorithms",
      "Develop streaming service integrations",
      "Design spoiler-free discussion spaces for new shows"
    ],
    challenges: [
      "Managing spoilers in a community discussion environment",
      "Creating accurate recommendation algorithms across diverse genres",
      "Building reliable integrations with multiple streaming platforms"
    ],
    solutions: [
      "Implemented an advanced spoiler filtering system with AI content detection",
      "Developed a hybrid recommendation engine combining viewing history and social connections",
      "Created a unified API adapter for multiple streaming service integrations"
    ],
    outcomes: [
      "Built a community of 50,000+ active users within six months",
      "Users discovered an average of 7 new shows through recommendations",
      "Achieved 82% user retention rate, exceeding industry standards"
    ],
    link: "https://hadiaamir.framer.website/projects/tevvy"
  },
  {
    id: "soulitude",
    title: "Soulitude",
    description: "A mental health app focused on mindfulness and stress management",
    fullDescription: "Soulitude is a comprehensive mental wellness application designed to help users manage stress, anxiety, and improve overall mental health through guided meditation, breathing exercises, and personalized mindfulness techniques.",
    image: "https://framerusercontent.com/images/so2re4KQJmF8wbl4hPml2iFyGHk.jpg?scale-down-to=2048",
    tags: ["Health", "React Native", "Firebase", "Redux"],
    goals: [
      "Create accessible mental health tools for daily use",
      "Develop personalized mindfulness recommendations",
      "Build a supportive community for mental wellness",
      "Design interfaces that promote calm and reduce anxiety"
    ],
    challenges: [
      "Creating effective guided meditation content",
      "Building algorithms to detect user stress patterns",
      "Designing an interface that promotes calm while maintaining engagement"
    ],
    solutions: [
      "Partnered with licensed therapists to create evidence-based content",
      "Implemented machine learning to recognize stress patterns in usage data",
      "Used color psychology and minimalist design to create a calming interface"
    ],
    outcomes: [
      "Users reported 38% reduction in daily stress levels",
      "Average session time of 12 minutes daily",
      "4.7/5 app store rating with 200,000+ downloads"
    ],
    link: "https://hadiaamir.com/projects"
  },
  {
    id: "trackify",
    title: "Trackify",
    description: "Employee time tracking and productivity analytics platform",
    fullDescription: "Trackify is a comprehensive time tracking solution for businesses that helps optimize productivity, manage project timelines, and provide valuable insights into work patterns and resource allocation.",
    image: "https://framerusercontent.com/images/9D7wI6WIBnMqlVDWmYeYulEa10.jpg?scale-down-to=2048",
    tags: ["Business", "React", "Node.js", "PostgreSQL", "GraphQL"],
    goals: [
      "Create intuitive time tracking for employees",
      "Provide meaningful analytics for management",
      "Integrate seamlessly with existing project management tools",
      "Balance detailed tracking with employee privacy concerns"
    ],
    challenges: [
      "Making time tracking unobtrusive to daily workflows",
      "Processing large datasets for real-time analytics",
      "Integrating with diverse project management ecosystems"
    ],
    solutions: [
      "Developed lightweight browser extensions and mobile apps for easy tracking",
      "Built a scalable analytics engine with GraphQL for efficient data retrieval",
      "Created flexible API integrations with popular project management platforms"
    ],
    outcomes: [
      "Increased billable time capture by 24% for client organizations",
      "Provided insights that led to 15% productivity improvements",
      "Successfully deployed to 300+ companies across various industries"
    ],
    link: "https://hadiaamir.com/projects"
  },
  {
    id: "cybershield",
    title: "CyberShield",
    description: "Comprehensive cybersecurity solution for small businesses",
    fullDescription: "CyberShield provides enterprise-grade security solutions tailored for small businesses, offering threat detection, vulnerability assessment, employee training, and incident response in an affordable, easy-to-manage package.",
    image: "https://framerusercontent.com/images/Off0gfVLmG1NfsIKKgYKxB7OiE.jpg?scale-down-to=2048",
    tags: ["Security", "React", "Python", "AWS", "Machine Learning"],
    goals: [
      "Make enterprise-level security accessible to small businesses",
      "Automate threat detection and response processes",
      "Provide actionable security insights without technical jargon",
      "Create effective security training for non-technical employees"
    ],
    challenges: [
      "Simplifying complex security concepts for small business owners",
      "Building effective threat detection with limited client resources",
      "Creating scalable security solutions at an affordable price point"
    ],
    solutions: [
      "Developed AI-powered threat analysis with plain language reporting",
      "Created cloud-based security monitoring requiring minimal on-premise hardware",
      "Implemented gamified security training for employee engagement"
    ],
    outcomes: [
      "Reduced security incidents by 76% for client businesses",
      "Achieved 92% employee completion rate for security training",
      "Successfully prevented 15 major ransomware attacks across client network"
    ],
    link: "https://hadiaamir.com/projects"
  },
  {
    id: "artisan",
    title: "Artisan",
    description: "Marketplace connecting skilled craftspeople with customers",
    fullDescription: "Artisan is a digital marketplace that connects skilled craftspeople and artisans with customers seeking handmade, custom, and unique items, supporting local economies and traditional craftsmanship in the digital age.",
    image: "https://framerusercontent.com/images/JoKmqR2JMWDBsE4cdS6TGAYJY.jpg?scale-down-to=2048",
    tags: ["E-commerce", "Vue.js", "Nuxt.js", "MongoDB", "Stripe"],
    goals: [
      "Create a platform showcasing artisanal craftsmanship",
      "Develop fair payment and commission structures",
      "Build effective search and discovery for unique items",
      "Design tools for custom order negotiations and fulfillment"
    ],
    challenges: [
      "Creating consistent quality standards across diverse products",
      "Building shipping solutions for fragile handmade items",
      "Developing fair pricing models for custom work"
    ],
    solutions: [
      "Implemented a tiered verification system for artisan credentials",
      "Partnered with specialized shipping providers for handmade goods",
      "Created flexible quote and negotiation tools for custom orders"
    ],
    outcomes: [
      "Connected 5,000+ artisans with new customer bases",
      "Generated $2.8M in sales for independent craftspeople in first year",
      "95% satisfaction rate from both buyers and sellers"
    ],
    link: "https://hadiaamir.com/projects"
  }
];

export const getProjectData = (projectId: string): ProjectData | undefined => {
  return projects.find(project => project.id === projectId);
};

export const getAllProjects = (): ProjectData[] => {
  return projects;
};
