import { Clock, BookOpen } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'Embedded Systems Development',
      duration: '12 Weeks',
      level: 'Intermediate',
      description: 'Master ARM Cortex-M programming, RTOS, and peripheral interfacing',
      topics: ['Microcontrollers', 'RTOS', 'Protocol Implementation', 'Hardware Interfacing'],
    },
    {
      title: 'Internet of Things (IoT)',
      duration: '10 Weeks',
      level: 'Beginner',
      description: 'Build IoT applications with ESP32, sensors, and cloud platforms',
      topics: ['ESP32/Arduino', 'Sensor Integration', 'MQTT', 'Cloud Connectivity'],
    },
    {
      title: 'Machine Learning & AI',
      duration: '16 Weeks',
      level: 'Advanced',
      description: 'Deep learning, neural networks, and AI model deployment',
      topics: ['Python', 'TensorFlow', 'Deep Learning', 'Model Deployment'],
    },
    {
      title: 'Full Stack Web Development',
      duration: '14 Weeks',
      level: 'Intermediate',
      description: 'Build modern web applications with React, Node.js, and databases',
      topics: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    },
    {
      title: 'Python for Data Science',
      duration: '8 Weeks',
      level: 'Beginner',
      description: 'Data analysis, visualization, and machine learning with Python',
      topics: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    },
    {
      title: 'PCB Design & Development',
      duration: '6 Weeks',
      level: 'Intermediate',
      description: 'Professional PCB design using Altium Designer and KiCAD',
      topics: ['Schematic Design', 'PCB Layout', 'DRC', 'Manufacturing'],
    },
  ];

  const levelColors: { [key: string]: string } = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-violet-100 text-violet-800',
  };

  return (
    <div className="min-h-screen section-gradient py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            Professional Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Industry-oriented courses designed by experts to help you master
            cutting-edge technologies and advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${levelColors[course.level]}`}>
                  {course.level}
                </span>
              </div>

              <p className="text-gray-600 mb-4 font-inter leading-relaxed">{course.description}</p>

              <div className="flex items-center gap-6 mb-4 text-sm text-gray-600 font-inter">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-600" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-violet-600" />
                  <span>{course.topics.length} Modules</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-4">
                <h4 className="text-sm font-poppins font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <button className="btn-primary w-full">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
