import React from 'react';

export const Toggle = ({ checked, onChange }: { checked: boolean; onChange?: (val: boolean) => void }) => (
  <button
    onClick={() => onChange?.(!checked)}
    className={`w-9 h-5 rounded-full transition-colors relative flex items-center ${checked ? 'bg-purple-600' : 'bg-gray-300'}`}
  >
    <div className={`absolute w-3.5 h-3.5 bg-white rounded-full transition-transform shadow-sm ${checked ? 'translate-x-4.5' : 'translate-x-1'}`} />
  </button>
);

export const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode; variant?: 'default' | 'purple' | 'green' | 'red' | 'blue' | 'yellow'; className?: string }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    red: 'bg-red-100 text-red-600',
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
  };
  return <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${variants[variant]} ${className}`}>{children}</span>;
};

export const PageCard = ({ children, title, action, noPadding = false }: { children: React.ReactNode; title?: string; action?: React.ReactNode; noPadding?: boolean }) => (
  <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
    {(title || action) && (
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
        {title && <h2 className="text-xs font-bold text-gray-600 uppercase tracking-widest">{title}</h2>}
        {action}
      </div>
    )}
    <div className={noPadding ? '' : 'p-6'}>{children}</div>
  </div>
);

export const Button = ({ children, onClick, variant = 'primary', className = '', size = 'md' }: { children: React.ReactNode; onClick?: () => void; variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'purple' | 'outline'; className?: string; size?: 'xs' | 'sm' | 'md' }) => {
  const variants = {
    primary: 'bg-slate-800 text-white hover:bg-slate-700',
    secondary: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    purple: 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm',
    outline: 'border border-gray-200 text-gray-600 hover:bg-gray-50',
  };
  const sizes = {
    xs: 'px-2 py-1 text-[10px]',
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
  };
  return (
    <button onClick={onClick} className={`rounded-lg font-bold transition-all active:scale-95 ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

export const IconButton = ({ icon: Icon, onClick, color = 'gray' }: { icon: any; onClick?: () => void; color?: string }) => (
  <button onClick={onClick} className={`p-1.5 rounded hover:bg-gray-100 text-${color}-500 transition-colors`}>
    <Icon size={16} />
  </button>
);

export const Tabs = ({ tabs, activeTab, onChange }: { tabs: string[]; activeTab: string; onChange: (tab: string) => void }) => (
  <div className="flex gap-2 mb-6">
    {tabs.map(tab => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={`px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors ${activeTab === tab ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export const DataTable = ({ headers, children, footer, emptyState }: { headers: string[]; children: React.ReactNode; footer?: React.ReactNode; emptyState?: React.ReactNode }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-50/50 border-y border-gray-100">
          {headers.map(h => (
            <th key={h} className="px-6 py-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {React.Children.count(children) > 0 ? children : (
          <tr>
            <td colSpan={headers.length} className="px-6 py-20 text-center">
              {emptyState || (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <div className="text-4xl">∅</div>
                  </div>
                  <div className="text-sm font-medium text-gray-400">No data available in table</div>
                </div>
              )}
            </td>
          </tr>
        )}
      </tbody>
    </table>
    {footer && <div className="px-6 py-4 border-t border-gray-100 bg-white">{footer}</div>}
  </div>
);

export const SearchInput = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => (
  <div className="flex items-center gap-2">
    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Search:</span>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-200 rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all w-56 shadow-sm"
      placeholder="Type to search..."
    />
  </div>
);

export const Pagination = ({ current, total, pageSize = 10, onPageChange }: { current: number; total: number; pageSize?: number; onPageChange: (p: number) => void }) => (
  <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">
    <div>Showing 1 to {Math.min(pageSize, total)} of {total} entries</div>
    <div className="flex gap-1.5">
      <button className="px-3 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-30 transition-all font-bold" disabled>Previous</button>
      <button className="w-8 h-8 flex items-center justify-center bg-purple-600 text-white rounded-lg shadow-md shadow-purple-100 font-black">1</button>
      <button className="px-3 h-8 flex items-center justify-center border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-30 transition-all font-bold" disabled>Next</button>
    </div>
  </div>
);
