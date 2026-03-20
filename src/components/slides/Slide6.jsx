import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Slide6 = () => (
  <div className="flex flex-col h-full p-12 bg-gray-50 text-slate-900">
    <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">Investment & Next Steps</h2>
    <h1 className="text-4xl font-extrabold mb-10 text-slate-900">Engagement & Getting Started</h1>
    
    <div className="grid grid-cols-3 gap-6 mb-12">
      {/* Starter */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-slate-800">Starter</h3>
        <ul className="space-y-3 mb-6 flex-1">
          <li className="flex items-center text-gray-600 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400" /> 1 store location</li>
          <li className="flex items-center text-gray-600 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400" /> Basic product catalog</li>
          <li className="flex items-center text-gray-600 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400" /> Pickup only</li>
        </ul>
      </div>

      {/* Standard */}
      <div className="bg-slate-900 rounded-2xl p-6 border-2 border-emerald-500 shadow-xl flex flex-col relative transform scale-105 z-10">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Recommended
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Standard</h3>
        <ul className="space-y-3 mb-6 flex-1">
          <li className="flex items-center text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Up to 3 store locations</li>
          <li className="flex items-center text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Full Clover sync</li>
          <li className="flex items-center text-slate-300 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400" /> Delivery + Pickup</li>
        </ul>
      </div>

      {/* Enterprise */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-slate-800">Enterprise</h3>
        <ul className="space-y-3 mb-6 flex-1">
          <li className="flex items-center text-gray-600 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400" /> Unlimited stores</li>
          <li className="flex items-center text-gray-600 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400" /> Custom branding & features</li>
          <li className="flex items-center text-gray-600 text-sm"><CheckCircle2 className="w-4 h-4 mr-2 text-gray-400" /> Priority support plan</li>
        </ul>
      </div>
    </div>

    <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 flex gap-6 items-center">
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-3 text-emerald-900">How We Get Started</h3>
        <ol className="space-y-2 text-sm text-emerald-800 list-decimal pl-5">
          <li>Review this proposal together and answer your questions</li>
          <li>Sign engagement agreement & provide Clover API credentials</li>
          <li>Discovery session — gather store details & brand assets</li>
          <li>Week 1 wireframe review — your team approves the direction</li>
        </ol>
      </div>
    </div>
  </div>
);

export default Slide6;