
import { Brain, Users, BookOpen, BarChart3, MessageSquare, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI 기반 취향 분석',
      description: '독서 패턴과 감상 후기를 분석하여 정확한 맞춤 추천을 제공합니다',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      title: '스마트 도서 추천',
      description: '개인의 성향, 목표, 독서 수준을 고려한 최적의 도서를 추천합니다',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Users,
      title: '자동 북클럽 매칭',
      description: '관심사와 독서 속도가 비슷한 사람들과 자동으로 북클럽을 구성합니다',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      title: '온라인 토론 & Q&A',
      description: '북클럽 내에서 활발한 토론과 질의응답을 통해 깊이 있는 독서 경험을 제공합니다',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: '독서 히스토리 시각화',
      description: '개인의 독서 기록과 성장 과정을 아름다운 차트로 확인할 수 있습니다',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Target,
      title: '진도 체크 & 목표 관리',
      description: '독서 목표 설정부터 진도 관리까지 체계적인 독서 습관을 도와줍니다',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            AI가 만드는 새로운 독서 경험
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            개인화된 추천부터 커뮤니티 활동까지, 독서의 모든 여정을 함께합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            지금 시작해보세요!
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            AI가 분석한 맞춤 추천과 북클럽 매칭으로 새로운 독서 여행을 시작하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              무료 체험하기
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
