export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Rahul Sharma",
    role: "JEE Advanced 2023 | AIR 345",
    content: "The free courses from PW helped me understand complex Physics concepts that I was struggling with. The teachers explain everything so clearly!",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    id: "testimonial-2",
    name: "Priya Patel",
    role: "NEET 2023 | 650/720 Score",
    content: "I couldn't afford expensive coaching, but PW's free courses gave me everything I needed to score well in NEET. Forever grateful!",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    id: "testimonial-3",
    name: "Arjun Singh",
    role: "JEE Mains 2023 | 99.2 Percentile",
    content: "The quality of PW's free courses is better than many paid courses I've tried. Their problem-solving techniques really gave me an edge.",
    imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
];