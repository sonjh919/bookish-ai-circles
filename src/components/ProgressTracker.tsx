
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Target, Calendar, BookOpen, Clock, Award } from 'lucide-react';

const ProgressTracker = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: '월간 독서 목표',
      target: 4,
      current: 2,
      type: 'monthly',
      deadline: '2024-07-31',
      books: ['클린 코드', '아토믹 해빗']
    },
    {
      id: 2,
      title: '기술서적 마스터하기',
      target: 3,
      current: 1,
      type: 'skill',
      deadline: '2024-08-15',
      books: ['JavaScript 완벽 가이드']
    }
  ]);

  const [currentBooks, setCurrentBooks] = useState([
    {
      id: 1,
      title: '린 스타트업',
      author: '에릭 리스',
      totalPages: 336,
      currentPage: 150,
      startDate: '2024-07-01',
      targetDate: '2024-07-15',
      sessions: [
        { date: '2024-07-01', pages: 30, duration: 45 },
        { date: '2024-07-02', pages: 25, duration: 40 },
        { date: '2024-07-03', pages: 35, duration: 50 },
        { date: '2024-07-05', pages: 40, duration: 60 },
        { date: '2024-07-06', pages: 20, duration: 30 }
      ]
    }
  ]);

  const updateProgress = (bookId: number, newPage: number) => {
    setCurrentBooks(books => 
      books.map(book => 
        book.id === bookId ? { ...book, currentPage: newPage } : book
      )
    );
  };

  const addReadingSession = (bookId: number, pages: number, duration: number) => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentBooks(books =>
      books.map(book =>
        book.id === bookId
          ? {
              ...book,
              currentPage: book.currentPage + pages,
              sessions: [...book.sessions, { date: today, pages, duration }]
            }
          : book
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* 목표 관리 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-blue-600" />
            <span>독서 목표</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {goals.map(goal => (
            <div key={goal.id} className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{goal.title}</h4>
                  <p className="text-sm text-slate-600">
                    마감일: {goal.deadline}
                  </p>
                </div>
                <Badge variant={goal.current >= goal.target ? "default" : "secondary"}>
                  {goal.current}/{goal.target}
                </Badge>
              </div>
              
              <Progress 
                value={(goal.current / goal.target) * 100} 
                className="h-3"
              />
              
              {goal.books.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {goal.books.map((book, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {book}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 현재 읽고 있는 책 */}
      {currentBooks.map(book => (
        <Card key={book.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                <span>{book.title}</span>
              </div>
              <Badge className="bg-green-100 text-green-700">
                {Math.round((book.currentPage / book.totalPages) * 100)}%
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {book.currentPage}
                </div>
                <div className="text-sm text-slate-600">현재 페이지</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {book.totalPages - book.currentPage}
                </div>
                <div className="text-sm text-slate-600">남은 페이지</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {book.sessions.length}
                </div>
                <div className="text-sm text-slate-600">독서 세션</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">
                  {Math.round(book.sessions.reduce((acc, s) => acc + s.duration, 0) / 60)}
                </div>
                <div className="text-sm text-slate-600">총 시간(h)</div>
              </div>
            </div>

            <Progress 
              value={(book.currentPage / book.totalPages) * 100} 
              className="h-4"
            />

            <div className="flex gap-2">
              <Button 
                size="sm"
                onClick={() => {
                  const pages = prompt('오늘 읽은 페이지 수를 입력하세요:');
                  const duration = prompt('독서 시간을 분 단위로 입력하세요:');
                  if (pages && duration) {
                    addReadingSession(book.id, parseInt(pages), parseInt(duration));
                  }
                }}
                className="bg-green-600 hover:bg-green-700"
              >
                진도 업데이트
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => {
                  const page = prompt(`현재 페이지를 입력하세요 (1-${book.totalPages}):`);
                  if (page) {
                    updateProgress(book.id, parseInt(page));
                  }
                }}
              >
                페이지 수정
              </Button>
            </div>

            {/* 최근 독서 기록 */}
            <div className="space-y-2">
              <h5 className="font-medium text-slate-900">최근 독서 기록</h5>
              <div className="space-y-1">
                {book.sessions.slice(-3).reverse().map((session, index) => (
                  <div key={index} className="flex justify-between text-sm bg-slate-50 p-2 rounded">
                    <span>{session.date}</span>
                    <span>{session.pages}페이지</span>
                    <span>{session.duration}분</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProgressTracker;
