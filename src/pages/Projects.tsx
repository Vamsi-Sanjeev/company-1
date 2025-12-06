import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart Home Automation System',
      category: 'IoT',
      description: 'Complete IoT-based home automation with mobile app control and voice commands',
    },
    {
      title: 'AI-Powered Chatbot',
      category: 'AI/ML',
      description: 'Natural language processing chatbot with machine learning capabilities',
    },
    {
      title: 'Industrial Monitoring System',
      category: 'Embedded',
      description: 'Real-time industrial parameter monitoring with sensor integration',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'Full-stack e-commerce solution with payment gateway integration',
    },
    {
      title: 'Gesture Recognition System',
      category: 'AI/ML',
      description: 'Computer vision-based gesture recognition using deep learning',
    },
    {
      title: 'Weather Monitoring Station',
      category: 'IoT',
      description: 'IoT-enabled weather station with cloud data storage and analytics',
    },
    {
      title: 'Inventory Management System',
      category: 'Web',
      description: 'Cloud-based inventory tracking and management solution',
    },
    {
      title: 'Autonomous Robot Navigation',
      category: 'Embedded',
      description: 'Self-navigating robot with obstacle detection and path planning',
    },
    {
      title: 'Face Recognition Attendance',
      category: 'AI/ML',
      description: 'Automated attendance system using facial recognition technology',
    },
  ];

  const categoryColors: { [key: string]: string } = {
    'IoT': 'bg-blue-100 text-blue-800',
    'AI/ML': 'bg-violet-100 text-violet-800',
    'Embedded': 'bg-blue-200 text-blue-900',
    'Web': 'bg-violet-200 text-violet-900',
  };

  return (
    <div className="min-h-screen section-gradient py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            Engineering Academic Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Explore our wide range of industry-standard academic projects designed to
            enhance your technical skills and boost your career prospects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 card-hover"
            >
              <div className="mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[project.category]}`}>
                  {project.category}
                </span>
              </div>
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                {project.description}
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-inter font-semibold hover:text-blue-700 transition-colors duration-300">
                View Details
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
