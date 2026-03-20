import React from 'react';

const Slide7 = () => (
  <div className="flex flex-col items-center justify-center h-full text-center px-12 bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
    
    <div className="relative z-10 max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Let's Build <br/><span className="text-emerald-400">Something Great.</span>
      </h1>
      <h2 className="text-2xl text-gray-300 font-light mb-8">Ready to bring your stores online?</h2>
      
      <p className="text-lg text-gray-400 leading-relaxed mb-12">
        We are excited to partner with you on this project. The platform will drive new revenue, automate operations, and delight your customers — all while keeping your workflows intact.
      </p>

      <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
        Approve Proposal
      </button>
    </div>
  </div>
);

export default Slide7;