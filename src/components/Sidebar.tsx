import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SIDEBAR_MENU, COLORS } from '../constants';

export const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-[#361756] via-[#4b1f78] to-[#2a123e] text-purple-100 flex flex-col fixed left-0 top-0 z-50 shadow-2xl">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded overflow-hidden border border-white/30 bg-purple-950/50">
          <img src="/app-icon.png" alt="Kick Skin" className="w-full h-full object-cover" />
        </div>
        <span className="text-lg font-bold text-white">Kick Skin</span>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        {SIDEBAR_MENU.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-6 mb-2 text-[10px] font-bold text-purple-200/60 uppercase tracking-widest">
              {section.title}
            </div>
            {section.items.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 text-sm transition-colors hover:bg-white/10 ${
                    isActive ? 'bg-white/12 text-white border-l-4 border-purple-300' : 'text-purple-100/90'
                  }`
                }
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
