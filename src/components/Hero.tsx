interface HeroProps {
  onExplorePrograms: () => void;
  onGetStarted: () => void;
}

export default function Hero({ onExplorePrograms, onGetStarted }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/image.png" 
              alt="Tech Hub Academy Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">Tech Hub Academy</span>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tech Hub Academy
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8">
            Empowering You with Digital Skills for Tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetStarted}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Started
            </button>
            <button
              onClick={onExplorePrograms}
              className="bg-blue-800 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border-2 border-blue-600"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
