import { Code, BookOpen, Brain } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: Code,
      title: 'Coding Courses',
      description: 'Master the fundamentals of programming with hands-on projects and real-world applications.',
    },
    {
      icon: BookOpen,
      title: 'Tech Lessons and Tutorials',
      description: 'Step-by-step tutorials designed to make complex concepts easy to understand and apply.',
    },
    {
      icon: Brain,
      title: 'Engaging Quizzes',
      description: 'Test your knowledge and track your progress with interactive quizzes and challenges.',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Programmes</h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Comprehensive learning paths designed to take you from beginner to professional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-blue-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-800 hover:border-blue-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <program.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-blue-200 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
