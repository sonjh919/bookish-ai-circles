import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import RecommendationSection from '../components/RecommendationSection';
import BookClubSection from '../components/BookClubSection';
import ReadingHistory from '../components/ReadingHistory';
import Footer from '../components/Footer';
import TasteAnalysisModal from '../components/TasteAnalysisModal';
import ProgressTracker from '../components/ProgressTracker';
import DiscussionForum from '../components/DiscussionForum';
import ClubMatcher from '../components/ClubMatcher';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showTasteAnalysis, setShowTasteAnalysis] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const handleTasteAnalysisComplete = (profile: any) => {
    setUserProfile(profile);
    setShowTasteAnalysis(false);
    console.log('사용자 프로필 생성:', profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      
      {!currentUser ? (
        <>
          <Hero />
          <Features />
          
          {/* 6가지 핵심 기능 미리보기 섹션 */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  서비스 핵심 기능 미리보기
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                  로그인하시면 모든 기능을 직접 사용하실 수 있습니다
                </p>
              </div>

              {/* 기능 미리보기 탭 */}
              <Tabs defaultValue="recommendations" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 lg:w-fit mx-auto">
                  <TabsTrigger value="recommendations">도서 추천</TabsTrigger>
                  <TabsTrigger value="clubs">북클럽</TabsTrigger>
                  <TabsTrigger value="matcher">클럽 매칭</TabsTrigger>
                  <TabsTrigger value="progress">진도 관리</TabsTrigger>
                  <TabsTrigger value="discussion">토론방</TabsTrigger>
                  <TabsTrigger value="history">독서 기록</TabsTrigger>
                </TabsList>

                <TabsContent value="recommendations">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <RecommendationSection />
                  </div>
                </TabsContent>

                <TabsContent value="clubs">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <BookClubSection />
                  </div>
                </TabsContent>

                <TabsContent value="matcher">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <ClubMatcher userProfile={null} />
                  </div>
                </TabsContent>

                <TabsContent value="progress">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <ProgressTracker />
                  </div>
                </TabsContent>

                <TabsContent value="discussion">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <DiscussionForum />
                  </div>
                </TabsContent>

                <TabsContent value="history">
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <ReadingHistory />
                  </div>
                </TabsContent>
              </Tabs>

              {/* 로그인 유도 섹션 */}
              <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  지금 바로 시작하세요!
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  AI 기반 맞춤 추천과 북클럽 매칭으로 새로운 독서 여행을 시작해보세요
                </p>
                <button 
                  onClick={() => {
                    const loginButton = document.querySelector('[data-login-trigger]') as HTMLElement;
                    loginButton?.click();
                  }}
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  무료로 시작하기
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 사용자 로그인 후 대시보드 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              안녕하세요, {currentUser}님! 📚
            </h1>
            <p className="text-slate-600">
              오늘도 좋은 책과 함께 성장하는 하루 되세요.
            </p>
          </div>

          {/* 취향 분석 버튼 */}
          {!userProfile && (
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 mb-8 text-white">
              <h2 className="text-xl font-bold mb-2">AI 독서 취향 분석을 시작해보세요!</h2>
              <p className="mb-4 opacity-90">
                5분만 투자하면 더 정확한 도서 추천과 북클럽 매칭을 받을 수 있습니다.
              </p>
              <button
                onClick={() => setShowTasteAnalysis(true)}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                취향 분석 시작하기
              </button>
            </div>
          )}

          {/* 메인 탭 메뉴 */}
          <Tabs defaultValue="recommendations" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6 lg:w-fit">
              <TabsTrigger value="recommendations">도서 추천</TabsTrigger>
              <TabsTrigger value="clubs">북클럽</TabsTrigger>
              <TabsTrigger value="matcher">클럽 매칭</TabsTrigger>
              <TabsTrigger value="progress">진도 관리</TabsTrigger>
              <TabsTrigger value="discussion">토론방</TabsTrigger>
              <TabsTrigger value="history">독서 기록</TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations">
              <RecommendationSection />
            </TabsContent>

            <TabsContent value="clubs">
              <BookClubSection />
            </TabsContent>

            <TabsContent value="matcher">
              <ClubMatcher userProfile={userProfile} />
            </TabsContent>

            <TabsContent value="progress">
              <ProgressTracker />
            </TabsContent>

            <TabsContent value="discussion">
              <DiscussionForum />
            </TabsContent>

            <TabsContent value="history">
              <ReadingHistory />
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      <Footer />

      {/* 취향 분석 모달 */}
      <TasteAnalysisModal
        isOpen={showTasteAnalysis}
        onClose={() => setShowTasteAnalysis(false)}
        onComplete={handleTasteAnalysisComplete}
      />
    </div>
  );
};

export default Index;
