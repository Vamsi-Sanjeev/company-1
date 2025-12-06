import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen section-gradient py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 mb-4">
            About Dekhnix Technologies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Empowering the next generation of engineers with cutting-edge skills and real-world experience
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-12 mb-16">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-5 text-gray-600 leading-relaxed font-inter">
            <p>
              Dekhnix Technologies was founded with a simple yet powerful vision: to bridge the gap between
              academic learning and industry requirements. We recognized that engineering students often lack
              practical exposure to real-world technologies and projects, making it challenging for them to
              succeed in their careers.
            </p>
            <p>
              Today, we are a leading provider of engineering academic projects, professional courses, and
              industry-focused internship programs. Our team of experienced professionals and industry experts
              work tirelessly to create learning experiences that are not only educational but also aligned
              with current industry trends and demands.
            </p>
            <p>
              We specialize in cutting-edge domains including Embedded Systems, Internet of Things (IoT),
              Artificial Intelligence/Machine Learning, Web Development, and more. Our comprehensive approach
              ensures that every student who joins us gains practical skills, hands-on experience, and the
              confidence to excel in their chosen field.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md p-8 border border-blue-200">
            <div className="flex items-center mb-5">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="font-poppins text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed font-inter">
              To provide engineering students with world-class practical training, industry-standard projects,
              and mentorship that transforms them into job-ready professionals. We aim to make quality technical
              education accessible and affordable for every aspiring engineer.
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl shadow-md p-8 border border-violet-200">
            <div className="flex items-center mb-5">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-600 to-violet-700 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                <Eye className="text-white" size={28} />
              </div>
              <h2 className="font-poppins text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed font-inter">
              To become the most trusted platform for engineering education, recognized globally for our innovative
              approach to skill development. We envision a future where every engineering graduate is equipped with
              the practical skills and confidence to drive technological innovation.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-12 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">Industry Standard</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Projects and courses aligned with current industry requirements
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-violet-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">Expert Mentors</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learn from experienced professionals with years of industry experience
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">Practical Focus</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Hands-on learning with real hardware and live projects
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-violet-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-white font-bold text-2xl">24/7</span>
              </div>
              <h3 className="font-poppins font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuous support throughout your learning journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
