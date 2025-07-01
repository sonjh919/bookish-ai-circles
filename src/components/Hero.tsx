
import { BookOpen, Brain, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            AI가 추천하는
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              나만의 책과 북클럽
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            당신의 독서 취향을 AI가 분석하여 완벽한 도서를 추천하고, 
            비슷한 관심사를 가진 사람들과 함께하는 북클럽을 매칭해드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-3"
            >
              무료로 시작하기
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 border-slate-300 hover:bg-slate-50"
            >
              서비스 둘러보기
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">맞춤 도서 추천</h3>
              <p className="text-slate-600">AI가 당신의 취향을 분석하여 완벽한 책을 추천합니다</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-md transition-all">
              <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">스마트 북클럽 매칭</h3>
              <p className="text-slate-600">비슷한 관심사의 사람들과 자동으로 북클럽을 구성합니다</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-md transition-all">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">독서 성장 추적</h3>
              <p className="text-slate-600">개인별 독서 히스토리와 성장 과정을 시각화합니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
