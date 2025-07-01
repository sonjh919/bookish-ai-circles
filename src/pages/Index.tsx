
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import RecommendationSection from '../components/RecommendationSection';
import BookClubSection from '../components/BookClubSection';
import ReadingHistory from '../components/ReadingHistory';
import Footer from '../components/Footer';

const Index = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {!currentUser ? (
        <>
          <Hero />
          <Features />
        </>
      ) : (
        <>
          <RecommendationSection />
          <BookClubSection />
          <ReadingHistory />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Index;
