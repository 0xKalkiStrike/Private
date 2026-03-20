import React from 'react';
import { Globe, Map, UserCheck, ShoppingCart, CheckCircle2, CreditCard, Truck, Store } from 'lucide-react';

const Slide4 = () => (
  <div className="flex flex-col h-full p-12 bg-white text-slate-900">
    <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2">User Journey</h2>
    <h1 className="text-4xl font-extrabold mb-10 text-slate-900">How a Customer Places an Order</h1>
    
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
      {[
        { step: 1, title: 'Visit Website', desc: 'Customer lands on homepage', icon: Globe },
        { step: 2, title: 'Select Store', desc: 'Picks nearest location', icon: Map },
        { step: 3, title: 'Age Verified', desc: 'Compliant age gate check', icon: UserCheck },
        { step: 4, title: 'Browse & Add', desc: 'Shop live inventory', icon: ShoppingCart },
        { step: 5, title: 'Checkout', desc: 'Delivery or pickup', icon: CheckCircle2 },
        { step: 6, title: 'Place Order', desc: 'Payment via processor', icon: CreditCard },
      ].map((item, i) => (
        <div key={item.step} className="relative flex flex-col items-center text-center p-4">
          <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 z-10 shadow-lg relative">
            <item.icon className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">{item.step}</div>
          </div>
          {i !== 5 && <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>}
          <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 flex-1 flex flex-col justify-center">
      <h3 className="text-2xl font-bold mb-6 text-center">Two Fulfillment Options</h3>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
          <div className="text-emerald-500 mt-1"><Truck className="w-8 h-8" /></div>
          <div>
            <h4 className="font-bold text-lg mb-2">Delivery</h4>
            <p className="text-sm text-gray-600">Customer enters address, delivery fee calculated, driver dispatched. Order tracked in real-time.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
          <div className="text-emerald-500 mt-1"><Store className="w-8 h-8" /></div>
          <div>
            <h4 className="font-bold text-lg mb-2">In-Store Pickup</h4>
            <p className="text-sm text-gray-600">Customer selects pickup time, store prepares order, customer collects at counter with ID check.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Slide4;