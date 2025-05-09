import React, { useState } from 'react';
import Section from './ui/Section';
import { faqs } from '../constants/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <Section id="faq" className="bg-indigo-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Frequently Asked <span className="text-indigo-900">Questions</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find answers to the most common questions about our free courses and Telegram channel.
        </p>
      </div>

      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Still have questions? Contact us directly.
        </p>
        <a 
          href="mailto:support@pw.com" 
          className="inline-flex items-center text-indigo-900 font-medium hover:underline"
        >
          support@pw.com
        </a>
      </div>
    </Section>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-6">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-indigo-900 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-indigo-900 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`mt-2 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;