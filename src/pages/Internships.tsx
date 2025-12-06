import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Internships() {
  const internships = [
    {
      title: 'Embedded Systems Intern',
      duration: '3 Months',
      mode: 'Remote/On-site',
      description: 'Work on real-world embedded projects including firmware development, sensor integration, and IoT applications',
      skills: ['C/C++', 'Microcontrollers', 'RTOS', 'Hardware Debugging'],
      spots: 'Limited Seats',
    },
    {
      title: 'IoT Development Intern',
      duration: '3 Months',
      mode: 'Remote',
      description: 'Build end-to-end IoT solutions from hardware prototyping to cloud deployment and mobile applications',
      skills: ['ESP32/Arduino', 'Cloud Platforms', 'MQTT', 'Node.js'],
      spots: 'Open',
    },
    {
      title: 'Machine Learning Intern',
      duration: '4 Months',
      mode: 'Remote/On-site',
      description: 'Develop ML models for real-world applications, including computer vision and natural language processing',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science'],
      spots: 'Limited Seats',
    },
    {
      title: 'Full Stack Web Development Intern',
      duration: '3 Months',
      mode: 'Remote',
      description: 'Create modern web applications using latest frameworks and technologies with industry best practices',
      skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      spots: 'Open',
    },
    {
      title: 'PCB Design Intern',
      duration: '2 Months',
      mode: 'On-site',
      description: 'Design professional PCBs for commercial products from schematic to manufacturing',
      skills: ['Altium/KiCAD', 'Circuit Design', 'Signal Integrity', 'DFM'],
      spots: 'Limited Seats',
    },
    {
      title: 'AI/Computer Vision Intern',
      duration: '4 Months',
      mode: 'Remote',
      description: 'Work on cutting-edge computer vision projects including object detection and image segmentation',
      skills: ['Python', 'OpenCV', 'Deep Learning', 'YOLO/CNNs'],
      spots: 'Open',
    },
  ];

  return (
    <div className="min-h-screen section-gradient py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            Internship Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Gain hands-on experience with industry projects and build your portfolio
            while learning from experienced professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-poppins text-xl font-semibold text-gray-900 flex-1">
                  {internship.title}
                </h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
                  internship.spots === 'Open'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-orange-100 text-orange-800'
                }`}>
                  {internship.spots}
                </span>
              </div>

              <p className="text-gray-600 mb-4 font-inter leading-relaxed">{internship.description}</p>

              <div className="space-y-2 mb-4 text-sm text-gray-600 font-inter">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-600 flex-shrink-0" />
                  <span>Duration: {internship.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-violet-600 flex-shrink-0" />
                  <span>Mode: {internship.mode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-blue-600 flex-shrink-0" />
                  <span>Hands-on Industry Projects</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-4">
                <h4 className="text-sm font-poppins font-semibold text-gray-900 mb-3">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-inter"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="btn-primary w-full">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 section-gradient rounded-xl p-10 border border-blue-200">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-10 text-center">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">Certificate</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Industry-recognized completion certificate</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">Letter of Recommendation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">For outstanding performers</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">Real Projects</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Build portfolio with industry projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
