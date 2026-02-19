import { useState } from 'react';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
import About from './components/About';
import Contact from './components/Contact';
import CoursesPage from './pages/CoursesPage';
import GetStartedPage from './pages/GetStartedPage';

type Page = 'home' | 'courses' | 'getstarted';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return <CoursesPage onBack={() => setCurrentPage('home')} />;
      case 'getstarted':
        return <GetStartedPage onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <div className="min-h-screen">
            <Hero 
              onExplorePrograms={() => setCurrentPage('courses')} 
              onGetStarted={() => setCurrentPage('getstarted')} 
            />
            <MissionVision />
            <Programs />
            <About />
            <Contact />
          </div>
        );
    }
  };

  return renderPage();
}

export default App;
