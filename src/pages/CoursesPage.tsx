import { Globe, Palette, Cpu, Network, Monitor, ArrowLeft } from 'lucide-react';

interface CoursesPageProps {
  onBack: () => void;
}

export default function CoursesPage({ onBack }: CoursesPageProps) {
  const courses = [
    {
      icon: Globe,
      title: 'HyperText Markup Language (HTML)',
      description: 'Learn the foundation of web development in this complete HTML Course. You\'ll also understand how websites are structured using HTML elements, tags, attributes, links, images, forms, tables, and more. By the end of this course, you\'ll be able to build a fully structured webpage from scratch.',
    },
    {
      icon: Palette,
      title: 'CSS',
      description: 'In this CSS Course, you\'ll learn how to turn plain HTML into beautiful, styled websites. You\'ll also learn how to use CSS to control colors, fonts, layouts, spacing, positioning, and responsive design. This course will help you design modern, professional-looking websites.',
    },
    {
      icon: Cpu,
      title: 'JavaScript',
      description: 'Take your web development skills to the next level with this JavaScript Course. In this course, you\'ll learn how to make websites interactive using variables, functions, conditions, loops, events, and so on. By the end of this course, you\'ll be able to move from static websites to dynamic, interactive web applications.',
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Understand how computers communicate in this Networks Course. This course covers networking basics including types of networks, IP addresses, routers, switches, protocols, and how the internet works. Ideal for anyone who wants to understand how devices connect and share information.',
    },
    {
      icon: Monitor,
      title: 'Operating Systems (OS)',
      description: 'Build a strong foundation in understanding how computers operate in this Operating Systems Course. We introduce you to the role and importance of operating systems in managing hardware and software, while also guiding you through practical real-world applications that give you hands-on experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBack}
              className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="text-xl font-bold">Back to Home</span>
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <img 
              src="/images/image.png" 
              alt="Tech Hub Academy Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">Tech Hub Academy</span>
          </div>
        </div>
      </nav>

      {/* Courses Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Details</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore our comprehensive courses designed to equip you with the skills needed for today's tech industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-slate-800/70"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <course.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{course.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
