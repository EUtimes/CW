export type Course = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  lessons: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
};

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Complete JEE Physics",
    description: "Master all the key concepts of Physics required for JEE with our comprehensive course.",
    category: "JEE",
    imageUrl: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg",
    lessons: 45,
    duration: "60 hours",
    level: "Advanced",
  },
  {
    id: "course-2",
    title: "NEET Biology Foundation",
    description: "Build a strong foundation in Biology concepts for NEET preparation with our expert-led course.",
    category: "NEET",
    imageUrl: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
    lessons: 38,
    duration: "50 hours",
    level: "Intermediate",
  },
  {
    id: "course-3",
    title: "Chemistry Mastery",
    description: "From basics to advanced concepts, master Chemistry for competitive exams with our comprehensive course.",
    category: "JEE/NEET",
    imageUrl: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    lessons: 42,
    duration: "55 hours",
    level: "Intermediate",
  },
  {
    id: "course-4",
    title: "Mathematics Problem Solving",
    description: "Learn effective problem-solving techniques for Mathematics competitive exams.",
    category: "JEE",
    imageUrl: "https://images.pexels.com/photos/6238120/pexels-photo-6238120.jpeg",
    lessons: 50,
    duration: "65 hours",
    level: "Advanced",
  },
];