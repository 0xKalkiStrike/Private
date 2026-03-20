import React, { useState } from 'react';
import { 
  Search, Navigation, Clock, Phone, 
  CornerUpRight, ArrowRight
} from 'lucide-react';
import { mockStores } from '../data/stores';

// --- INTERACTIVE STORE SELECTOR COMPONENT ---
const StoreSelectorWidget = () => {
  const [activeStoreId, setActiveStoreId] = useState(1);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStores = mockStores.filter(store => {
    const nameMatch = store.name.toLowerCase().includes(searchQuery.toLowerCase());
    const addressMatch = store.address.toLowerCase().includes(searchQuery.toLowerCase());
    const zipMatch = store.address.includes(searchQuery);
    const filterMatch = filter === 'All' || (filter === 'Pick up' && store.pickup) || (filter === 'Delivery' && store.delivery) || (filter === 'Shipping' && store.shipping);

    return (nameMatch || addressMatch || zipMatch) && filterMatch;
  });

  const activeStore = filteredStores.find(s => s.id === activeStoreId);
  const inactiveStores = filteredStores.filter(s => s.id !== activeStoreId);

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

export default StoreSelectorWidget;