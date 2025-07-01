
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, ThumbsUp, Clock, HelpCircle, Users } from 'lucide-react';

const DiscussionForum = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [newPost, setNewPost] = useState('');

  const discussions = [
    {
      id: 1,
      type: 'discussion',
      title: '클린 코드 3장 - 함수에 대한 의견 나누기',
      author: '김개발',
      content: '함수는 한 가지 일만 해야 한다는 원칙에 대해 어떻게 생각하시나요? 실제 프로젝트에서는 어떻게 적용하고 계신지 궁금합니다.',
      likes: 12,
      replies: 8,
      timestamp: '2시간 전',
      chapter: '3장',
      tags: ['함수', '클린코드', '원칙']
    },
    {
      id: 2,
      type: 'question',
      title: 'JavaScript 완벽가이드 - 클로저 개념 질문',
      author: '박학습',
      content: '클로저가 메모리 누수를 일으킬 수 있다고 하는데, 구체적으로 어떤 상황에서 그런 일이 발생하나요?',
      likes: 5,
      replies: 3,
      timestamp: '4시간 전',
      chapter: '8장',
      tags: ['JavaScript', '클로저', '메모리'],
      solved: false
    },
    {
      id: 3,
      type: 'sharing',
      title: '아토믹 해빗 - 실제 적용 경험 공유',
      author: '이실천',
      content: '책에서 나온 2분 룰을 실제로 적용해봤는데 정말 효과가 있었습니다. 제가 시도한 방법들을 공유해볼게요.',
      likes: 18,
      replies: 12,
      timestamp: '1일 전',
      chapter: '전체',
      tags: ['습관', '실천', '경험담']
    }
  ];

  const replies = {
    1: [
      {
        id: 1,
        author: '최코딩',
        content: '저도 처음에는 이 원칙이 너무 이상적이라고 생각했는데, 실제로 적용해보니 코드 가독성이 훨씬 좋아졌어요. 특히 테스트 작성할 때 차이를 많이 느꼈습니다.',
        likes: 5,
        timestamp: '1시간 전'
      },
      {
        id: 2,
        author: '정리팩터',
        content: '완전히 동의합니다. 다만 때로는 성능상의 이유로 여러 작업을 한 함수에서 처리해야 할 때도 있더라고요. 이런 경우엔 어떻게 접근하시나요?',
        likes: 3,
        timestamp: '30분 전'
      }
    ]
  };

  const [selectedDiscussion, setSelectedDiscussion] = useState<number | null>(null);

  const handleSubmitPost = () => {
    if (newPost.trim()) {
      // 새 게시글 추가 로직 (mock)
      console.log('새 게시글:', newPost);
      setNewPost('');
    }
  };

  return (
    <div className="space-y-6">
      {/* 탭 네비게이션 */}
      <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('discussions')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            activeTab === 'discussions'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          토론방
        </button>
        <button
          onClick={() => setActiveTab('questions')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            activeTab === 'questions'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Q&A
        </button>
        <button
          onClick={() => setActiveTab('sharing')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            activeTab === 'sharing'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          경험 공유
        </button>
      </div>

      {/* 새 게시글 작성 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">새 글 작성</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="북클럽 멤버들과 나누고 싶은 이야기를 작성해주세요..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Badge variant="outline">토론</Badge>
              <Badge variant="outline">질문</Badge>
              <Badge variant="outline">공유</Badge>
            </div>
            <Button 
              onClick={handleSubmitPost}
              disabled={!newPost.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              게시하기
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 게시글 목록 */}
      <div className="space-y-4">
        {discussions
          .filter(post => 
            activeTab === 'discussions' ? post.type === 'discussion' :
            activeTab === 'questions' ? post.type === 'question' :
            post.type === 'sharing'
          )
          .map(post => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {post.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-slate-900">{post.title}</h3>
                        {post.type === 'question' && (
                          <Badge variant={post.solved ? "default" : "secondary"}>
                            {post.solved ? '해결됨' : '미해결'}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        <span>{post.timestamp}</span>
                      </div>
                    </div>

                    <p className="text-slate-700">{post.content}</p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        {post.chapter}
                      </Badge>
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-slate-600 hover:text-blue-600">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button 
                          className="flex items-center space-x-1 text-slate-600 hover:text-blue-600"
                          onClick={() => setSelectedDiscussion(selectedDiscussion === post.id ? null : post.id)}
                        >
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-sm">{post.replies}개 댓글</span>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <Users className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* 댓글 섹션 */}
                    {selectedDiscussion === post.id && replies[post.id] && (
                      <div className="space-y-3 pt-4 border-t border-slate-200">
                        {replies[post.id].map(reply => (
                          <div key={reply.id} className="flex items-start space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-slate-100 text-slate-600 text-sm">
                                {reply.author[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-sm">{reply.author}</span>
                                <span className="text-xs text-slate-500">{reply.timestamp}</span>
                              </div>
                              <p className="text-sm text-slate-700">{reply.content}</p>
                              <button className="flex items-center space-x-1 text-xs text-slate-500 hover:text-blue-600 mt-1">
                                <ThumbsUp className="h-3 w-3" />
                                <span>{reply.likes}</span>
                              </button>
                            </div>
                          </div>
                        ))}
                        <div className="pt-2">
                          <Textarea
                            placeholder="댓글을 작성해주세요..."
                            className="text-sm"
                            rows={2}
                          />
                          <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                            댓글 작성
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
