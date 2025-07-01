
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, BookOpen, Users, Target } from 'lucide-react';

interface TasteAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (profile: any) => void;
}

const TasteAnalysisModal = ({ isOpen, onClose, onComplete }: TasteAnalysisModalProps) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<any>({});

  const questions = [
    {
      id: 1,
      title: '독서 목적은 무엇인가요?',
      type: 'multiple',
      options: ['자기계발', '전문지식 습득', '취미/오락', '교양 쌓기', '업무 도움']
    },
    {
      id: 2,
      title: '선호하는 장르를 선택해주세요 (복수 선택 가능)',
      type: 'checkbox',
      options: ['기술/개발', '비즈니스', '자기계발', '소설', '에세이', '인문학', '과학', '예술']
    },
    {
      id: 3,
      title: '독서 난이도 선호도는?',
      type: 'single',
      options: ['초급자용 (쉽고 이해하기 쉬운)', '중급자용 (적당한 깊이)', '고급자용 (전문적이고 깊이 있는)']
    },
    {
      id: 4,
      title: '한 달 독서량은?',
      type: 'single',
      options: ['1-2권', '3-4권', '5-6권', '7권 이상']
    },
    {
      id: 5,
      title: '북클럽 참여 스타일은?',
      type: 'single',
      options: ['적극적 토론 참여', '조용히 의견 공유', '진도만 맞춰서 참여', 'Q&A 위주 참여']
    }
  ];

  const handleAnswer = (questionId: number, answer: string | string[]) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const nextStep = () => {
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      // AI 분석 시뮬레이션
      const analysisResult = analyzeUserTaste(answers);
      onComplete(analysisResult);
    }
  };

  const analyzeUserTaste = (userAnswers: any) => {
    // AI 분석 시뮬레이션 로직
    const genres = Array.isArray(userAnswers[2]) ? userAnswers[2] : [userAnswers[2]];
    const difficulty = userAnswers[3];
    const readingVolume = userAnswers[4];
    const clubStyle = userAnswers[5];

    return {
      primaryGenres: genres.slice(0, 3),
      difficulty: difficulty,
      readingPace: readingVolume,
      clubPreference: clubStyle,
      personalityType: genres.includes('기술/개발') ? 'analytical' : 'creative',
      recommendationScore: Math.floor(Math.random() * 20) + 80, // 80-100점
      matchingKeywords: [...genres, difficulty, clubStyle].filter(Boolean)
    };
  };

  const currentQuestion = questions[step - 1];
  const progress = (step / questions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span>AI 독서 취향 분석</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>진행률</span>
              <span>{step}/{questions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{currentQuestion.title}</h3>
            
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (currentQuestion.type === 'checkbox') {
                      const current = answers[currentQuestion.id] || [];
                      const updated = current.includes(option)
                        ? current.filter((item: string) => item !== option)
                        : [...current, option];
                      handleAnswer(currentQuestion.id, updated);
                    } else {
                      handleAnswer(currentQuestion.id, option);
                    }
                  }}
                  className={`p-4 text-left border rounded-xl transition-all ${
                    (currentQuestion.type === 'checkbox' 
                      ? (answers[currentQuestion.id] || []).includes(option)
                      : answers[currentQuestion.id] === option)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              이전
            </Button>
            <Button 
              onClick={nextStep}
              disabled={!answers[currentQuestion.id]}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {step === questions.length ? '분석 완료' : '다음'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TasteAnalysisModal;
