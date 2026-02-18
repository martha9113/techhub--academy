import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To equip learners with knowledge in ICT and technology that will inspire creativity, innovation, and problem-solving skills.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-950">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To build a trusted digital learning platform that empowers young learners and beginners with technology and coding skills, and creativity for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
