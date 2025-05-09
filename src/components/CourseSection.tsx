import React, { useState } from 'react';
import Card from './ui/Card';
import Section from './ui/Section';
import { Clock, BookOpen, BarChart } from 'lucide-react';
import { courses, Course } from '../constants/courses';
import Button from './ui/Button';

const CourseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(courses.map(course => course.category)))];
  
  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <Section id="courses" className="bg-white relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Premium Courses, <span className="text-indigo-900">Completely Free</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access top-quality courses designed by expert educators to help you excel in your exams and academic journey.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-indigo-900 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          View All Courses
        </Button>
      </div>
    </Section>
  );
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <Card hoverEffect className="h-full flex flex-col">
      <div className="relative">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full text-xs font-medium text-indigo-900">
          {course.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
        
        <div className="flex flex-wrap gap-y-2 justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{course.level}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5 pt-0">
        <Button variant="primary" className="w-full">
          Get Free Access
        </Button>
      </div>
    </Card>
  );
};

export default CourseSection;