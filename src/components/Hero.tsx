import React, { useEffect, useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Unlock Your <span className="bg-gradient-to-r from-indigo-900 to-purple-700 bg-clip-text text-transparent">Academic Potential</span> with Free Premium Courses
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Join the PW Telegram community and get immediate access to high-quality courses designed to help you excel in competitive exams like JEE and NEET.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="group">
                Join Telegram Channel
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Courses
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-indigo-900">50+</span>
                <span className="text-gray-600">Free Courses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-indigo-900">200K+</span>
                <span className="text-gray-600">Students</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-indigo-900">4.8/5</span>
                <span className="text-gray-600">Rating</span>
              </div>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg" 
                alt="Students learning with PW" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-indigo-900 mb-3">
                    Limited Time Offer
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Get Started Today!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;