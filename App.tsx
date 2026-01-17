
import React, { useState } from 'react';
import { Book, PenTool, MessageSquare, ChevronRight, GraduationCap, ArrowLeft, Star } from 'lucide-react';
import { AppView, Lesson } from './types';
import { CURRICULUM, TOPICS } from './data';
import TheoryView from './components/TheoryView';
import PracticeView from './components/PracticeView';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleLessonSelect = (lesson: Lesson, type: 'theory' | 'practice') => {
    setSelectedLesson(lesson);
    setCurrentView(type === 'theory' ? AppView.THEORY_DETAIL : AppView.PRACTICE_DETAIL);
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="text-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-400 rounded-full blur-[100px] opacity-20 -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 tracking-tight">
          Phòng Học <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">Khoa Học Ảo</span> 🧬
        </h1>
        <div className="inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full font-bold text-lg mb-8 shadow-lg shadow-pink-100 border border-pink-100 text-pink-600 hover:scale-105 transition-transform cursor-default">
           <GraduationCap size={24} /> Cô Thủy - Học là Mê
        </div>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Chào mừng các em đến với thế giới KHTN 7! <br/> Nơi kiến thức trở nên sinh động và việc học là một niềm vui bất tận. 🚀
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {/* Card 1: Theory */}
        <div 
          onClick={() => setCurrentView(AppView.THEORY_LIST)}
          className="bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer group border-b-8 border-blue-100 hover:border-blue-200 relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-6 transition duration-300 relative z-10 shadow-sm">
            <Book size={36} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition relative z-10">Kiến Thức Tổng Quan</h2>
          <p className="text-slate-500 mb-8 font-medium relative z-10">Kho tàng lý thuyết, sơ đồ tư duy và các bí kíp ghi nhớ siêu tốc.</p>
          <span className="flex items-center text-blue-600 font-bold text-sm bg-blue-50 w-fit px-4 py-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors relative z-10">
            Khám phá ngay <ChevronRight size={16} className="ml-1" />
          </span>
        </div>

        {/* Card 2: Practice */}
        <div 
          onClick={() => setCurrentView(AppView.PRACTICE_LIST)}
          className="bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer group border-b-8 border-green-100 hover:border-green-200 relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:-rotate-6 transition duration-300 relative z-10 shadow-sm">
            <PenTool size={36} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-green-600 transition relative z-10">Luyện Tập Theo Bài</h2>
          <p className="text-slate-500 mb-8 font-medium relative z-10">Thử thách bản thân với kho bài tập trắc nghiệm và tự luận phong phú.</p>
          <span className="flex items-center text-green-600 font-bold text-sm bg-green-50 w-fit px-4 py-2 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors relative z-10">
            Luyện tập ngay <ChevronRight size={16} className="ml-1" />
          </span>
        </div>

        {/* Card 3: Chatbot */}
        <div 
           className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer group text-white relative overflow-hidden border-b-8 border-rose-800"
        >
          <div className="absolute top-0 right-0 p-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm group-hover:scale-110 transition duration-300 shadow-inner">
            <MessageSquare size={36} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Hỏi Cô Thủy</h2>
          <p className="text-pink-100 mb-8 font-medium">Gặp gỡ Cô Thủy - Người truyền lửa đam mê. Hỏi đáp 24/7 siêu vui và bổ ích!</p>
          <span className="flex items-center text-rose-600 font-bold text-sm bg-white w-fit px-5 py-2.5 rounded-full shadow-lg group-hover:scale-105 transition-transform">
            Chat ngay 👇
          </span>
        </div>
      </div>
    </div>
  );

  const renderLessonList = (type: 'theory' | 'practice') => (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <button 
        onClick={() => setCurrentView(AppView.HOME)}
        className="mb-8 flex items-center gap-2 text-slate-400 hover:text-slate-800 font-bold transition bg-white px-4 py-2 rounded-full shadow-sm"
      >
        <ArrowLeft size={20} /> Quay lại lớp học
      </button>

      <div className="flex items-center gap-4 mb-10">
        <div className={`p-4 rounded-2xl ${type === 'theory' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
          {type === 'theory' ? <Book size={32}/> : <PenTool size={32}/>}
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          {type === 'theory' ? 'Thư Viện Kiến Thức' : 'Đấu Trường Luyện Tập'}
        </h2>
      </div>

      <div className="space-y-12">
        {TOPICS.map(topic => (
          <div key={topic} className="relative">
             <div className="sticky top-0 bg-slate-50/95 backdrop-blur py-3 z-10 mb-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <Star size={16} fill="currentColor"/> {topic}
                </h3>
             </div>
            <div className="grid md:grid-cols-2 gap-5">
              {CURRICULUM.filter(l => l.topic === topic).map(lesson => (
                <div 
                  key={lesson.id}
                  onClick={() => handleLessonSelect(lesson, type)}
                  className="bg-white p-6 rounded-3xl shadow-sm border-2 border-slate-100 hover:border-transparent hover:shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-between group relative overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 h-full w-2 bg-gradient-to-b ${lesson.colorTheme || 'from-slate-300 to-slate-400'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 font-bold text-xl text-white shadow-md bg-gradient-to-br ${lesson.colorTheme || 'from-slate-400 to-slate-500'}`}>
                      {lesson.title.match(/Bài (\d+)/)?.[1] || '?'}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition line-clamp-1">{lesson.title.split(':')[1]?.trim() || lesson.title}</h4>
                      <p className="text-sm text-slate-400 mt-1 font-medium">{type === 'theory' ? 'Đọc 5 phút' : `${lesson.practice.mcq.length} câu trắc nghiệm`}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-pink-200 selection:text-pink-900 text-slate-800 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      {currentView === AppView.HOME && renderHome()}
      {currentView === AppView.THEORY_LIST && renderLessonList('theory')}
      {currentView === AppView.PRACTICE_LIST && renderLessonList('practice')}
      
      {currentView === AppView.THEORY_DETAIL && selectedLesson && (
        <TheoryView 
          lesson={selectedLesson} 
          onBack={() => setCurrentView(AppView.THEORY_LIST)} 
          onOpenChat={() => {}} // Chat is global
        />
      )}
      
      {currentView === AppView.PRACTICE_DETAIL && selectedLesson && (
        <PracticeView 
          lesson={selectedLesson} 
          onBack={() => setCurrentView(AppView.PRACTICE_LIST)} 
        />
      )}

      {/* Global Chatbot */}
      <Chatbot />

      {/* Footer */}
      {currentView === AppView.HOME && (
        <footer className="py-8 text-center text-slate-400 text-sm mt-auto relative z-10">
          <p className="flex items-center justify-center gap-2">
            © 2024 Phòng Học KHTN 7 <span className="w-1 h-1 rounded-full bg-slate-300"></span> Cô Thủy: Học là Mê ❤️
          </p>
        </footer>
      )}
    </div>
  );
};

export default App;
