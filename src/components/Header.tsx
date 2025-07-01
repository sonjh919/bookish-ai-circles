
import { useState } from 'react';
import { BookOpen, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoginModal from './LoginModal';

interface HeaderProps {
  currentUser: any;
  setCurrentUser: (user: any) => void;
}

const Header = ({ currentUser, setCurrentUser }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLogin = (userData: any) => {
    setCurrentUser(userData);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  BookAI Club
                </h1>
                <p className="text-xs text-slate-500">AI 도서 추천 & 북클럽</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">기능</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">소개</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">문의</a>
            </nav>

            <div className="flex items-center space-x-4">
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 hidden sm:block">
                      {currentUser.name}님
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLogout}
                    className="text-slate-600"
                  >
                    로그아웃
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  시작하기
                </Button>
              )}

              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-3">
                <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">기능</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">소개</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">문의</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
};

export default Header;
