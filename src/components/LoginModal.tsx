
import { useState } from 'react';
import { X, User, Mail, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (userData: any) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    location: '',
    occupation: '',
    interests: [],
    readingGoal: ''
  });

  const [step, setStep] = useState(1);

  const interests = [
    '기술/개발', '문학/소설', '자기계발', '비즈니스', '역사', '과학',
    '예술/디자인', '철학', '심리학', '경제', '건강/의학', '여행'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900">회원가입</h2>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                1
              </div>
              <div className={`flex-1 h-1 rounded ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                2
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>이름</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="홍길동"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>이메일</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="hong@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">나이</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                      placeholder="25"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="location" className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>지역</span>
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="서울"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="occupation" className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4" />
                    <span>직업</span>
                  </Label>
                  <Input
                    id="occupation"
                    value={formData.occupation}
                    onChange={(e) => setFormData(prev => ({ ...prev, occupation: e.target.value }))}
                    placeholder="개발자"
                    required
                  />
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                  disabled={!formData.name || !formData.email || !formData.age || !formData.location || !formData.occupation}
                >
                  다음
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">관심 분야를 선택해주세요 (복수 선택 가능)</Label>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`p-3 rounded-lg border text-sm transition-all ${
                          formData.interests.includes(interest)
                            ? 'bg-blue-50 border-blue-200 text-blue-700'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="readingGoal">독서 목표</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, readingGoal: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="목표를 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hobby">취미로 독서하기</SelectItem>
                      <SelectItem value="growth">자기계발 및 성장</SelectItem>
                      <SelectItem value="career">커리어 전환 준비</SelectItem>
                      <SelectItem value="study">전문 지식 습득</SelectItem>
                      <SelectItem value="discussion">토론 및 교류</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex space-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    이전
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                    disabled={formData.interests.length === 0 || !formData.readingGoal}
                  >
                    가입 완료
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
