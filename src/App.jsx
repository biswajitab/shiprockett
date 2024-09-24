import React from 'react';
import Navbar from './navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
         <Navbar/>
      {/* Hero Section */}
      <section className="px-4 py-12 flex flex-col items-center md:flex-row md:justify-between md:px-16">
        <div>
        <div class="text-[95px] font-bold bg-gradient-to-r from-yellow-500 via-gray-500 to-blue-500 bg-clip-text text-transparent">
           Ship your</div> 
           <div class="text-[95px] mt-[-40px] flex justify-start ms-[-20px] items-start font-bold bg-gradient-to-r from-yellow-500 via-gray-500 to-blue-500 bg-clip-text text-transparent">
            dream</div> 
          <p className="text-[#313131] max-w-[500px] text-[20px] mt-6">
            Create a delightful online journey by optimizing your
             shipping process and everything surrounding it.
          </p>
          <button className="px-6 py-3 mt-16 bg-blue-600 text-white rounded-lg">
            Sign up for free
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          
        </div>
      </section>
    </div>
  );
};

export default App;


