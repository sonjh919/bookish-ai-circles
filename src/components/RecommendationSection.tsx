
import { useState } from 'react';
import { BookOpen, Star, Clock, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RecommendationSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체', count: 12 },
    { id: 'tech', name: '기술/개발', count: 5 },
    { id: 'business', name: '비즈니스', count: 3 },
    { id: 'selfdev', name: '자기계발', count: 4 }
  ];

  const recommendations = [
    {
      id: 1,
      title: '클린 코드',
      author: '로버트 C. 마틴',
      category: 'tech',
      rating: 4.8,
      readTime: '약 2주',
      difficulty: '중급',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop',
      description: '좋은 코드를 작성하기 위한 필수 원칙들을 배워보세요',
      matchRate: 95,
      tags: ['프로그래밍', '코드품질', '개발원칙'],
      activeClubs: 3
    },
    {
      id: 2,
      title: '아토믹 해빗',
      author: '제임스 클리어',
      category: 'selfdev',
      rating: 4.9,
      readTime: '약 1주',
      difficulty: '초급',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop',
      description: '작은 습관의 힘으로 인생을 변화시키는 방법',
      matchRate: 88,
      tags: ['습관', '자기계발', '성장'],
      activeClubs: 7
    },
    {
      id: 3,
      title: '린 스타트업',
      author: '에릭 리스',
      category: 'business',
      rating: 4.7,
      readTime: '약 10일',
      difficulty: '중급',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop',
      description: '효율적인 창업과 제품 개발 방법론',
      matchRate: 82,
      tags: ['창업', '비즈니스', '혁신'],
      activeClubs: 2
    }
  ];

  const filteredRecommendations = selectedCategory === 'all' 
    ? recommendations 
    : recommendations.filter(book => book.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            AI가 추천하는 맞춤 도서
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            당신의 관심사와 독서 패턴을 분석하여 최적의 책을 추천해드립니다
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </button>
          ))}
        </div>

        {/* Book Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecommendations.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">
                    {book.matchRate}% 매칭
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {book.difficulty}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {book.title}
                </h3>
                <p className="text-slate-600 mb-1">{book.author}</p>
                <p className="text-sm text-slate-500 mb-4">{book.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{book.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{book.activeClubs}개 북클럽</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    독서 시작
                  </Button>
                  <Button variant="outline" className="flex-1">
                    북클럽 참여
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            더 많은 추천 보기
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
