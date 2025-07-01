
import { useState } from 'react';
import { BookOpen, TrendingUp, Calendar, Award, BarChart3, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ReadingHistory = () => {
  const [viewMode, setViewMode] = useState('chart');

  const readingStats = {
    totalBooks: 24,
    currentMonth: 3,
    averageRating: 4.2,
    totalPages: 6840,
    streakDays: 15,
    favoriteGenre: '기술/개발'
  };

  const monthlyData = [
    { month: '1월', books: 2, pages: 580 },
    { month: '2월', books: 3, pages: 720 },
    { month: '3월', books: 4, pages: 890 },
    { month: '4월', books: 3, pages: 650 },
    { month: '5월', books: 5, pages: 1200 },
    { month: '6월', books: 4, pages: 980 },
    { month: '7월', books: 3, pages: 820 }
  ];

  const recentBooks = [
    {
      id: 1,
      title: '클린 코드',
      author: '로버트 C. 마틴',
      completedDate: '2024-06-28',
      rating: 5,
      pages: 464,
      readingTime: '2주',
      notes: '정말 유용한 책이었습니다. 실무에 바로 적용할 수 있는 원칙들이 많았어요.',
      genre: '기술/개발'
    },
    {
      id: 2,
      title: '아토믹 해빗',
      author: '제임스 클리어',
      completedDate: '2024-06-15',
      rating: 4,
      pages: 320,
      readingTime: '1주',
      notes: '습관의 중요성을 다시 한번 깨달았습니다. 작은 변화가 큰 결과를 만든다.',
      genre: '자기계발'
    },
    {
      id: 3,
      title: 'JavaScript 완벽 가이드',
      author: '데이비드 플래너건',
      completedDate: '2024-05-30',
      rating: 5,
      pages: 688,
      readingTime: '3주',
      notes: 'JavaScript의 모든 것을 담고 있는 책. 초보자보다는 중급자에게 추천.',
      genre: '기술/개발'
    }
  ];

  const achievements = [
    { id: 1, title: '독서 마라토너', description: '한 달에 5권 이상 완독', earned: true },
    { id: 2, title: '꾸준한 독서가', description: '15일 연속 독서', earned: true },
    { id: 3, title: '장르 탐험가', description: '5개 이상 다른 장르 독서', earned: false },
    { id: 4, title: '리뷰 작가', description: '10개 이상 상세한 리뷰 작성', earned: true }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            나의 독서 여정
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            지금까지의 독서 기록과 성장 과정을 한눈에 확인해보세요
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">{readingStats.totalBooks}</div>
            <div className="text-sm text-slate-600">총 완독</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
            <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">{readingStats.currentMonth}</div>
            <div className="text-sm text-slate-600">이번 달</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
            <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">{readingStats.averageRating}</div>
            <div className="text-sm text-slate-600">평균 평점</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
            <BarChart3 className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">{readingStats.totalPages.toLocaleString()}</div>
            <div className="text-sm text-slate-600">총 페이지</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
            <Award className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">{readingStats.streakDays}</div>
            <div className="text-sm text-slate-600">연속 일수</div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
            <Eye className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
            <div className="text-lg font-bold text-slate-900">{readingStats.favoriteGenre}</div>
            <div className="text-sm text-slate-600">선호 장르</div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1 border border-slate-200">
            <button
              onClick={() => setViewMode('chart')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'chart'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              통계 차트
            </button>
            <button
              onClick={() => setViewMode('books')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'books'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              최근 완독
            </button>
            <button
              onClick={() => setViewMode('achievements')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'achievements'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              성취 배지
            </button>
          </div>
        </div>

        {/* Chart View */}
        {viewMode === 'chart' && (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">월별 독서 현황</h3>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium text-slate-600">{data.month}</div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-700">완독: {data.books}권</span>
                      <span className="text-slate-500">{data.pages}페이지</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(data.books / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Books View */}
        {viewMode === 'books' && (
          <div className="space-y-6">
            {recentBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{book.title}</h3>
                    <p className="text-slate-600 mb-2">{book.author}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>완독일: {book.completedDate}</span>
                      <span>독서 기간: {book.readingTime}</span>
                      <span>{book.pages}페이지</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < book.rating ? 'text-yellow-400' : 'text-slate-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <Badge variant="secondary">{book.genre}</Badge>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">내 감상평</h4>
                  <p className="text-slate-700 leading-relaxed">{book.notes}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievements View */}
        {viewMode === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-6 rounded-2xl border transition-all ${
                  achievement.earned
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      achievement.earned
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400'
                        : 'bg-slate-200'
                    }`}
                  >
                    <Award
                      className={`h-8 w-8 ${
                        achievement.earned ? 'text-white' : 'text-slate-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-bold mb-1 ${
                        achievement.earned ? 'text-slate-900' : 'text-slate-500'
                      }`}
                    >
                      {achievement.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        achievement.earned ? 'text-slate-700' : 'text-slate-500'
                      }`}
                    >
                      {achievement.description}
                    </p>
                    {achievement.earned && (
                      <Badge className="mt-2 bg-yellow-500 text-white">
                        달성 완료
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            상세 리포트 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadingHistory;
