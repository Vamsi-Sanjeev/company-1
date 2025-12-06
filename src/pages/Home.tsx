import { Cpu, Wifi, Brain, Globe, Award, Users, Target, ArrowRight, TrendingUp, BookOpen, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    { icon: Cpu, name: 'Embedded Systems', description: 'Master microcontrollers and real-time systems', color: 'from-blue-500 to-blue-600' },
    { icon: Wifi, name: 'IoT Solutions', description: 'Build connected smart devices and applications', color: 'from-violet-500 to-violet-600' },
    { icon: Brain, name: 'AI/ML Projects', description: 'Develop intelligent systems with machine learning', color: 'from-blue-600 to-violet-600' },
    { icon: Globe, name: 'Web Development', description: 'Create modern responsive web applications', color: 'from-violet-600 to-blue-600' },
  ];

  const features = [
    {
      icon: Award,
      title: 'Industry Standard Projects',
      description: 'Real-world projects that match industry requirements and standards. Build your portfolio with projects that matter.',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from experienced professionals with hands-on guidance. Get personalized support throughout your journey.',
    },
    {
      icon: Target,
      title: 'Career Focused',
      description: 'Build skills that directly enhance your career prospects. Land your dream job with confidence.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Success',
      description: 'Join thousands of successful students. Track record of placements and career growth.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: BookOpen },
    { number: '3000+', label: 'Students Trained', icon: Users },
    { number: '10+', label: 'Years Expertise', icon: Award },
  ];

  return (
    <div>
      <section className="relative section-gradient overflow-hidden pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="font-poppins text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Dekhnix Technologies</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed font-inter">
              Empowering Engineering Students with World-Class Academic Projects, Professional Courses, and Industry-Ready Internships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => onNavigate('projects')}
                className="btn-primary"
              >
                View Projects
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary"
              >
                Contact Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/50 text-center card-hover"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="font-poppins text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across multiple technology domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md border border-gray-100 p-8 card-hover text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={36} />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reasons why thousands of students trust us for their learning journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-8 card-hover flex gap-5"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="text-white" size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Zap className="absolute top-10 right-20 text-white" size={40} />
          <TrendingUp className="absolute bottom-10 left-20 text-white" size={40} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-poppins text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-blue-100 text-xl mb-10 leading-relaxed">
            Get in touch with us today and take the first step towards your dream career
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-600 px-10 py-4 rounded-lg font-poppins font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            Contact Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
