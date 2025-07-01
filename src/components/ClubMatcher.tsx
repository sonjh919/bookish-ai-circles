
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, Zap, BookOpen, MapPin, Calendar, Star } from 'lucide-react';

const ClubMatcher = ({ userProfile }: { userProfile: any }) => {
  const [matchingProcess, setMatchingProcess] = useState('idle'); // idle, analyzing, matching, complete
  const [matchedClubs, setMatchedClubs] = useState<any[]>([]);
  const [analysisStep, setAnalysisStep] = useState(0);

  const analysisSteps = [
    '사용자 프로필 분석 중...',
    '독서 취향 패턴 분석 중...',
    '유사한 관심사 사용자 검색 중...',
    '북클럽 매칭 알고리즘 실행 중...',
    '최적의 매칭 결과 도출 중...'
  ];

  const mockClubDatabase = [
    {
      id: 1,
      name: '초보 개발자 성장 클럽',
      book: '클린 코드',
      members: ['김개발', '박코딩', '이프로그래밍'],
      maxMembers: 15,
      currentMembers: 12,
      averageAge: 28,
      averageExperience: '1-3년',
      meetingStyle: '온라인',
      meetingFrequency: '주 1회',
      tags: ['개발', '초보환영', '실습중심'],
      matchingScore: 0,
      compatibility: {
        genre: 95,
        difficulty: 90,
        pace: 85,
        style: 88
      },
      description: '개발 입문자들을 위한 클린 코드 스터디입니다.'
    },
    {
      id: 2,
      name: '습관 만들기 챌린지',
      book: '아토믹 해빗',
      members: ['박성장', '이변화', '정습관'],
      maxMembers: 20,
      currentMembers: 18,
      averageAge: 32,
      averageExperience: '다양',
      meetingStyle: '온라인',
      meetingFrequency: '주 2회',
      tags: ['자기계발', '습관', '챌린지'],
      matchingScore: 0,
      compatibility: {
        genre: 80,
        difficulty: 85,
        pace: 90,
        style: 82
      },
      description: '좋은 습관을 만들어가는 사람들의 모임입니다.'
    },
    {
      id: 3,
      name: '창업 준비 스터디',
      book: '린 스타트업',
      members: ['이창업', '박비즈니스', '김혁신'],
      maxMembers: 12,
      currentMembers: 8,
      averageAge: 30,
      averageExperience: '5년+',
      meetingStyle: '오프라인',
      meetingFrequency: '격주 1회',
      tags: ['창업', '비즈니스', '실전'],
      matchingScore: 0,
      compatibility: {
        genre: 75,
        difficulty: 95,
        pace: 70,
        style: 75
      },
      description: '실전 창업 경험을 나누는 스터디입니다.'
    }
  ];

  const startMatching = () => {
    setMatchingProcess('analyzing');
    setAnalysisStep(0);

    // 분석 과정 시뮬레이션
    const interval = setInterval(() => {
      setAnalysisStep(prev => {
        if (prev < analysisSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setMatchingProcess('complete');
            performMatching();
          }, 1000);
          return prev;
        }
      });
    }, 1500);
  };

  const performMatching = () => {
    // AI 매칭 알고리즘 시뮬레이션
    const scoredClubs = mockClubDatabase.map(club => {
      const genreMatch = userProfile?.primaryGenres ? 
        userProfile.primaryGenres.some((genre: string) => 
          club.tags.some(tag => tag.includes(genre) || genre.includes(tag))
        ) ? 95 : 60 : 80;

      const difficultyMatch = userProfile?.difficulty === '초급자용' && 
        club.tags.includes('초보환영') ? 95 : 75;

      const paceMatch = Math.random() * 30 + 70;
      const styleMatch = Math.random() * 25 + 75;

      const overallScore = (genreMatch + difficultyMatch + paceMatch + styleMatch) / 4;

      return {
        ...club,
        matchingScore: Math.round(overallScore),
        compatibility: {
          genre: genreMatch,
          difficulty: difficultyMatch,
          pace: paceMatch,
          style: styleMatch
        }
      };
    }).sort((a, b) => b.matchingScore - a.matchingScore);

    setMatchedClubs(scoredClubs);
  };

  const joinClub = (clubId: number) => {
    // 북클럽 참여 로직 (mock)
    console.log(`북클럽 ${clubId} 참여 신청`);
    alert('북클럽 참여 신청이 완료되었습니다!');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            <span>AI 북클럽 자동 매칭</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {matchingProcess === 'idle' ? (
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  맞춤형 북클럽을 찾아드릴게요!
                </h3>
                <p className="text-slate-600 mb-4">
                  AI가 당신의 독서 취향과 스타일을 분석하여 최적의 북클럽을 매칭해드립니다
                </p>
                <Button 
                  onClick={startMatching}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  매칭 시작하기
                </Button>
              </div>
            </div>
          ) : matchingProcess === 'analyzing' ? (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  AI 분석 중...
                </h3>
                <p className="text-slate-600">{analysisSteps[analysisStep]}</p>
              </div>
              <Progress value={((analysisStep + 1) / analysisSteps.length) * 100} className="h-3" />
            </div>
          ) : (
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-green-600">매칭 완료!</h3>
              <p className="text-slate-600">당신에게 완벽한 북클럽들을 찾았습니다</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 매칭 결과 */}
      {matchingProcess === 'complete' && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">추천 북클럽</h2>
          {matchedClubs.map((club, index) => (
            <Card key={club.id} className={`${index === 0 ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold text-slate-900">{club.name}</h3>
                      {index === 0 && (
                        <Badge className="bg-yellow-500 text-white">
                          BEST MATCH
                        </Badge>
                      )}
                      <Badge className="bg-green-500 text-white">
                        {club.matchingScore}% 매칭
                      </Badge>
                    </div>
                    <p className="text-slate-600 mb-2">현재 읽는 책: {club.book}</p>
                    <p className="text-sm text-slate-500">{club.description}</p>
                  </div>
                </div>

                {/* 매칭 상세 점수 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">
                      {club.compatibility.genre}%
                    </div>
                    <div className="text-xs text-slate-600">장르 매칭</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">
                      {club.compatibility.difficulty}%
                    </div>
                    <div className="text-xs text-slate-600">난이도 매칭</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">
                      {club.compatibility.pace}%
                    </div>
                    <div className="text-xs text-slate-600">속도 매칭</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">
                      {club.compatibility.style}%
                    </div>
                    <div className="text-xs text-slate-600">스타일 매칭</div>
                  </div>
                </div>

                {/* 클럽 정보 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Users className="h-4 w-4" />
                    <span>{club.currentMembers}/{club.maxMembers}명</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <Calendar className="h-4 w-4" />
                    <span>{club.meetingFrequency}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-600">
                    <MapPin className="h-4 w-4" />
                    <span>{club.meetingStyle}</span>
                  </div>
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {club.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* 멤버 정보 */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-slate-600">멤버:</span>
                  <div className="flex -space-x-2">
                    {club.members.slice(0, 3).map((member, memberIndex) => (
                      <Avatar key={memberIndex} className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                          {member[0]}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {club.members.length > 3 && (
                      <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center">
                        <span className="text-xs text-slate-600">+{club.members.length - 3}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    onClick={() => joinClub(club.id)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    참여 신청
                  </Button>
                  <Button variant="outline" className="flex-1">
                    자세히 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClubMatcher;
