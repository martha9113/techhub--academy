import { Globe, Palette, Cpu, Network, Monitor, ArrowLeft } from 'lucide-react';

interface GetStartedPageProps {
  onBack: () => void;
}

export default function GetStartedPage({ onBack }: GetStartedPageProps) {
  const programs = [
    {
      icon: Globe,
      title: 'HTML',
      description: 'Learn the foundation of web development with HTML elements, tags, and structure',
      youtubeUrl: 'https://youtube.com/playlist?list=PLcbaGCPvN7yP6l945Q9Yal905ZcTB-y--&si=aoCd-zRrzsZjU7VC',
    },
    {
      icon: Palette,
      title: 'CSS',
      description: 'Master styling, layouts, and responsive design with CSS',
      youtubeUrl: 'https://www.youtube.com/@tech_hub_academy',
    },
    {
      icon: Cpu,
      title: 'JavaScript',
      description: 'Add interactivity and dynamic functionality to your websites',
      youtubeUrl: 'https://www.youtube.com/@tech_hub_academy',
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Understand how computers communicate and networks function',
      youtubeUrl: 'https://youtube.com/playlist?list=PLcbaGCPvN7yMUL0eq8eIDplgIu0HGFv1y&si=1iPQ7RzVJYo3EK8_',
    },
    {
      icon: Monitor,
      title: 'Operating Systems',
      description: 'Learn the fundamentals of computer operating systems and management',
      youtubeUrl: 'https://youtube.com/playlist?list=PLcbaGCPvN7yMimhcOZzCCYvROPHTEyfLO&si=WhGLEPKMs_eCJ0Vv',
    },
  ];

  const handleProgramClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
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

      {/* Programs Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Learning Path</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Select a program to start your learning journey. Each program will take you to our YouTube channel where you can access comprehensive video tutorials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <button
              key={index}
              onClick={() => handleProgramClick(program.youtubeUrl)}
              className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:bg-blue-800/70 text-left group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                <program.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{program.title}</h3>
              <p className="text-blue-200 leading-relaxed text-sm">{program.description}</p>
            </button>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-800/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="text-blue-200 mb-6">
              Click on any program above to access our free YouTube tutorials and begin your journey into technology!
            </p>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-lg font-semibold">Subscribe to Tech Hub Academy on YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
