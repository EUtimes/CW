import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'jee',
    title: 'JEE (Main & Advanced)',
    description: 'Master Physics, Chemistry & Mathematics with top educators',
    students: '500K+',
    image: 'https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg'
  },
  {
    id: 'neet',
    title: 'NEET-UG',
    description: 'Comprehensive preparation for Biology, Physics & Chemistry',
    students: '300K+',
    image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg'
  },
  {
    id: 'boards-12',
    title: 'Class 12 Boards',
    description: 'Excel in your board exams with structured study material',
    students: '200K+',
    image: 'https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg'
  },
  {
    id: 'boards-11',
    title: 'Class 11',
    description: 'Build strong foundations for competitive exams',
    students: '150K+',
    image: 'https://images.pexels.com/photos/4778664/pexels-photo-4778664.jpeg'
  },
  {
    id: 'boards-10',
    title: 'Class 10 Boards',
    description: 'Prepare for boards with expert guidance',
    students: '250K+',
    image: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg'
  },
  {
    id: 'class-9',
    title: 'Class 9',
    description: 'Start your preparation journey early',
    students: '100K+',
    image: 'https://images.pexels.com/photos/4778619/pexels-photo-4778619.jpeg'
  }
];

const ExamCategories: React.FC = () => {
  const handleCategoryClick = (categoryId: string) => {
    // You can handle the click event here, e.g., redirect to Telegram
    console.log(`Clicked category: ${categoryId}`);
  };

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quality Education{' '}
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Should Be Free For All
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Join our Telegram channel to access premium study materials, video lectures, and mock tests prepared by India's top educators at Coaching Wallah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="text-left w-full group relative overflow-hidden rounded-2xl bg-gray-900 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.students} students
                  </span>
                  <span className="inline-flex items-center text-white group-hover:text-gray-300 transition-colors">
                    Join Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-gray-800 to-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Join Our Telegram Channel</span>
            <ArrowRight className="ml-2 h-5 w-5 relative transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamCategories;