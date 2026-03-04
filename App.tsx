
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import ClientsPage from './components/ClientsPage';
import ApplyPage from './components/ApplyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Function to determine current page from hash
    const getPageFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      // Normalize 'home' or empty string to 'home'
      if (!hash || hash === 'home') return 'home';
      return hash;
    };

    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };

    // Set initial state
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      case 'clients':
        return <ClientsPage />;
      case 'apply':
        return <ApplyPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
