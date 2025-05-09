import React, { useState } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Send, Check } from 'lucide-react';

const TelegramCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real implementation, you would submit this data to your backend
  };

  return (
    <Section className="bg-indigo-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 lg:pr-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 py-1 px-4 rounded-full text-sm font-medium inline-flex items-center mb-6">
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Telegram Channel for <span className="text-yellow-400">Instant Access</span> to Free Premium Courses
          </h2>
          
          <p className="text-lg text-indigo-100 mb-8">
            Take the first step towards academic excellence. Simply join our Telegram channel and get immediate access to all our premium courses absolutely free.
          </p>
          
          <div className="flex flex-wrap gap-y-4 gap-x-6 mb-8">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-800 flex items-center justify-center mr-3">
                <Check className="h-5 w-5 text-green-400" />
              </div>
              <span>No credit card required</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-800 flex items-center justify-center mr-3">
                <Check className="h-5 w-5 text-green-400" />
              </div>
              <span>Instant access</span>
            </div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-indigo-800 flex items-center justify-center mr-3">
                <Check className="h-5 w-5 text-green-400" />
              </div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-md mx-auto">
          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">You're Almost There!</h3>
              <p className="text-gray-600 mb-6">
                Check your email for instructions to join our Telegram channel and unlock all free courses.
              </p>
              <Button variant="primary" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Open Telegram
              </Button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-2">Get Free Access Now</h3>
              <p className="text-gray-600 mb-6">
                Fill in your details below and we'll send you the link to join our Telegram channel.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Join Telegram Channel
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By clicking the button, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default TelegramCTA;