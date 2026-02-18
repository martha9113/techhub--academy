import { Lightbulb, Rocket, Users } from 'lucide-react';

export default function About() {
  const languages = [
    {
      name: 'HTML',
      description: 'The structure of every webpage',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'CSS',
      description: 'Designing beautiful and responsive interfaces',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'JavaScript',
      description: 'Bringing websites and apps to life',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">About Us</h2>
            <h3 className="text-2xl md:text-3xl text-blue-800 font-semibold mb-6">
              Learn Tech and Coding Skills the Easiest Way
            </h3>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 md:p-12 rounded-2xl shadow-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Tech Hub Academy, you don't just watch tutorials, you build real skills. Whether you're stepping into tech for the first time (beginner) or leveling up (professional), you're in the right place. Our Courses and Lessons are easy and simplified for you to understand.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600 p-4 rounded-full mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-blue-950">Learn</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600 p-4 rounded-full mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-blue-950">Build</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600 p-4 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-blue-950">Grow</h4>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-950 mb-8 text-center">
              What Will You Learn?
            </h3>
            <p className="text-lg text-gray-700 mb-8 text-center">
              We dive into the foundational languages, including:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-blue-200 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`bg-gradient-to-r ${lang.color} h-2 w-16 rounded-full mb-4`}></div>
                  <h4 className="text-2xl font-bold text-blue-950 mb-3">{lang.name}</h4>
                  <p className="text-gray-600">{lang.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-950 text-white p-8 rounded-2xl text-center">
              <p className="text-lg leading-relaxed mb-6">
                Alongside coding, we cover the core tech fundamentals that everyone should understand in today's digital world.
              </p>
              <p className="text-xl font-semibold mb-4">
                If you're ready to grow, create and thrive in tech — hit Subscribe and turn on notifications Tech Hub Academy Youtube.
              </p>
              <p className="text-blue-200 text-lg">
                Let's build your future in technology, one lesson at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
