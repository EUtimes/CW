import React, { useEffect, useState, useRef } from 'react';
import Section from './ui/Section';
import { Award, BookOpen, Clock, Users, Monitor, FileText } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <Section id="benefits" className="bg-gradient-to-b from-white to-indigo-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Why Join Our <span className="text-indigo-900">Telegram Community</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Joining our Telegram channel unlocks a world of educational benefits that will transform your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard 
          icon={<BookOpen className="h-10 w-10 text-indigo-900" />}
          title="Premium Course Access"
          description="Get immediate access to our complete library of premium educational content completely free."
        />
        
        <BenefitCard 
          icon={<Award className="h-10 w-10 text-indigo-900" />}
          title="Expert Educators"
          description="Learn from top PW faculty who have helped thousands of students crack competitive exams."
        />
        
        <BenefitCard 
          icon={<Clock className="h-10 w-10 text-indigo-900" />}
          title="Lifetime Access"
          description="Once you join, you'll have unlimited access to all course materials without any time restrictions."
        />
        
        <BenefitCard 
          icon={<Users className="h-10 w-10 text-indigo-900" />}
          title="Community Support"
          description="Connect with fellow students to collaborate, share insights, and solve problems together."
        />
        
        <BenefitCard 
          icon={<Monitor className="h-10 w-10 text-indigo-900" />}
          title="Interactive Learning"
          description="Engage with interactive quizzes, problem-solving sessions, and live doubt-clearing webinars."
        />
        
        <BenefitCard 
          icon={<FileText className="h-10 w-10 text-indigo-900" />}
          title="Study Materials"
          description="Download comprehensive notes, practice questions, and cheat sheets for offline study."
        />
      </div>
    </Section>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`
        bg-white rounded-xl p-6 shadow-md border border-gray-100
        transition-all duration-700 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Benefits;