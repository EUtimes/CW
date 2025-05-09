import React from 'react';
import Navbar from './components/Navbar';
import ExamCategories from './components/ExamCategories';

function App() {
  return (
    <div className="font-sans antialiased bg-black min-h-screen">
      <Navbar />
      <ExamCategories />
    </div>
  );
}

export default App;