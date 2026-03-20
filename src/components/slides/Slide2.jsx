import React from 'react';
import { Globe, Box, Store } from 'lucide-react';

const Slide2 = () => (
  <div className="flex flex-col h-full p-12 bg-gray-50 text-slate-900">
    <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">The Opportunity</h2>
    <h1 className="text-4xl font-extrabold mb-12 text-slate-900">Your Stores Need a Unified Online Presence</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
          <Globe className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-4">No Online Ordering</h3>
        <p className="text-gray-600 leading-relaxed">Customers can't order ahead or browse inventory before visiting. Sales are currently limited to walk-ins only, missing out on digital revenue.</p>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
        <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
          <Store className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-4">Fragmented Experience</h3>
        <p className="text-gray-600 leading-relaxed">Multiple store locations operating independently. There is no centralized online ordering system to unify the brand experience.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
        <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
          <Box className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold mb-4">Manual Operations</h3>
        <p className="text-gray-600 leading-relaxed">Inventory is managed separately per store. This manual approach makes it difficult to scale and efficiently manage online sales.</p>
      </div>
    </div>

    <div className="mt-8 bg-slate-900 text-white p-6 rounded-xl flex items-center shadow-lg">
      <div className="bg-emerald-500 w-2 h-full absolute left-0 rounded-l-xl"></div>
      <p className="text-xl font-medium relative pl-4">
        We will build a website that <span className="text-emerald-400 font-bold">unifies all the stores</span> and enables online ordering with delivery & pickup.
      </p>
    </div>
  </div>
);

export default Slide2;