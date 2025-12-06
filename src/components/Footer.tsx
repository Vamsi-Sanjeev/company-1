import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-16">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-poppins font-bold text-xl">D</span>
              </div>
              <span className="text-lg font-poppins font-bold text-white">
                Dekhnix Technologies
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Engineering Academic Projects, Courses & Internships designed to empower the next generation of engineers.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Courses', 'Internships'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 font-inter"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {['About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 font-inter"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-poppins font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 font-inter">Email</p>
                  <a href="mailto:info@dekhnix.com" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    info@dekhnix.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 font-inter">Phone</p>
                  <a href="tel:+919876543210" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-gray-500 font-inter">Location</p>
                  <p className="text-sm text-gray-300">Bangalore, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-sm text-gray-500 font-inter">
            © {new Date().getFullYear()} Dekhnix Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
