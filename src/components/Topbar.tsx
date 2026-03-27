import React from 'react';
import { Menu, Settings, Moon, Maximize, User } from 'lucide-react';

export const Topbar = () => {
  return (
    <header className="h-16 bg-white/85 backdrop-blur-sm border-b border-purple-100 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-purple-50 rounded-lg text-purple-500 transition-colors">
          <Menu size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-purple-50 rounded-lg text-purple-400 transition-colors">
          <Settings size={18} />
        </button>
        <button className="p-2 hover:bg-purple-50 rounded-lg text-purple-400 transition-colors">
          <Moon size={18} />
        </button>
        <button className="p-2 hover:bg-purple-50 rounded-lg text-purple-400 transition-colors">
          <Maximize size={18} />
        </button>
        <div className="flex items-center gap-3 ml-4 pl-4 border-l border-purple-100">
          <div className="text-right">
            <div className="text-xs font-bold text-gray-700">Admin</div>
            <div className="text-[10px] text-purple-400">Super Admin</div>
          </div>
          <div className="w-9 h-9 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 border-2 border-white shadow-sm shadow-purple-100">
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};
