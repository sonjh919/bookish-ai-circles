
import { useState } from 'react';
import { Users, MessageSquare, Calendar, Star, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const BookClubSection = () => {
  const [activeTab, setActiveTab] = useState('recommended');

  const bookClubs = [
    {
      id: 1,
      name: '초보 개발자 성장 클럽',
      book: '클린 코드',
      members: 12,
      maxMembers: 15,
      progress: 45,
      nextMeeting: '2024-07-15',
      location: '온라인',
      tags: ['개발', '초보환영', '실습중심'],
      description: '개발 입문자들과 함께 클린 코드를 읽으며 실무 경험을 나누는 클럽입니다.',
      organizer: '김개발',
      rating: 4.8,
      recentActivity: '방금 전',
      matchRate: 95
    },
    {
      id: 2,
      name: '습관 만들기 챌린지',
      book: '아토믹 해빗',
      members: 24,
      maxMembers: 30,
      progress: 30,
      nextMeeting: '2024-07-12',
      location: '온라인',
      tags: ['자기계발', '습관', '챌린지'],
      description: '작은 습관으로 큰 변화를 만들어가는 사람들의 모임입니다.',
      organizer: '박성장',
      rating: 4.9,
      recentActivity: '5분 전',
      matchRate: 88
    },
    {
      id: 3,
      name: '스타트업 창업 스터디',
      book: '린 스타트업',
      members: 8,
      maxMembers: 12,
      progress: 60,
      nextMeeting: '2024-07-18',
      location: '강남구',
      tags: ['창업', '비즈니스', '오프라인'],
      description: '창업을 꿈꾸는 사람들이 모여 실전 경험을 나누는 스터디입니다.',
      organizer: '이창업',
      rating: 4.7,
      recentActivity: '1시간 전',
      matchRate: 82
    }
  ];

  const myClubs = [
    {
      id: 4,
      name: '웹 개발 마스터 클럽',
      book: 'JavaScript 완벽 가이드',
      members: 15,
      progress: 75,
      nextMeeting: '2024-07-10',
      recentMessages: 23,
      unreadCount: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            북클럽에서 함께 성장하세요
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            비슷한 관심사를 가진 사람들과 책을 읽고 토론하며 더 깊은 인사이트를 얻어보세요
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('recommended')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'recommended'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              추천 북클럽
            </button>
            <button
              onClick={() => setActiveTab('my-clubs')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'my-clubs'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              내 북클럽
            </button>
          </div>
        </div>

        {/* Recommended Book Clubs */}
        {activeTab === 'recommended' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {bookClubs.map((club) => (
              <div
                key={club.id}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {club.name}
                      </h3>
                      <Badge className="bg-green-100 text-green-700 text-xs">
                        {club.matchRate}% 매칭
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">현재 읽는 책: {club.book}</p>
                    <p className="text-sm text-slate-600">{club.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {club.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>{club.members}/{club.maxMembers}명</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{club.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>다음 모임: {club.nextMeeting}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>{club.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">진행률</span>
                      <span className="font-medium">{club.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${club.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                        {club.organizer[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{club.organizer}</p>
                      <p className="text-xs text-slate-500">운영자 • {club.recentActivity}</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    참여하기
                  </Button>
                  <Button variant="outline" className="flex-1">
                    자세히 보기
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* My Book Clubs */}
        {activeTab === 'my-clubs' && (
          <div className="space-y-6">
            {myClubs.map((club) => (
              <div
                key={club.id}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{club.name}</h3>
                    <p className="text-slate-600">현재 읽는 책: {club.book}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-blue-600 text-white mb-2">
                      참여 중
                    </Badge>
                    <p className="text-sm text-slate-600">다음 모임: {club.nextMeeting}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{club.members}</p>
                    <p className="text-xs text-slate-600">참여자</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <MessageSquare className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-slate-900">{club.recentMessages}</p>
                    <p className="text-xs text-slate-600">최근 메시지</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-slate-900">{club.progress}%</div>
                    <p className="text-xs text-slate-600">진행률</p>
                    <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${club.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    토론 참여하기
                  </Button>
                  <Button variant="outline">
                    진도 업데이트
                  </Button>
                  {club.unreadCount > 0 && (
                    <Button variant="outline" className="relative">
                      메시지 확인
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">
                        {club.unreadCount}
                      </Badge>
                    </Button>
                  )}
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
            새 북클럽 만들기
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookClubSection;
