import React from 'react';
import { Map, Box, Truck, ShieldCheck, TrendingUp } from 'lucide-react';
import StoreSelectorWidget from '../StoreSelectorWidget';

const Slide3 = () => (
  <div className="flex h-full bg-slate-50 overflow-hidden">
    <div className="w-1/2 p-12 flex flex-col justify-center bg-white z-10 shadow-2xl overflow-y-auto">
      <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">Our Solution</h2>
      <h1 className="text-4xl font-extrabold mb-8 text-slate-900">What We're Building</h1>
      
      <div className="space-y-6">
        <div className="flex">
          <div className="mt-1 mr-4 text-emerald-500"><Map className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Store Selector (Try it 👉)</h3>
            <p className="text-gray-600 text-sm">Homepage lets users choose their nearest store location and products show up based on that.</p>
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 mr-4 text-emerald-500"><Box className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Live Product Catalog</h3>
            <p className="text-gray-600 text-sm">Per-store inventory shown to user as per selection. Each store has its own products, inventory, and orders.</p>
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 mr-4 text-emerald-500"><Truck className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Delivery & Pickup</h3>
            <p className="text-gray-600 text-sm">Customer chooses fulfillment method at checkout. Optional time slot selection as well.</p>
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 mr-4 text-emerald-500"><ShieldCheck className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Age Verification</h3>
            <p className="text-gray-600 text-sm">Compliant age gate before browsing or ordering. Also uploading valid ID at the time of delivery.</p>
          </div>
        </div>
        <div className="flex">
          <div className="mt-1 mr-4 text-emerald-500"><TrendingUp className="w-6 h-6" /></div>
          <div>
            <h3 className="font-bold text-lg text-slate-900">Delivery Radius & Scalability</h3>
            <p className="text-gray-600 text-sm">Store decides delivery zones. Highly scalable architecture to add more stores anytime with specific offers.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8 relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      {/* RENDER THE INTERACTIVE WIDGET HERE */}
      <div className="relative z-10 w-full transform scale-95 transition-transform hover:scale-100 duration-300">
        <StoreSelectorWidget />
      </div>
    </div>
  </div>
);

export default Slide3;