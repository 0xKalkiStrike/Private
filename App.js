import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, Search, Navigation, Clock, Phone, 
  CornerUpRight, ArrowRight, Globe, Box, Truck, ShieldCheck, 
  Map, TrendingUp, CheckCircle2, ShoppingCart, UserCheck, 
  CreditCard, Store
} from 'lucide-react';

// --- MOCK DATA FOR STORE SELECTOR ---
const mockStores = [
  {
    id: 1,
    name: "The City Smoke Shop | Downtown",
    address: "142 Main Street, City Center, CT 06443",
    hours: "Today 8:30 AM - 8:00 PM",
    pickup: true,
    delivery: true,
    shipping: false
  },
  {
    id: 2,
    name: "The City Smoke Shop | Westside",
    address: "1043 West Ave, Retail Park, CT 06405",
    hours: "Today 9:00 AM - 9:00 PM",
    pickup: true,
    delivery: true,
    shipping: false
  },
  {
    id: 3,
    name: "The City Smoke Shop | North Mall",
    address: "500 Mall Blvd, North District, CT 06401",
    hours: "Today 10:00 AM - 10:00 PM",
    pickup: true,
    delivery: false,
    shipping: true
  }
];

// --- INTERACTIVE STORE SELECTOR COMPONENT ---
const StoreSelectorWidget = () => {
  const [activeStoreId, setActiveStoreId] = useState(1);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const activeStore = mockStores.find(s => s.id === activeStoreId);
  const inactiveStores = mockStores.filter(s => s.id !== activeStoreId);

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-md mx-auto h-[550px] flex flex-col overflow-hidden text-sm">
      {/* Header & Search */}
      <div className="p-4 border-b border-gray-100 shrink-0">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Enter a zip code" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <button className="flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors">
          <Navigation className="w-4 h-4 mr-2" fill="currentColor" />
          Use My Current Location
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="p-4 overflow-y-auto flex-1 bg-gray-50/50">
        
        {/* Active Store */}
        {activeStore && (
          <div className="bg-white border-2 border-gray-800 rounded-xl p-4 mb-6 relative shadow-sm">
            <div className="absolute -top-3 left-4 bg-gray-200 text-gray-800 text-xs font-bold px-2 py-1 rounded tracking-wider uppercase">
              Shopping From:
            </div>
            
            <div className="flex items-start mt-2 mb-2">
              <div className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5 shrink-0">
                {activeStore.id}
              </div>
              <h3 className="font-bold text-gray-900 text-base leading-snug">{activeStore.name}</h3>
            </div>
            
            <p className="text-gray-700 mb-2 font-medium">{activeStore.address}</p>
            
            <div className="flex items-center text-gray-900 font-bold mb-3">
              <Clock className="w-4 h-4 mr-1.5" />
              {activeStore.hours}
            </div>
            
            <div className="flex gap-2 mb-4">
              {activeStore.pickup && <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-medium border border-gray-200">Pick up</span>}
              {activeStore.delivery && <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-medium border border-gray-200">Delivery</span>}
            </div>
            
            <div className="flex gap-3">
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </button>
              <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <CornerUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-bold text-gray-900 mr-2">Filter By:</span>
          {['Pick up', 'Delivery', 'Shipping'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(filter === f ? 'All' : f)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                filter === f ? 'bg-black text-white border-black' : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Inactive Stores List */}
        <div className="space-y-4">
          {inactiveStores.map((store) => (
            <div key={store.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-2">
                <div className="border border-gray-400 text-gray-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-2 mt-0.5 shrink-0">
                  {store.id}
                </div>
                <h3 className="font-bold text-gray-900 text-base leading-snug">{store.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-2 font-medium">{store.address}</p>
              
              <div className="flex items-center text-gray-900 font-bold mb-3">
                <Clock className="w-4 h-4 mr-1.5" />
                {store.hours}
              </div>
              
              <div className="flex gap-2 mb-4">
                {store.pickup && <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-xs font-medium border border-gray-200">Pick up</span>}
                {store.delivery && <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-xs font-medium border border-gray-200">Delivery</span>}
                {store.shipping && <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-xs font-medium border border-gray-200">Shipping</span>}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  <CornerUpRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveStoreId(store.id)}
                  className="flex-1 min-w-[140px] flex items-center justify-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-bold"
                >
                  Shop this Store <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SLIDE COMPONENTS ---
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


// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];
  const CurrentSlideComponent = slides[currentSlide];

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4 font-sans antialiased">
      
      {/* Slide Container 16:9 Aspect Ratio */}
      <div className="w-full max-w-6xl aspect-[16/9] bg-white rounded-xl shadow-2xl overflow-hidden relative flex flex-col">
        
        {/* Render Current Slide */}
        <div className="flex-1 overflow-hidden transition-opacity duration-300">
          <CurrentSlideComponent />
        </div>

        {/* Navigation Bar overlay */}
        <div className="absolute bottom-4 left-0 right-0 px-8 flex justify-between items-center z-50 pointer-events-none">
          <div className="text-xs font-medium text-gray-400 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md pointer-events-auto">
            {currentSlide + 1} / {slides.length}
          </div>
          
          <div className="flex gap-2 pointer-events-auto">
            <button 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${currentSlide === 0 ? 'bg-gray-800/20 text-gray-500 cursor-not-allowed' : 'bg-black/50 text-white hover:bg-black/70'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${currentSlide === slides.length - 1 ? 'bg-gray-800/20 text-gray-500 cursor-not-allowed' : 'bg-black/50 text-white hover:bg-black/70'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gray-800 w-full z-50">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <p className="text-gray-500 text-sm mt-4 flex items-center gap-2">
        <kbd className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300">Use arrow buttons to navigate</kbd> 
        <span>•</span>
        <span>Interactive elements are active on Slide 3</span>
      </p>

    </div>
  );
}