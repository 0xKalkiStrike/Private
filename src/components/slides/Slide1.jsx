import React from 'react';

const Slide1 = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-8 bg-gradient-to-br from-slate-900 to-black text-white">
    <div className="mb-8">
      <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Brainbean Technolabs</span>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
        Multi-Store <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">E-Commerce</span> Website
      </h1>
      <h2 className="text-2xl text-gray-300 font-light mb-12">The City Smoke Shop Retail Chain</h2>
    </div>
    
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {['Multi-Store', 'Clover POS', 'Delivery & Pickup', 'Age Verified'].map(tag => (
        <span key={tag} className="px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm font-medium backdrop-blur-sm">
          {tag}
        </span>
      ))}
    </div>
    
    <div className="mt-auto pb-8 text-gray-400 border-t border-gray-800 w-full pt-8">
      <p>Prepared for: <strong className="text-white">Nilesh Patel</strong> | March 2026</p>
    </div>
  </div>
);

export default Slide1;