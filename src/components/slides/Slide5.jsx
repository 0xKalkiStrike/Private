import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Slide5 = () => (
  <div className="flex flex-col h-full p-12 bg-slate-900 text-white">
    <h2 className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-2">Project Timeline</h2>
    <h1 className="text-4xl font-extrabold mb-12">3-Week Delivery Plan</h1>
    
    <div className="flex-1 flex gap-8">
      {/* Phase 1 */}
      <div className="flex-1 bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-slate-700 text-slate-300 px-4 py-1 rounded-bl-xl font-bold text-sm">Phase 1</div>
        <h3 className="text-emerald-400 font-bold text-xl mb-1">Week 1</h3>
        <h2 className="text-2xl font-bold text-white mb-6 pb-6 border-b border-slate-700">Discovery & Design</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-300">Requirements gathering</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-300">Wireframes & UI mockups</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-300">Clover API test setup</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-300">Store data collection</span>
          </li>
        </ul>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center px-4">
        <ArrowRight className="w-8 h-8 text-emerald-500" />
      </div>

      {/* Phase 2 */}
      <div className="flex-1 bg-emerald-900/20 rounded-2xl p-8 border border-emerald-800/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-xl font-bold text-sm">Phase 2</div>
        <h3 className="text-emerald-400 font-bold text-xl mb-1">Weeks 3–7</h3>
        <h2 className="text-2xl font-bold text-white mb-6 pb-6 border-b border-emerald-800/50">Core Development</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-200">Store selector & routing</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-200">Product catalog (Clover)</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-200">Cart & checkout flow</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3 shrink-0 mt-0.5" />
            <span className="text-slate-200">Age verification system</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Slide5;