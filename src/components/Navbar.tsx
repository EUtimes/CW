import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">
              CW
            </span>
          </div>
          
          <button className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;