import React from 'react';
import Container from './ui/Container';
import { BookOpen, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
                <span className="ml-2 text-2xl font-bold text-white">
                  PW
                </span>
              </div>
              <p className="mb-4">
                Empowering students with premium quality education at zero cost. Join our community and unlock your full potential.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-900 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-900 transition-colors"
                  aria-label="Youtube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#courses" className="hover:text-white transition-colors">Courses</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Popular Courses</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">JEE Main & Advanced</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">NEET Preparation</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Foundation Courses</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Crash Courses</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Olympiad Training</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Board Exam Preparation</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>support@pw.com</span>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>123 Education Street, New Delhi, India - 110001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} PW Education. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;